/// <reference types="@ccms/types" />
/// <reference types="@ccms/types/dist/typings/tomcat/index" />
/// <reference types="@ccms/types/dist/typings/spring/index" />

import { constants, database, plugin } from "@ccms/api"
import { inject, ContainerInstance, Container, JSClass } from "@ccms/container"
import { JSPlugin, interfaces, cmd } from "@ccms/plugin"
import { DataBase, DataBaseManager } from '@ccms/database'
import * as fs from '@ccms/common/dist/fs'
import * as reflect from '@ccms/common/dist/reflect'
import * as querystring from 'querystring'

const WebProxyBeanName = 'webServerProxy'
const FilterProxyBeanName = 'webFilterProxy'
type RequestHandler = (ctx: Context) => any
interface InterceptorAdapter {
    name: string
    preHandle?(ctx: Context): void
    postHandle?(ctx: Context): void
}

type RequestHeader = { [key: string]: string | string[] }
type RequestParams = { [key: string]: string | string[] }

interface Context {
    request?: javax.servlet.http.HttpServletRequest
    response?: javax.servlet.http.HttpServletResponse
    header?: RequestHeader
    url?: string
    params?: RequestParams
    body?: any
    result?: any
}

@JSPlugin({ name: 'MiaoSpring', prefix: 'MSpring', version: '1.0.1', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename })
export class MiaoSpring extends interfaces.Plugin {
    @JSClass('pw.yumc.MiaoScript.web.WebServerProxy')
    private WebServerProxy: any
    @JSClass('pw.yumc.MiaoScript.web.WebFilterProxy')
    private WebFilterProxy: any
    private StreamUtils = org.springframework.util.StreamUtils
    private ResponseEntity = org.springframework.http.ResponseEntity

    @inject(ContainerInstance)
    private container: Container
    @inject(plugin.PluginInstance)
    private context: any
    @inject(plugin.PluginManager)
    private pluginManager: plugin.PluginManager
    @inject(database.DataBaseManager)
    private databaseManager: DataBaseManager

    private beanFactory: any
    private mainDatabase: DataBase
    private interceptors: InterceptorAdapter[] = []
    private requestMapping: { [key: string]: RequestHandler } = {}

    @cmd()
    mspring(sender: any) {
        this.pluginManager.reload(this)
        this.logger.sender(sender, "§a插件重载完成!")
    }

    load() {
        this.beanFactory = this.context.getAutowireCapableBeanFactory()
        this.mainDatabase = this.databaseManager.getMainDatabase()
    }

    enable() {
        this.registryWebBean()
        this.registryDefault()
        this.registryPages()
        this.registryDatabase()
    }

    registryWebBean() {
        try { this.beanFactory.destroySingleton(FilterProxyBeanName); this.beanFactory.destroySingleton(WebProxyBeanName) } catch (ex) { }
        var WebFilterProxyNashorn = Java.extend(this.WebFilterProxy, {
            doFilter: (servletRequest: javax.servlet.http.HttpServletRequest, servletResponse: javax.servlet.http.HttpServletResponse, filterChain: javax.servlet.FilterChain) => {
                console.log('WebFilterProxyNashorn', 'doFilter', servletRequest, servletResponse)
                filterChain.doFilter(servletRequest, servletResponse)
            }
        })
        this.beanFactory.registerSingleton(FilterProxyBeanName, new WebFilterProxyNashorn())
        var WebServerProxyNashorn = Java.extend(this.WebServerProxy, {
            process: (req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse) => {
                let ctx: Context = { request: req, response: resp }
                ctx.url = req.getRequestURI()
                // @ts-ignore
                ctx.header = { __noSuchProperty__: (name: string) => req.getHeader(name) + '' }
                if (req.getQueryString()) {
                    ctx.url += `?${req.getQueryString()}`
                    ctx.params = querystring.parse(req.getQueryString())
                }
                if (req.getMethod() == "POST") {
                    ctx.body = this.StreamUtils.copyToString(req.getInputStream(), java.nio.charset.StandardCharsets.UTF_8)
                    if ((ctx.header['Content-Type'] || '').includes('application/json')) {
                        try {
                            ctx.body = JSON.parse(ctx.body)
                        } catch (error) {
                            return {
                                status: 500,
                                msg: `parse json body error: ${error}`,
                                path: ctx.url,
                                error: console.stack(error, false),
                                timestamp: Date.now()
                            }
                        }
                    }
                }
                let result = this.process(ctx)
                result?.status && resp.setStatus(result.status)
                return result
            }
        })
        this.beanFactory.registerSingleton(WebProxyBeanName, new WebServerProxyNashorn())
    }

    private process(ctx: Context) {
        let startTime = Date.now()
        for (const interceptor of this.interceptors) {
            if (interceptor.preHandle) {
                try {
                    let startTime = Date.now()
                    ctx.result = interceptor.preHandle(ctx)
                    let preHandleTime = Date.now() - startTime
                    if (preHandleTime > 20) {
                        console.debug(`[WARN] Interceptor ${interceptor.name} preHandle cost time ${preHandleTime}ms!`)
                    }
                    if (ctx.result) { return ctx.result }
                } catch (error) {
                    console.ex(error)
                    return {
                        status: 500,
                        msg: `Interceptor ${interceptor.name} preHandle error: ${error}`,
                        path: ctx.url,
                        error: console.stack(error, false),
                        timestamp: Date.now()
                    }
                }
            }
        }
        let preHandleTime = Date.now() - startTime; startTime = Date.now()
        ctx.result = this.execRequestHandle(ctx)
        let execTime = Date.now() - startTime; startTime = Date.now()
        for (const interceptor of this.interceptors) {
            if (interceptor.postHandle) {
                try {
                    ctx.result = interceptor.postHandle(ctx)
                } catch (error) {
                    return {
                        status: 500,
                        msg: `Interceptor ${interceptor.name} postHandle error: ${error}`,
                        path: ctx.url,
                        error: console.stack(error, false),
                        timestamp: Date.now()
                    }
                }
            }
        }
        let postHandleTime = Date.now() - startTime
        console.debug(`
===================== MiaoSpring =====================
Request    URL   : ${ctx.url}
preHandle  Time  : ${preHandleTime}ms
exec       Time  : ${execTime}ms
Response   Body  : ${JSON.stringify(Java.asJSONCompatible(ctx.result))}
postHandle Time  : ${postHandleTime}ms
Handle     Time  : ${preHandleTime + execTime + postHandleTime}ms
======================================================`)
        return ctx.result
    }

    private execRequestHandle(ctx: Context) {
        if (!this.requestMapping[ctx.request.getRequestURI()]) {
            return {
                status: 404,
                msg: "requestMapping Not Found!",
                path: ctx.url,
                timestamp: Date.now()
            }
        }
        try {
            return this.requestMapping[ctx.request.getRequestURI()](ctx)
        } catch (error) {
            return {
                status: 500,
                msg: '' + error,
                path: ctx.url,
                error: console.stack(error, false),
                timestamp: Date.now()
            }
        }
    }

    registryMapping(path: string, handler: RequestHandler) {
        this.requestMapping[path] = handler
    }

    registryDefault() {
        const foundMap = ["/node_modules/amis/sdk/sdk.js", 'https://houtai.baidu.com/v2/jssdk', "/node_modules/amis/sdk/sdk.css", 'https://houtai.baidu.com/v2/csssdk']
        this.interceptors.push({
            name: 'RedirectHandle',
            preHandle: (ctx: Context) => {
                const index = foundMap.indexOf(ctx.request.getRequestURI())
                if (index != -1) {
                    return this.ResponseEntity.status(org.springframework.http.HttpStatus.FOUND).header('Location', foundMap[index + 1]).build()
                }
            }
        })
        this.interceptors.push({
            name: 'StaticHandle',
            preHandle: (ctx: Context) => {
                let type = ctx.header['Accept'] || ''
                if (type == '*/*' || type.includes('text/css') || type.includes('text/html')) {
                    let filePath = fs.concat(root, 'wwwroot', (ctx.request.getRequestURI() == '/' ? 'index.html' : ctx.request.getRequestURI()))
                    let fileType = 'text/html;charset=utf-8'
                    if (!fs.exists(filePath)) { filePath = filePath + '.html' }
                    if (fs.exists(filePath)) {
                        if (filePath.endsWith('.js')) { fileType = 'application/javascript' }
                        if (filePath.endsWith('.css')) { fileType = 'text/css' }
                        // @ts-ignore
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
        this.registryMapping('/api/plugin/list', () => {
            return { status: 200, data: [...this.pluginManager.getPlugins().values()].map((plugin) => plugin.description), msg: '插件列表获取成功!' }
        })
        this.registryMapping('/api/plugin/update', (ctx: Context) => {
            if (!ctx.params.name) { return { status: 400, msg: '插件名称不得为空!' } }

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
            this.beanFactory,
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
        Object.keys(this.requestMapping).forEach((r) => delete this.requestMapping[r])
        this.beanFactory.destroySingleton(WebProxyBeanName)
    }
}
