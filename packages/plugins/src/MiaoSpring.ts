/// <reference types="@ccms/types" />
/// <reference types="@ccms/types/dist/typings/tomcat/index" />
/// <reference types="@ccms/types/dist/typings/spring/index" />

import { constants, database, plugin as pluginApi } from "@ccms/api"
import { inject, ContainerInstance, Container } from "@ccms/container"
import { plugin, interfaces, cmd } from "@ccms/plugin"
import { DataBase, DataBaseManager } from '@ccms/database'
import * as fs from '@ccms/common/dist/fs'

const ProxyBeanName = 'webServerProxy'
type RequestHandler = (req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse) => any
interface InterceptorAdapter {
    preHandle?(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): { next: boolean, value?: any }
    postHandle?(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse, result: any): void
}

@plugin({ name: 'MiaoSpring', prefix: 'MSpring', version: '1.0.1', author: 'MiaoWoo', servers: [constants.ServerType.Spring], source: __filename })
export class MiaoSpring extends interfaces.Plugin {
    private WebServerProxy = Java.type('pw.yumc.MiaoScript.web.WebServerProxy')
    private StreamUtils = Java.type('org.springframework.util.StreamUtils')
    private ResponseEntity = org.springframework.http.ResponseEntity

    @inject(pluginApi.PluginInstance)
    private context: any
    @inject(pluginApi.PluginManager)
    private pluginManager: pluginApi.PluginManager
    @inject(database.DataBaseManager)
    private databaseManager: DataBaseManager

    private beanFactory: any
    private mainDatabase: DataBase
    private interceptors: InterceptorAdapter[] = []
    private requestMapping: { [key: string]: RequestHandler } = {}

    @cmd()
    mspring(sender: any, command: string, args: string[]) {
        //@ts-ignore
        require.clear('database')
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
    }

    registryWebBean() {
        try { this.beanFactory.destroySingleton('webServerProxy') } catch (ex) { }
        var WebServerProxyNashorn = Java.extend(this.WebServerProxy, {
            process: (req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse) => {
                for (const interceptor of this.interceptors) {
                    if (interceptor.preHandle) {
                        try {
                            let result = interceptor.preHandle(req, resp)
                            if (!result.next) { return result.value }
                        } catch (error) {
                            console.ex(error)
                            return error
                        }
                    }
                }
                let result: any
                if (this.requestMapping[req.getRequestURI()]) {
                    try {
                        result = this.requestMapping[req.getRequestURI()](req, resp)
                    } catch (error) {
                        result = {
                            status: 500,
                            msg: '' + error,
                            path: req.getRequestURI(),
                            error: console.stack(error, false),
                            timestamp: Date.now()
                        }
                    }
                } else {
                    result = {
                        status: 404,
                        msg: "requestMapping Not Found!",
                        path: req.getRequestURI(),
                        timestamp: Date.now()
                    }
                }
                for (const interceptor of this.interceptors) { interceptor.postHandle && interceptor.postHandle(req, resp, result) }
                return result
            }
        })
        this.beanFactory.registerSingleton(ProxyBeanName, new WebServerProxyNashorn())
    }

    registryMapping(path: string, handler: RequestHandler) {
        this.requestMapping[path] = handler
    }

    registryDefault() {
        this.interceptors.push({
            preHandle: (req, resp) => {
                if (req.getRequestURI() == "/node_modules/amis/sdk/sdk.js") {
                    return {
                        next: false,
                        value: this.ResponseEntity
                            .status(org.springframework.http.HttpStatus.FOUND)
                            .header('Location', 'https://houtai.baidu.com/v2/jssdk').build()
                    }
                }
                if (req.getRequestURI() == "/node_modules/amis/sdk/sdk.css") {
                    resp.setStatus(302)
                    return {
                        next: false,
                        value: this.ResponseEntity
                            .status(org.springframework.http.HttpStatus.FOUND)
                            .header('Location', 'https://houtai.baidu.com/v2/csssdk').build()
                    }
                }
                let filePath = fs.concat(root, 'wwwroot', (req.getRequestURI() == '/' ? 'index.html' : req.getRequestURI()))
                let fileType = 'text/html;charset=utf-8'
                if (!fs.exists(filePath)) { filePath = filePath + '.html' }
                if (fs.exists(filePath)) {
                    if (filePath.endsWith('.js')) { fileType = 'application/javascript' }
                    if (filePath.endsWith('.css')) { fileType = 'text/css' }
                    // @ts-ignore
                    return { next: false, value: this.ResponseEntity.ok().header('Content-Type', fileType).body(base.read(filePath)) }
                }
                return { next: true }
            },
            postHandle: (req, resp, result) => {
                if (result && !result.class && result.status) { resp.setStatus(result.status) }
            }
        })
        this.registryMapping('/api/eval', (req, resp) => {
            let code = this.StreamUtils.copyToString(req.getInputStream(), java.nio.charset.StandardCharsets.UTF_8)
            try {
                return { status: 200, data: this.runCode(code), msg: '代码执行成功!' }
            } catch (error) {
                return { status: 500, data: console.stack(error, false), msg: '代码执行异常!' }
            }
        })
    }

    private runCode(code: string) {
        let tfunc = new Function('beanFactory', 'mainDatabase', `
        var reflect = require('@ccms/common/dist/reflect');
        var container = require('@ccms/container').DefaultContainer;
        var api = require('@ccms/api');
        var pluginManager = container.get(api.plugin.PluginManager);
        var tempconcent = '';
        function print(text) {
            tempconcent += text + "\\n"
        }
        var result = eval(${JSON.stringify(code)});
        return tempconcent + result
        `)
        return tfunc.apply(this, [this.beanFactory, this.mainDatabase]);
    }

    disable() {
        Object.keys(this.requestMapping).forEach((r) => delete this.requestMapping[r])
        this.beanFactory.destroySingleton(ProxyBeanName)
    }
}
