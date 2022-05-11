import { database } from '@ccms/api'
import { JSClass, postConstruct } from '@ccms/container'

const Properties = Java.type('java.util.Properties')

/**
 * 数据库封装类
 */
export class DataBase extends database.DataBase {
    private dataSource: javax.sql.DataSource
    private jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate

    @JSClass('com.zaxxer.hikari.HikariDataSource')
    private HikariDataSource: any
    @JSClass('com.zaxxer.hikari.HikariConfig')
    private HikariConfig: any
    @JSClass('org.springframework.jdbc.core.JdbcTemplate')
    private JdbcTemplate: typeof org.springframework.jdbc.core.JdbcTemplate

    constructor(dbConfig: database.DataBaseConfig) {
        super()
        if (!dbConfig.url) { throw new Error('DataBase url can\'t be null!') }
        this.createDataSource(dbConfig)
    }

    private createDataSource(dbConfig: database.DataBaseConfig) {
        if (typeof dbConfig.url === "string") {
            let config = new this.HikariConfig()
            if (dbConfig.driverClassName) {
                config.setDriverClassName(dbConfig.driverClassName)
            }
            if (dbConfig.username) {
                config.setUsername(dbConfig.username)
            }
            if (dbConfig.password) {
                config.setPassword(dbConfig.password)
            }
            config.setJdbcUrl(dbConfig.url)
            if (dbConfig.properties) {
                let properties = new Properties()
                for (const key in dbConfig.properties) {
                    properties.setProperty(key, dbConfig.properties[key])
                }
                config.setDataSourceProperties(properties)
            }
            this.dataSource = new this.HikariDataSource(config)
        } else {
            this.dataSource = dbConfig.url
        }
    }

    @postConstruct()
    private initialize() {
        this.jdbcTemplate = new this.JdbcTemplate(this.dataSource)
    }

    /**
     * 执行SQL查询
     * @param sql SQL语句
     * @param args 参数
     */
    query<T>(sql: string, ...args: any[]): Array<T> {
        let startTime = Date.now()
        let result = Java.from<any>(this.jdbcTemplate.queryForList(sql, args))
        console.debug(java.lang.String.format(`\n[DB] query \nSQL  : ${sql.replace(/\?/ig, '%s')} \nCOST : ${Date.now() - startTime}ms`, args))
        return result
    }

    /**
     * 执行SQL更新
     * @param sql SQL语句
     * @param args 参数
     */
    update(sql: string, ...args: any[]): number {
        let startTime = Date.now()
        let result = this.jdbcTemplate.update(sql, args)
        console.debug(java.lang.String.format(`\n[DB] update \nSQL  : ${sql.replace(/\?/ig, '%s')} \nCOST : ${Date.now() - startTime}ms`, args))
        return result
    }

    /**
     * 执行SQL语句
     * @param sql SQL语句
     */
    execute(sql: string): void {
        let startTime = Date.now()
        this.jdbcTemplate.execute(sql)
        console.debug(java.lang.String.format(`\n[DB] execute \nSQL  : sql} \nCOST : ${Date.now() - startTime}ms`))
    }

    close() {
        //@ts-ignore
        this.dataSource.close()
    }
}
