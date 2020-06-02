import { plugin, database } from '@ccms/api'
import { provideSingleton, inject, postConstruct, Container, ContainerInstance } from '@ccms/container'
import { DataBase } from './database'

@provideSingleton(database.DataBaseManager)
export class DataBaseManager {
    @inject(ContainerInstance)
    private container: Container
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
            this.mainDatabase = new DataBase(mainDatasource)
        } catch (error) {
            console.ex(error)
        }
    }

    getMainDatabase() {
        return this.mainDatabase
    }

    createDatabase(name: string, url: string, username: string, password: string) {
        Java.synchronized(() => {
            if (this.databases[name]) return this.databases[name]
            return this.databases[name] = new DataBase(url, username, password)
        }, this.databases)()
    }

    getDatabase(name: string) {
        return this.databases[name]
    }

    disable() {
        Object.values(this.databases).forEach((ds) => ds?.close())
    }
}
