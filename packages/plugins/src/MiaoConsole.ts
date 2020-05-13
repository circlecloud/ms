/// <reference types="@ccms/types/dist/typings/bukkit" />
/// <reference types="@ccms/types/dist/typings/sponge" />
/// <reference types="@ccms/types/dist/typings/bungee" />

import { plugin as pluginApi, server, task } from '@ccms/api'
import { plugin, interfaces, cmd } from '@ccms/plugin'
import { inject, ContainerInstance, Container } from '@ccms/container'
import io, { Server as SocketIOServer, Socket as SocketIOSocket } from '@ccms/websocket'
import * as fs from '@ccms/common/dist/fs'
import * as reflect from '@ccms/common/dist/reflect'

const suffixMap = {
    ts: 'typescript',
    js: 'javascript',
    yml: 'yaml'
}

@plugin({ name: 'MiaoConsole', version: '1.0.0', author: 'MiaoWoo', servers: ['!nukkit'], source: __filename })
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
    private pluginFolder: string;

    private pipeline: any;
    private socketIOServer: SocketIOServer;
    private rootLogger: any;
    private tempAppender: any;

    @cmd()
    mconsole(sender: any, command: string, args: string[]) {
        if (args[0] == 'reload') {
            // @ts-ignore
            require.clear('websocket');
            this.pluginManager.reload(this);
            return
        }
        let tfunc = new Function('pipeline', args.join(' '))
        tfunc.apply(this, [this.pipeline])
    }

    enable() {
        let count = 0;
        let wait = this.task.create(() => {
            this.pipeline = this.server.getNettyPipeline()
            if (this.pipeline) {
                wait.cancel()
                this.createSocketIOServer()
                this.startSocketIOServer()
            }
            if (count > 30) { wait.cancel() }
            count++
        }).later(20).timer(40).submit()
        try {
            let server = Java.type('net.minecraft.server.v1_12_R1.MinecraftServer');
            this.rootLogger = server.LOGGER.parent;
        } catch (error) {
            try {
                this.rootLogger = reflect.on(org.spongepowered.api.Sponge.getServer()).get('field_147145_h').get();
                this.rootLogger = this.rootLogger.parent.parent;
            } catch (ex) {
                console.error('§6初始化日志代理器失败 §4错误: §c' + ex)
                console.ex(ex);
            }
        }
        if (this.rootLogger) {
            let AbstractAppender = Java.type('org.apache.logging.log4j.core.appender.AbstractAppender');
            let ProxyAppender = Java.extend(AbstractAppender, {
                append: (logEvent) => global.eventCenter.emit('log', logEvent.getMessage().getFormattedMessage())
            })
            this.tempAppender = new ProxyAppender("ProxyLogger", null, null)
            this.tempAppender.start();
            this.rootLogger.addAppender(this.tempAppender);
            this.rootLogger.setAdditive(true);
        }
    }

    disable() {
        this.socketIOServer?.close()
        if (this.container.isBound(io.Instance)) {
            this.container.unbind(io.Instance)
        }
        try {
            this.tempAppender.stop();
            this.rootLogger.removeAppender(this.tempAppender);
        } catch (error) {
            console.ex(error);
        }
    }

    createSocketIOServer() {
        this.socketIOServer = io(this.pipeline, {
            path: '/ws',
            root: '/home/project/TSWorkSpace/ms/packages/plugins/public'
        });
        this.container.bind(io.Instance).toConstantValue(this.socketIOServer)
    }

    startSocketIOServer() {
        let namespace = this.socketIOServer.of('/MiaoConsole')
        namespace.on('connect', (client: SocketIOSocket) => {
            global.eventCenter.on('log', (msg) => client.emit('log', msg))
            this.logger.console(`§6客户端 §b${client.id} §a新建连接...`)
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
                    client.emit('log', '§4代码执行异常\n' + console.stack(ex).join('\n'))
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
                    this.pluginManager.reload(name);
                    fn('§6插件 §a' + name + ' §6更新成功!')
                } catch (error) {
                    this.logger.error(error)
                    fn('§6插件 §a' + name + ' §4更新异常 错误: ' + error)
                }
            })
            client.on('error', (error) => {
                this.logger.console(`§6客户端 §b${client.id} §c触发异常: ${error}`)
                this.logger.error(error)
            })
            client.on('disconnect', () => {
                this.logger.console(`§6客户端 §b${client.id} §c断开连接...`)
            })
        })
        this.logger.info('Netty Channel Pipeline Inject MiaoDetectHandler Successful!')
    }

    private runCode(code: string, namespace: any, client: any) {
        let tfunc = new Function('namespace', 'client', `
        var reflect = require('@ccms/common/dist/reflect');
        var tempconcent = '';
        function print(text) {
            tempconcent += text + "\\n"
        }
        var result = eval(${JSON.stringify(code)});
        return tempconcent + result
        `)
        return this.task.callSyncMethod(() => tfunc.apply(this, [namespace, client])) + ''
    }
}
