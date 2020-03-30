/// <reference types="@ms/types/dist/typings/bukkit" />
/// <reference types="@ms/types/dist/typings/sponge" />
/// <reference types="@ms/types/dist/typings/bungee" />

import { plugin as pluginApi, server, task } from '@ms/api'
import { plugin, interfaces, cmd } from '@ms/plugin'
import { inject, Container } from '@ms/container'
import * as reflect from '@ms/common/dist/reflect'
import { Server as SocketIOServer, Socket as SocketIOSocket } from '@ms/websocket'

const refList: Array<{ server: string, future: string }> = [
    { server: 'an', future: 'g' },//spigot 1.12.2
    { server: 'getServerConnection', future: 'f' },//after spigot 1.14.4
    { server: 'func_147137_ag', future: 'field_151274_e' }//catserver 1.12.2
]

@plugin({ name: 'MiaoConsole', version: '1.0.0', author: 'MiaoWoo', servers: ['!nukkit'], source: __filename })
export class MiaoConsole extends interfaces.Plugin {
    @inject(server.ServerType)
    private ServerType: string
    @inject(server.Server)
    private Server: server.Server
    @inject(task.TaskManager)
    private Task: task.TaskManager

    private pipeline: any;
    private socketIOServer: SocketIOServer;

    @cmd()
    mconsole(sender: any, command: string, args: string[]) {
    }

    disable() {
        this.socketIOServer?.close()
    }

    bukkitenable() {
        let Bukkit = Java.type('org.bukkit.Bukkit')
        let consoleServer = reflect.on(Bukkit.getServer()).get('console').get()
        this.reflectChannel(this.reflectPromise(consoleServer))
        this.injectMiaoDetect()
    }

    spongeenable() {
        let Sponge = Java.type('org.spongepowered.api.Sponge')
        let consoleServer = reflect.on(Sponge.getServer()).get()
        this.reflectChannel(this.reflectPromise(consoleServer))
        this.injectMiaoDetect()
    }

    bungeeenable() {
        let wait = this.Task.create(() => {
            try {
                // @ts-ignore
                this.pipeline = reflect.on(base.getInstance().getProxy()).get('listeners').get().toArray()[0].pipeline()
                this.injectMiaoDetect()
                wait.cancel();
            } catch (ex) {
                this.logger.warn('Wait BungeeCord start ready to get netty channel pipeline. Err: ' + ex)
            }
        }).later(300).timer(500).submit()
    }

    reflectPromise(consoleServer: any) {
        for (const ref of refList) {
            try { return reflect.on(consoleServer).call(ref.server).get(ref.future).get().get(0) } catch (error) { }
        }
    }

    reflectChannel(promise: any) {
        if (!promise) { throw Error(`Can't found ServerConnection or ChannelFuture !`) }
        this.pipeline = reflect.on(promise).get('channel').get().pipeline()
    }

    injectMiaoDetect() {
        this.socketIOServer = new SocketIOServer(this.pipeline, {
            path: '/ws'
        });
        let namespace = this.socketIOServer.of('/MiaoConsole')
        namespace.on('connect', (client: SocketIOSocket) => {
            global.setGlobal('client', client);
            client.on('type', (fn) => {
                this.logger.console(`§6客户端 §b${client.id} §a新建连接...`)
                fn && fn(this.ServerType)
                client.emit('log', `Currect Server Version is ${this.Server.getVersion()}`)
            })
            client.on('command', (cmd) => {
                setTimeout(() => this.Server.dispatchConsoleCommand(cmd), 0)
                client.emit('log', `§6命令: §b${cmd} §a执行成功!`)
            })
            client.on('exec', (code) => {
                try {
                    client.emit('log', this.Task.callSyncMethod(() => eval(code)) + '')
                } catch (ex) {
                    client.emit('log', '§4代码执行异常\n' + console.stack(ex).join('\n'))
                }
            })
            client.on('disconnect', () => {
                this.logger.console(`§6客户端 §b${client.id} §c断开连接...`)
            })
        })
        this.logger.info('Netty Channel Pipeline Inject MiaoDetectHandler Successful!')
    }
}
