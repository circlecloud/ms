import { plugin, database } from '@ccms/api'
import { DataBaseManager } from '@ccms/database'
import { provideSingleton, inject } from '@ccms/container'

import * as fs from '@ccms/common/dist/fs'

@provideSingleton(plugin.PluginScanner)
export class MySQLScanner implements plugin.PluginScanner {
    type: string = "mysql"

    private target: string

    @inject(database.DataBaseManager)
    private databaseManager: DataBaseManager

    scan(target: any): string[] {
        this.target = target
        let plugins = this.databaseManager.getMainDatabase().query<{ name: string }>(`SELECT name FROM ${this.target} WHERE LENGTH(source) != 0 AND deleted = 0`)
        return plugins.map(p => `mysql:${p.name}`)
    }
    load(target: any) {
        if (typeof target !== "string" || !target.startsWith('mysql:')) { return }
        let name = target.split("mysql:")[1]
        if (!name) { console.warn(`[PluginScanner][mysql] plugin name can't be null!`); return }
        var plugin: any = this.databaseManager.getMainDatabase().query<{ source: string }>(`SELECT source FROM ${this.target} WHERE name = ? AND deleted = 0`, name)
        if (plugin.length == 0) { console.warn(`[PluginScanner][mysql] plugin ${target} not found at mysql database...`); return }
        let temp = fs.concat(root, 'mysql-plugin-cache', target, `${plugin[0]}.js`)
        base.save(temp, plugin[0].source)
        //@ts-ignore
        return require(temp, { cache: false })
    }
}
