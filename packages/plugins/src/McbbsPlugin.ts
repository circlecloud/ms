/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { plugin, server } from '@ccms/api'
import { Autowired } from '@ccms/container'
import { Cmd, interfaces, JSPlugin, Tab } from '@ccms/plugin'
import { Server as SocketIOServer, Socket as SocketIOSocket, Namespace } from '@ccms/websocket'

import * as fs from '@ccms/common/dist/fs'

const FileFilter = Java.type('java.io.FileFilter')
const ByteArrayInputStream = java.io.ByteArrayInputStream
const ByteArrayOutputStream = java.io.ByteArrayOutputStream
const StandardCharsets = Java.type("java.nio.charset.StandardCharsets")
const GZIPInputStream = Java.type('java.util.zip.GZIPInputStream')
const ByteArray = Java.type("byte[]")

@JSPlugin({ version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class McbbsPlugin extends interfaces.Plugin {
    @Autowired()
    private Server: server.Server
    @Autowired()
    private pluginManager: plugin.PluginManager

    private namespace: any

    load() {
    }

    enable() {
        let consolePlugin: any = this.pluginManager.getPlugin('MiaoConsole')
        if (consolePlugin.socketIOServer) {
            this.startWebSocketServer(consolePlugin.socketIOServer)
        } else {
            process.on('websocket.create', (server: SocketIOServer) => {
                this.startWebSocketServer(server)
            })
        }
    }

    private startWebSocketServer(server: SocketIOServer) {
        this.namespace = server.of('/McbbsPlugin')
        this.namespace.on('connect', (client: SocketIOSocket) => {
            this.initWebSocketClient(client)
            this.logger.console(`§6客户端 §b${client.id} §a新建连接...`)
        })
    }

    disable() {
        this.namespace.close()
    }

    private initWebSocketClient(client: SocketIOSocket) {
        client.on('ungzip', (content) => {

        })

        client.on('error', (error) => {
            this.logger.console(`§6客户端 §b${client.id} §c触发异常: ${error}`)
            this.logger.error(error)
        })
        client.on('disconnect', () => {
            this.logger.console(`§6客户端 §b${client.id} §c断开连接...`)
        })
    }

    @Cmd()
    msme(sender: any, command: string, args: string[]) {
        this.logger.log(sender, command, args)
        sender.sendMessage(JSON.stringify({ command, ...args }))
    }

    @Tab()
    tabmsme(_sender: any, _command: string, _args: string[]) {
        return ['world']
    }
}
