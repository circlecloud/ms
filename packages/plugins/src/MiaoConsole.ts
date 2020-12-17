/// <reference types="@ccms/nashorn" />

import { plugin as pluginApi, server, task, constants, command } from '@ccms/api'
import { plugin, interfaces, cmd, tab, enable, config, disable, PluginConfig } from '@ccms/plugin'
import { ContainerInstance, Container, Autowired } from '@ccms/container'
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

@plugin({ prefix: 'Console', version: '1.1.0', author: 'MiaoWoo', servers: ['!nukkit'], source: __filename })
export class MiaoConsole extends interfaces.Plugin {
    @Autowired(ContainerInstance)
    private container: Container
    @Autowired(server.ServerType)
    private serverType: string
    @Autowired(pluginApi.PluginFolder)
    private pluginFolder: string
    @Autowired()
    private server: server.Server
    @Autowired()
    private command: command.Command
    @Autowired()
    private task: task.TaskManager
    @Autowired()
    private pluginManager: pluginApi.PluginManager

    private token: string
    private instance: any
    private socketIOServer: SocketIOServer
    private rootLogger: any
    private appender: any
    private handler: any
    private babel: any

    private logCache: string[] = []

    @config()
    private secret: PluginConfig = { token: undefined }

    load() {
        if (this.secret.token) {
            this.token = this.secret.token
            this.logger.console(`§c已从配置文件加载永久Token §4请注意服务器安全!`)
        } else {
            this.token = Java.type('java.util.UUID').randomUUID().toString()
            this.logger.console(`§6已生成随机Token: §3${this.token} §c重启后或重新生成后失效!`)
        }
        process.on('message', (msg) => {
            this.logCache.push(msg)
            if (this.logCache.length > 30) {
                this.logCache = this.logCache.slice(this.logCache.length - 30, this.logCache.length)
            }
        })
        this.task.create(() => {
            if (!this.babel) {
                this.logger.console('§3脚本 Babel 引擎初始化中 请稍候...')
                let startTime = Date.now()
                this.babel = require('@babel/standalone')
                this.compileCode(`() => console.log("Babel ready!")`)
                this.logger.console(`§3脚本 Babel 引擎初始化完毕 耗时 §a${Date.now() - startTime}ms...`)
            }
        }).async().submit()
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
        this.pluginManager.reload(this)
        return
    }

    cmdtoken(sender: any, sub: string, token: string) {
        if (sub == "set") {
            this.secret.token = this.token = token
            this.secret.save()
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
                return
            }
            if (count++ > 5) {
                wait?.cancel()
                this.logger.console('§cNetty通道注入失败 §4所有功能将无法使用！')
                return
            }
        }).later(20).timer(20).submit()
        this.rootLogger = this.server.getRootLogger()
    }

    @enable({ servers: [constants.ServerType.Bukkit, constants.ServerType.Sponge] })
    addLog4jForward() {
        if (this.rootLogger) {
            let AbstractAppender = Java.type('org.apache.logging.log4j.core.appender.AbstractAppender')
            let Level = Java.type('org.apache.logging.log4j.Level')
            let ProxyAppender = Java.extend(AbstractAppender, {
                append: (logEvent) => {
                    if (logEvent.level.intLevel() <= Level.INFO.intLevel()) {
                        process.emit('message', logEvent.getMessage().getFormattedMessage())
                    }
                }
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
                publish: (record) => process.emit('message', record.getMessage()),
                flush: () => { },
                close: () => { }
            })
            this.handler = new ProxyHandler()
            this.rootLogger.addHandler(this.handler)
        }
    }

    private LOGBACK_APPENDER_NAME = "NashornProxyAppender"

    @enable({ servers: [constants.ServerType.Spring] })
    addLogbackForward() {
        if (this.rootLogger) {
            let AppenderBase = Java.type('ch.qos.logback.core.AppenderBase')
            let ProxyAppender = Java.extend(AppenderBase, {
                append: (logEvent) => process.emit('message', logEvent.getFormattedMessage())
            })
            this.appender = new ProxyAppender()
            this.appender.start()
            this.appender.setName(this.LOGBACK_APPENDER_NAME)
            this.appender.setContext(this.rootLogger.getLoggerContext())
            this.rootLogger.addAppender(this.appender)
        }
    }

    disable() {
        if (this.socketIOServer) {
            this.socketIOServer.close()
            process.removeAllListeners('message')
        }
        if (this.container.isBound(io.Instance)) {
            this.container.unbind(io.Instance)
        }
    }

    @disable({ servers: [constants.ServerType.Bukkit, constants.ServerType.Sponge] })
    removeLog4jForward() {
        try {
            this.appender?.stop()
            this.rootLogger?.removeAppender(this.appender)
        } catch (error) {
            console.ex(error)
        }
    }

    @disable({ servers: [constants.ServerType.Bungee] })
    removeLoggerForward() {
        try {
            this.rootLogger?.removeHandler(this.handler)
        } catch (error) {
            console.ex(error)
        }
    }

    @disable({ servers: [constants.ServerType.Spring] })
    removeLogbackForward() {
        try {
            this.rootLogger?.detachAppender(this.LOGBACK_APPENDER_NAME)
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
        process.emit('websocket.create', this.socketIOServer)
    }

    startSocketIOServer() {
        let namespace = this.socketIOServer.of('/MiaoConsole')
        process.on('message', (msg) => namespace.emit('log', msg))
        namespace.on('connection', (client: SocketIOSocket) => {
            if (!this.token) {
                this.logger.console(`§6客户端 §b${client.id} §a请求连接 §4服务器尚未设置 Token 无法连接!`)
                client.emit('unauthorized', () => client.disconnect(true))
                return
            }
            if (this.token != client.handshake.query.token) {
                this.logger.console(`§6客户端 §b${client.id} §c无效请求 §4请提供正确Token后再次连接!`)
                client.emit('unauthorized', () => client.disconnect(true))
                return
            }
            this.initWebSocketClient(client)
            this.logCache.forEach(msg => client.emit('log', msg))
            this.logger.console(`§6客户端 §b${client.id} §a新建连接 ${this.rootLogger ? '启动日志转发' : '§4转发日志启动失败'}...`)
        })
        process.emit('websocket.start', this.socketIOServer)
    }

    private initWebSocketClient(client: SocketIOSocket) {
        client.on('type', (fn) => {
            fn && fn(this.serverType)
            client.emit('log', `Currect Server Version is ${this.server.getVersion()}`)
        })
        client.on('command', (cmd) => {
            this.task.callSyncMethod(() => this.server.dispatchConsoleCommand(cmd))
            client.emit('log', `§6命令: §b${cmd} §a执行成功!`)
        })
        client.on('tabComplate', (input, index, callback) => {
            try {
                callback?.(this.command.tabComplete(this.server.getConsoleSender(), input, index) || [])
            } catch (error) {
                callback?.([])
                client.emit('log', `§4命令补全发生异常: ${error}!`)
                console.ex(error)
            }
        })
        client.on('exec', (code) => {
            try {
                if (!this.babel) {
                    return client.emit('log', '§cBabel 引擎初始化中 请稍候再试!')
                }
                client.emit('log', this.runCode(code, client.nsp, client))
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
            let dir = fs.file(file)
            if (!dir.isDirectory()) {
                return fn(undefined, `${file} 不是一个目录!`)
            }
            fn(fs.list(dir).map(f => f.name))
        })
        client.on('error', (error) => {
            this.logger.console(`§6客户端 §b${client.id} §c触发异常: ${error}`)
            this.logger.error(error)
        })
        client.on('disconnect', () => {
            this.logger.console(`§6客户端 §b${client.id} §c断开连接...`)
        })
    }

    private runCode(code: string, namespace: any, client: any) {
        let paramNames = [
            'namespace',
            'client',
            'reflect',
            'container',
            'pluginManager'
        ]
        let params = [
            namespace,
            client,
            reflect,
            this.container,
            this.pluginManager
        ]
        client.emit('log', '§3代码编译中 请稍候...')
        let startTime = Date.now()
        let tfunc = new Function(...paramNames, this.compileCode(code))
        client.emit('log', `§3代码编译完成 耗时 §e${Date.now() - startTime}ms §b开始执行 请稍候...`)
        return tfunc.apply(this, params) + ''
    }

    private compileCode(code: string) {
        return `var api = require('@ccms/api');
if (this.serverType == "spring") {
    var dbm = container.get(api.database.DataBaseManager)
    var db = dbm.getMainDatabase()
    var bf = base.getInstance().getAutowireCapableBeanFactory()
}
var startTime = Date.now()
var result = eval(${JSON.stringify(this.babel.transform(code, {
            filename: 'miaoconsole-temp.ts',
            presets: ['typescript', 'es2015'],
            plugins: [
                ['proposal-decorators', { legacy: true }],
                'transform-runtime'
            ],
            sourceMaps: "inline"
        }).code)});
return '§3代码执行完成 耗时 §e' + (Date.now() - startTime) + 'ms §a返回结果: §r'+ result`
    }
}
