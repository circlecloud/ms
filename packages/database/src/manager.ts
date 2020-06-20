import { plugin, database } from '@ccms/api'
import { provideSingleton, inject, postConstruct } from '@ccms/container'
import { DataBase, DataBaseConfig } from './database'

@provideSingleton(database.DataBaseManager)
export class DataBaseManager {
    @inject(plugin.PluginInstance)
    private instance: any

    private beanFactory: any
    private mainDatabase: DataBase
    private databases: { [key: string]: DataBase } = {}

    @postConstruct()
    initialize() {
        try {
            this.beanFactory = this.instance.getAutowireCapableBeanFactory()
            let mainDatasource = this.beanFactory.getBean(Packages.javax.sql.DataSource.class)
            this.mainDatabase = new DataBase({ url: mainDatasource })
        } catch (error) {
            console.ex(error)
        }
    }

    /**
     * 获得主数据库
     * Get MainDatabase
     */
    getMainDatabase() {
        return this.mainDatabase
    }

    /**
     * 创建数据库
     * Create A Database Instance
     * @param name 数据库名称 用于代码 database Name use at code
     * @param config 数据库配置
     */
    createDatabase(name: string, config: DataBaseConfig) {
        Java.synchronized(() => {
            if (this.databases[name]) return this.databases[name]
            return this.databases[name] = new DataBase(config)
        }, this.databases)()
    }

    getDatabase(name: string) {
        return this.databases[name]
    }

    disable() {
        Object.values(this.databases).forEach((ds) => ds?.close())
    }
}
