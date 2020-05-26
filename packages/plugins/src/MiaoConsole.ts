/// <reference types="@ccms/types/dist/typings/bukkit" />
/// <reference types="@ccms/types/dist/typings/sponge" />
/// <reference types="@ccms/types/dist/typings/bungee" />

import { plugin as pluginApi, server, task, constants } from '@ccms/api'
import { plugin, interfaces, cmd, tab, enable, config, disable } from '@ccms/plugin'
import { inject, ContainerInstance, Container } from '@ccms/container'
import io, { Server as SocketIOServer, Socket as SocketIOSocket } from '@ccms/websocket'
import * as fs from '@ccms/common/dist/fs'
import * as reflect from '@ccms/common/dist/reflect'

const suffixMap = {
    ts: 'typescript',
    js: 'javascript',
    yml: 'yaml'
}

let help = [
    '§6========= §6[§aMiaoConsole§6] 帮助 §aBy §bMiaoWoo §6=========',
    '§6/mconsole §atoken [set] §e<Token>  §6-  §3生成/设置 登录Token',
    '§6/mconsole §areload               §6-  §3重载插件',
]

@plugin({ name: 'MiaoConsole', prefix: 'Console', version: '1.0.0', author: 'MiaoWoo', servers: ['!nukkit'], source: __filename })
export class MiaoConsole extends interfaces.Plugin {
    @inject(ContainerInstance)
    private container: Container
    @inject(server.ServerType)
    private serverType: string
    @inject(server.Server)
    private server: server.Server
    @inject(task.TaskManager)
    private task: task.TaskManager
    @inject(pluginApi.PluginManager)
    private pluginManager: pluginApi.PluginManager
    @inject(pluginApi.PluginFolder)
    private pluginFolder: string

    private token: string
    private instance: any
    private socketIOServer: SocketIOServer
    private rootLogger: any
    private appender: any
    private handler: any

    @config()
    private secret = { token: undefined }

    load() {
        if (this.secret.token) {
            this.token = this.secret.token
            this.logger.console(`§c已从配置文件加载永久Token §4请注意服务器安全!`)
        } else {
            this.token = Java.type('java.util.UUID').randomUUID().toString()
            this.logger.console(`§6已生成随机Token: §3${this.token} §c重启后或重新生成后失效!`)
        }
    }

    @cmd()
    mconsole(sender: any, command: string, args: string[]) {
        let cmdKey = 'cmd' + (args[0] || 'help')
        if (!this[cmdKey]) {
            console.sender(sender, '§4未知的子命令: §c' + cmdKey)
            console.sender(sender, `§6请执行 §b/${command} §ahelp §6查看帮助!`)
            return
        }
        args.shift()
        this[cmdKey](sender, ...args)
    }

    cmdhelp(sender: any) {
        this.logger.sender(sender, help)
    }

    cmdreload(sender: any) {
        // @ts-ignore
        require.clear('websocket')
        this.pluginManager.reload(this)
        return
    }

    cmdtoken(sender: any, sub: string, token: string) {
        if (sub == "set") {
            this.secret.token = this.token = token
            this.logger.sender(sender, '§a已保存§6服务器登录Token:§3', this.token, '§4请勿分享给其他人 防止服务器被攻击!')
            return
        }
        this.token = Java.type('java.util.UUID').randomUUID().toString()
        this.logger.sender(sender, '§a已刷新§6服务器登录Token:§3', this.token, '§4请勿分享给其他人 防止服务器被攻击!')
    }

    @tab()
    tabmconsole(sender: any, command: string, args: string[]) {
        if (args.length === 1) { return ["reload", "token"] }
        if (args[0] == "token") { return ["set"] }
    }

    enable() {
        let count = 0
        let wait = this.task.create(() => {
            this.instance = this.server.getNettyPipeline()
            if (this.instance) {
                wait?.cancel()
                this.createSocketIOServer()
                this.startSocketIOServer()
            }
            if (count++ > 30) {
                wait?.cancel()
                this.logger.console('§cNetty通道注入失败 §4所有功能将无法使用！')
                return
            }
        }).later(20).timer(40).submit()
        this.rootLogger = this.server.getRootLogger()
    }

    @enable({ servers: [constants.ServerType.Bukkit, constants.ServerType.Sponge] })
    addLog4jForward() {
        if (this.rootLogger) {
            let AbstractAppender = Java.type('org.apache.logging.log4j.core.appender.AbstractAppender')
            let ProxyAppender = Java.extend(AbstractAppender, {
                append: (logEvent) => global.eventCenter.emit('log', logEvent.getMessage().getFormattedMessage())
            })
            this.appender = new ProxyAppender("ProxyLogger", null, null)
            this.appender.start()
            this.rootLogger.addAppender(this.appender)
            this.rootLogger.setAdditive(true)
        }
    }

    @enable({ servers: [constants.ServerType.Bungee] })
    addLoggerForward() {
        if (this.rootLogger) {
            let AbstractHandler = Java.type('java.util.logging.Handler')
            let ProxyHandler = Java.extend(AbstractHandler, {
                publish: (record) => global.eventCenter.emit('log', record.getMessage()),
                flush: () => { },
                close: () => { }
            })
            this.handler = new ProxyHandler()
            this.rootLogger.addHandler(this.handler)
        }
    }

    @enable({ servers: [constants.ServerType.Spring] })
    addLogbackForward() {
        if (this.rootLogger) {
            let AppenderBase = Java.type('ch.qos.logback.core.AppenderBase')
            let ProxyAppender = Java.extend(AppenderBase, {
                append: (logEvent) => global.eventCenter.emit('log', logEvent.getFormattedMessage())
            })
            this.appender = new ProxyAppender()
            this.appender.setName("NashornProxyAppender")
            this.appender.setContext(this.rootLogger.getLoggerContext())
            this.rootLogger.addAppender(this.appender)
        }
    }

    disable() {
        if (this.socketIOServer) {
            this.socketIOServer.close()
            global.eventCenter.removeAllListeners('log')
        }
        if (this.container.isBound(io.Instance)) {
            this.container.unbind(io.Instance)
        }
    }

    @disable({ servers: [constants.ServerType.Bukkit, constants.ServerType.Sponge] })
    removeLog4jForward() {
        try {
            this.appender.stop()
            this.rootLogger.removeAppender(this.appender)
        } catch (error) {
            console.ex(error)
        }
    }

    @disable({ servers: [constants.ServerType.Bungee] })
    removeLoggerForward() {
        try {
            this.rootLogger.removeHandler(this.handler)
        } catch (error) {
            console.ex(error)
        }
    }

    @disable({ servers: [constants.ServerType.Spring] })
    removeLogbackForward() {
        try {
            this.rootLogger.detachAppender("NashornProxyAppender")
        } catch (error) {
            console.ex(error)
        }
    }

    createSocketIOServer() {
        this.socketIOServer = io(this.instance, {
            path: '/ws',
            root: fs.concat(root, 'wwwroot')
        })
        this.container.bind(io.Instance).toConstantValue(this.socketIOServer)
    }

    startSocketIOServer() {
        let namespace = this.socketIOServer.of('/MiaoConsole')
        global.eventCenter.on('log', (msg) => namespace.emit('log', msg))
        namespace.on('connect', (client: SocketIOSocket) => {
            if (!this.token) {
                this.logger.console(`§6客户端 §b${client.id} §a请求连接 §4服务器尚未设置 Token 无法连接!`)
                client.emit('unauthorized')
                client.disconnect(true)
                return
            }
            this.logger.console(`§6客户端 §b${client.id} §a请求连接 §4Token: §c********`)
            if (this.token != client.handshake.query.token) {
                this.logger.console(`§6客户端 §b${client.id} §4无效请求 请提供正确Token后再次连接!`)
                client.emit('unauthorized')
                client.disconnect(true)
                return
            }
            this.logger.console(`§6客户端 §b${client.id} §a新建连接 ${this.rootLogger ? '启动日志转发' : '§4转发日志启动失败'}...`)
            client.on('type', (fn) => {
                fn && fn(this.serverType)
                client.emit('log', `Currect Server Version is ${this.server.getVersion()}`)
            })
            client.on('command', (cmd) => {
                setTimeout(() => this.server.dispatchConsoleCommand(cmd), 0)
                client.emit('log', `§6命令: §b${cmd} §a执行成功!`)
            })
            client.on('exec', (code) => {
                try {
                    client.emit('log', this.runCode(code, namespace, client))
                } catch (ex) {
                    client.emit('log', `§4代码执行异常 错误: ${ex}\n${console.stack(ex).join('\n')}`)
                }
            })
            client.on('edit', (file: string, fn) => {
                fn && fn(base.read(file), suffixMap[file.split('.', 2)[1]])
            })
            client.on('save', (name: string, content: string, fn) => {
                this.logger.console(`§6客户端 §b${client.id} §6请求更新插件 §a${name} §6...`)
                let file = fs.concat(root, this.pluginFolder, name + '.js')
                if (!fs.exists(file)) { return fn('§6插件 §a' + name + ' §6尚未安装 §c请先创建空文件 或安装插件!') }
                try {
                    base.save(file, content)
                    this.pluginManager.reload(name)
                    fn('§6插件 §a' + name + ' §6更新成功!')
                } catch (error) {
                    this.logger.error(error)
                    fn('§6插件 §a' + name + ' §4更新异常 错误: ' + error)
                }
            })
            client.on('ls', (file: string, fn) => {
                let dir = fs.file(file);
                if (!dir.isDirectory()) {
                    return fn(undefined, `${file} 不是一个目录!`)
                }
                fn(fs.list(dir))
            })
            client.on('error', (error) => {
                this.logger.console(`§6客户端 §b${client.id} §c触发异常: ${error}`)
                this.logger.error(error)
            })
            client.on('disconnect', () => {
                this.logger.console(`§6客户端 §b${client.id} §c断开连接...`)
            })
        })
    }

    private runCode(code: string, namespace: any, client: any) {
        let tfunc = new Function('namespace', 'client', `
        var reflect = require('@ccms/common/dist/reflect');
        var tempconcent = '';
        function print(text) {
            tempconcent += text + "\\n"
        }
        var result = eval(${JSON.stringify(code)});
        return tempconcent + '§a返回结果: §r'+ result
        `)
        return this.task.callSyncMethod(() => tfunc.apply(this, [namespace, client])) + ''
    }
}
