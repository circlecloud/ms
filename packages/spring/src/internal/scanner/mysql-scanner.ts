import { plugin, database } from '@ccms/api'
import { DataBaseManager } from '@ccms/database'
import { provideSingleton, inject } from '@ccms/container'

import * as fs from '@ccms/common/dist/fs'

interface MySQLPlugin {
    name: string
    source: string
}

@provideSingleton(plugin.PluginScanner)
export class MySQLScanner implements plugin.PluginScanner {
    type: string = "mysql"

    private cacheDir = 'mysql-plugin-cache'
    private cacheFileMap: Map<string, MySQLPlugin> = new Map()
    private target: string

    @inject(database.DataBaseManager)
    private databaseManager: DataBaseManager

    scan(target: any): plugin.PluginLoadMetadata[] {
        this.target = target
        let plugins = this.databaseManager.getMainDatabase().query<MySQLPlugin>(`SELECT name FROM ${this.target} WHERE LENGTH(source) != 0 AND deleted = 0`)
        return plugins.map(p => this.read(p))
    }
    read(mysqlPlugin: MySQLPlugin): plugin.PluginLoadMetadata {
        // if invoke this function from loadFromFile mysqlPlugin is a string need read from cache
        if (typeof mysqlPlugin == "string") {
            if (!this.cacheFileMap.has(mysqlPlugin)) { throw new Error(`this file ${mysqlPlugin} is not read from mysql-scanner. can't reload from this scanner!`) }
            mysqlPlugin = this.cacheFileMap.get(mysqlPlugin)
        }
        let cacheFile = fs.concat(root, this.cacheDir, `${mysqlPlugin.name}.js`)
        this.cacheFileMap.set(cacheFile, mysqlPlugin)
        return { name: mysqlPlugin.name, file: cacheFile, type: this.type, mysqlPlugin, scanner: this }
    }
    load(metadata: plugin.PluginLoadMetadata) {
        if (metadata.type !== this.type) { return }
        var plugin: any = this.databaseManager.getMainDatabase().query<MySQLPlugin>(`SELECT source FROM ${this.target} WHERE name = ? AND deleted = 0`, metadata.name)
        if (plugin.length == 0) { throw new Error(`[MySQLScanner] plugin ${metadata.name} not found at mysql database...`) }; plugin = plugin[0]
        if (!plugin.source) { throw new Error(`[MySQLScanner] plugin ${metadata.name} source can\'t be undefiend or empty...`) }
        base.save(metadata.file, plugin.source)
        //@ts-ignore
        metadata.instance = require(metadata.file, { cache: false })
        return metadata
    }
}
