import { database } from '@ccms/api'
import { provideSingleton } from '@ccms/container'
import { DataBase, DataBaseConfig } from './database'

@provideSingleton(database.DataBaseManager)
export class DataBaseManager {
    private mainDatabase: DataBase
    private databases = new Map<string, DataBase>()

    /**
     * 设置主数据库
     * @param mainDatabase 主数据库
     */
    setMainDatabase(mainDatabase: DataBase) {
        this.mainDatabase = mainDatabase
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
            if (!this.databases.has(name)) {
                this.databases.set(name, new DataBase(config))
            }
            return this.databases.get(name)
        }, this.databases)()
    }

    getDatabase(name: string) {
        return this.databases.get(name)
    }

    disable() {
        this.databases.forEach((db) => db.close())
        this.databases.clear()
    }
}
