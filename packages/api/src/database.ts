import { injectable } from "@ccms/container"

export namespace database {
    export const DataSource = Symbol("DataSource")
    /**
     * 数据库配置
     */
    export interface DataBaseConfig {
        /**
         * 数据库连接串
         */
        url: string | javax.sql.DataSource
        /**
         * 数据库驱动
         */
        driverClassName?: string
        /**
         * 用户名
         */
        username?: string
        /**
         * 密码
         */
        password?: string
        /**
         * 链接属性
         */
        properties?: { [key: string]: any }
    }

    @injectable()
    export abstract class DataBaseManager {
        abstract setMainDatabase(mainDatabase: DataBase): void
        abstract getMainDatabase(): DataBase
        abstract createDatabase(name: string, config: DataBaseConfig): DataBase
        abstract removeDatabase(name: string): boolean
        abstract getDatabase(name: string): DataBase
        abstract startWebManager(...args: string[])
        abstract stopWebManager()
        abstract shutdown()
    }
    @injectable()
    export abstract class DataBase {
        abstract query<T>(sql: string, ...args: any[]): Array<T>
        abstract update(sql: string, ...args: any[]): number
        abstract execute(sql: string): void
    }
}
