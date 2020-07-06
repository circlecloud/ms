/// <reference types="@javatypes/tomcat" />
/// <reference types="@javatypes/spring-web" />

import { constants, database, plugin, web } from "@ccms/api"
import { inject, ContainerInstance, Container, JSClass, postConstruct } from "@ccms/container"
import { JSPlugin, interfaces, cmd } from "@ccms/plugin"
import { DataBase, DataBaseManager } from '@ccms/database'
import { Server, Context, RequestHandler, Controllers, Controller, Get, Post, Param, Body } from '@ccms/web'

import * as fs from '@ccms/common/dist/fs'
import * as reflect from '@ccms/common/dist/reflect'

@Controller()
class PluginController {
    @inject(plugin.PluginManager)
    private pluginManager: plugin.PluginManager
    @inject(database.DataBaseManager)
    private databaseManager: DataBaseManager

    private mainDB: DataBase

    @postConstruct()
    initialize() {
        this.mainDB = this.databaseManager.getMainDatabase()
    }

    @Get()
    list(@Param('install') install: boolean) {
        if (install) {
            return { status: 200, data: [...this.pluginManager.getPlugins().values()].map((plugin) => plugin.description), msg: '插件列表获取成功!' }
        } else {
            return { status: 200, data: this.mainDB.query<Plugin>("SELECT name FROM plugins WHERE deleted = 0") }
        }
    }
    @Post()
    deploy(@Body() info: Plugin) {
        let plugin = this.mainDB.query<Plugin>("SELECT name FROM plugins WHERE name = ?", info.name)
        if (plugin.length == 0) {
            this.mainDB.update("INSERT INTO `plugins`(`name`, `source`) VALUES (?, ?)", info.name, info.source)
            return { status: 200, msg: `插件 ${info.name} 新增成功!` }
        } else {
            this.mainDB.update("UPDATE `plugins` SET `source` = ? WHERE id = ?", info.source, plugin[0].id)
            return { status: 200, msg: `插件 ${info.name} 更新成功!` }
        }
    }
}

@JSPlugin({ author: 'MiaoWoo', servers: [constants.ServerType.Spring], source: __filename })
export class MiaoSpring extends interfaces.Plugin {
    @inject(ContainerInstance)
    private container: Container
    @inject(plugin.PluginManager)
    private pluginManager: plugin.PluginManager
    @inject(database.DataBaseManager)
    private databaseManager: DataBaseManager
    @inject(web.Server)
    private webServer: Server

    @JSClass('org.springframework.http.HttpStatus')
    private HttpStatus: org.springframework.http.HttpStatus

    private ResponseEntity = org.springframework.http.ResponseEntity

    private mainDatabase: DataBase
    private mappings: Set<string>

    @cmd()
    mspring(sender: any) {
        this.pluginManager.reload(this)
        this.logger.sender(sender, "§a插件重载完成!")
    }

    load() {
        this.mainDatabase = this.databaseManager.getMainDatabase()
        this.mappings = new Set()
    }

    @Controllers(PluginController)
    enable() {
        this.registryDefault()
        this.registryPages()
        this.registryDatabase()
    }

    registryMapping(path: string, handler: RequestHandler) {
        this.mappings.add(path)
        this.webServer.registryMapping(path, handler)
    }

    registryDefault() {
        const foundMap = ["/node_modules/amis/sdk/sdk.js", 'https://houtai.baidu.com/v2/jssdk', "/node_modules/amis/sdk/sdk.css", 'https://houtai.baidu.com/v2/csssdk']
        this.webServer.registryInterceptor({
            name: 'RedirectHandle',
            preHandle: (ctx: Context) => {
                const index = foundMap.indexOf(ctx.request.getRequestURI())
                if (index != -1) {
                    return this.ResponseEntity.status(this.HttpStatus.FOUND).header('Location', foundMap[index + 1]).build()
                }
            }
        })
        this.webServer.registryInterceptor({
            name: 'StaticHandle',
            preHandle: (ctx: Context) => {
                let type = ctx.headers['Accept'] || ''
                if (type == '*/*' || type.includes('text/css') || type.includes('text/html')) {
                    let filePath = fs.concat(root, 'wwwroot', (ctx.request.getRequestURI() == '/' ? 'index.html' : ctx.request.getRequestURI()))
                    let fileType = 'text/html;charset=utf-8'
                    if (!fs.exists(filePath)) { filePath = filePath + '.html' }
                    if (fs.exists(filePath)) {
                        if (filePath.endsWith('.js')) { fileType = 'application/javascript' }
                        if (filePath.endsWith('.css')) { fileType = 'text/css' }
                        return this.ResponseEntity.ok().header('Content-Type', fileType).body(base.read(filePath))
                    }
                }
            }
        })
        this.registryMapping('/api/eval', (ctx: Context) => {
            try {
                return { status: 200, data: this.runCode(ctx.body + ''), msg: '代码执行成功!' }
            } catch (error) {
                return { status: 500, data: console.stack(error, false), msg: '代码执行异常!' }
            }
        })
    }

    private registryPages() {
        this.registryMapping('/api/page/list', () => {
            return { status: 0, data: { rows: this.mainDatabase.query('SELECT `id`, `type`, `name`, `content` FROM `pages` WHERE `deleted` = 0') } }
        })
        this.registryMapping('/api/page/get', (ctx: Context) => {
            let name = decodeURIComponent(`${ctx.params.name}`)
            let varable = undefined
            if (!name) { return { status: 400, msg: '名称不能为空!' } }
            if (name.includes('|')) {
                const temp = `${name}`.split('|')
                name = temp[0]
                varable = temp[1].replace(/'/ig, '"')
            }
            let result = this.mainDatabase.query<any>('SELECT content FROM `pages` WHERE name = ?', name)
            if (!result.length) { return { status: 404, msg: `'页面配置 ${name} 不存在!` } }
            let content = result[0].content
            if (varable) {
                let varObj = JSON.parse(varable)
                for (const key in varObj) {
                    content = content.replace(new RegExp(`{{${key}}}`, 'ig'), varObj[key])
                }
            }
            return { status: 0, data: JSON.parse(content) }
        })
        this.registryMapping('/api/page/add', (ctx: Context) => {
            let body = ctx.body
            if (typeof body.content !== "string") { body.content = JSON.stringify(body.content) }
            this.mainDatabase.update("INSERT INTO `pages`(`type`, `name`, `content`) VALUES (?, ?, ?)", body.type || 1, body.name, body.content)
            return { status: 0, msg: `${body.name} 新增成功!` }
        })
        this.registryMapping('/api/page/update', (ctx: Context) => {
            if (!ctx.params.id) { return { status: 400, msg: 'ID 不能为空!' } }
            const body = ctx.body
            if (typeof body.content !== "string") { body.content = JSON.stringify(body.content) }
            this.mainDatabase.update("UPDATE `pages` SET `name` = ?, `content` = ? WHERE id = ?", body.name, body.content, ctx.params.id)
            return { status: 0, msg: `${body.name} 更新成功!` }
        })
        this.registryMapping('/api/page/delete', (ctx: Context) => {
            if (!ctx.params.name) { return { status: 400, msg: '页面 名称 不能为空!' } }
            this.mainDatabase.update("UPDATE `pages` SET `name` = CONCAT(name, '_deleted'), deleted = 1 WHERE name = ?", ctx.params.name)
            return { status: 0, msg: `${ctx.params.name} 删除成功!` }
        })
    }

    private configTable = "config"

    private registryDatabase() {
        this.registryMapping('/api/config/list', (ctx: Context) => {
            return { status: 0, data: this.mainDatabase.query('SELECT id, name, label, url, driver, username, password FROM `' + this.configTable + '` WHERE deleted = 0 AND type = ?', ctx.params.type || 0) }
        })
        this.registryMapping('/api/config/get', (ctx: Context) => {
            let name = ctx.params.name
            if (!name) { return { status: 400, msg: '名称不能为空!' } }
            let result = this.mainDatabase.query('SELECT id, name, label, url, driver, username, password FROM `' + this.configTable + '` WHERE `name` = ?', name)
            if (!result.length) { return { status: 404, msg: `配置 ${name} 不存在!` } }
            return { status: 0, data: result[0] }
        })
        this.registryMapping('/api/config/add', (ctx: Context) => {
            let body = ctx.body
            if (!body.name) { return { status: 400, msg: '名称不能为空!' } }
            this.mainDatabase.update(
                'INSERT INTO `' + this.configTable + '`(`type`, `name`, `label`, `url`, `driver`, `username`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?)',
                ctx.params.type || 0, body.name, body.label || '', body.url, body.driver || '', body.username || '', body.password || ''
            )
            return { status: 0, msg: `配置 ${body.name} 新增成功!` }
        })
        this.registryMapping('/api/config/update', (ctx: Context) => {
            if (!ctx.params.id) { return { status: 400, msg: 'ID 不能为空!' } }
            let body = ctx.body
            this.mainDatabase.update(
                'UPDATE `' + this.configTable + '` SET `name` = ?, `label` = ?, `url` = ?, `driver` = ?, `username` = ?, `password` = ? WHERE `id` = ?',
                body.name, body.label || '', body.url, body.driver || '', body.username || '', body.password || '', ctx.params.id
            )
            return { status: 0, msg: `配置 ${body.name} 更新成功!` }
        })
    }

    private runCode(code: string) {
        let paramNames = [
            'beanFactory',
            'mainDatabase',
            'reflect',
            'container',
            'pluginManager'
        ]
        let params = [
            base.getInstance().getAutowireCapableBeanFactory(),
            this.mainDatabase,
            reflect,
            this.container,
            this.pluginManager
        ]
        let tfunc = new Function(
            ...paramNames,
            `var api = require('@ccms/api');
return eval(${JSON.stringify(code)});`)
        return tfunc.apply(this, params)
    }

    disable() {
        Object.keys(this.mappings).forEach((r) => this.webServer.unregistryMapping(r))
        this.webServer.unregistryInterceptor({ name: 'RedirectHandle' })
        this.webServer.unregistryInterceptor({ name: 'StaticHandle' })
    }
}

class Plugin {
    id: number
    name: string
    source: string
}
