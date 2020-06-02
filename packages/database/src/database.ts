/// <reference types="@ccms/types/dist/typings/spring" />

const HikariDataSource = Java.type('com.zaxxer.hikari.HikariDataSource')
const HikariConfig = Java.type('com.zaxxer.hikari.HikariConfig')
const JdbcTemplate = Java.type('org.springframework.jdbc.core.JdbcTemplate')

/**
 * 数据库封装类
 */
export class DataBase {
    private dataSource: javax.sql.DataSource
    private jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate

    constructor(url: string | javax.sql.DataSource, username?: string, password?: string) {
        if (!url) { throw new Error('DataBase url can\'t be null!') }
        this.createDataSource(url, username, password)
        this.initialize()
    }

    private createDataSource(url: string | javax.sql.DataSource, username?: string, password?: string) {
        if (typeof url === "string") {
            if (!username || !password) {
                throw new Error('DataBase username or password can\'t be null!')
            }
            let config = new HikariConfig()
            config.setUsername(username)
            config.setPassword(password)
            config.setJdbcUrl(url)
            this.dataSource = new HikariDataSource(config)
        } else {
            this.dataSource = url
        }
    }

    private initialize() {
        this.jdbcTemplate = new JdbcTemplate(this.dataSource)
    }

    /**
     * 执行SQL查询
     * @param sql SQL语句
     */
    query<T>(sql: string, ...args: any[]): Array<T> {
        return this.jdbcTemplate.queryForList(sql, args)
    }

    close() {
        //@ts-ignore
        this.dataSource.close()
    }
}
