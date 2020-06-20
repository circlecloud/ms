/// <reference types="@ccms/types/dist/typings/spring" />

import { Model } from './model'

const HikariDataSource = Java.type('com.zaxxer.hikari.HikariDataSource')
const HikariConfig = Java.type('com.zaxxer.hikari.HikariConfig')
const JdbcTemplate = Java.type('org.springframework.jdbc.core.JdbcTemplate')

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
}

/**
 * 数据库封装类
 */
export class DataBase {
    private dataSource: javax.sql.DataSource
    private jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate

    constructor(dbConfig: DataBaseConfig) {
        if (!dbConfig.url) { throw new Error('DataBase url can\'t be null!') }
        this.createDataSource(dbConfig)
        this.initialize()
    }

    private createDataSource(dbConfig: DataBaseConfig) {
        if (typeof dbConfig.url === "string") {
            if (!dbConfig.username || !dbConfig.password) {
                throw new Error('DataBase username or password can\'t be null!')
            }
            let config = new HikariConfig()
            if (dbConfig.driverClassName) {
                config.setDriverClassName(dbConfig.driverClassName)
            }
            config.setUsername(dbConfig.username)
            config.setPassword(dbConfig.password)
            config.setJdbcUrl(dbConfig.url)
            this.dataSource = new HikariDataSource(config)
        } else {
            this.dataSource = dbConfig.url
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
        let startTime = Date.now()
        let result = Java.from(this.jdbcTemplate.queryForList(sql, args))
        console.debug(java.lang.String.format(`\n[DB] query \nSQL  : ${sql.replace(/\?/ig, '%s')} \nCOST : ${Date.now() - startTime}ms`, args))
        return result
    }

    /**
     * 执行SQL更新
     * @param sql SQL语句
     */
    update(sql: string, ...args: any[]): number {
        let startTime = Date.now()
        let result = this.jdbcTemplate.update(sql, args)
        console.debug(java.lang.String.format(`\n[DB] update \nSQL  : ${sql.replace(/\?/ig, '%s')} \nCOST : ${Date.now() - startTime}ms`, args))
        return result
    }

    close() {
        //@ts-ignore
        this.dataSource.close()
    }
}
