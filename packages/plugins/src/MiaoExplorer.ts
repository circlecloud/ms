/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { plugin, server } from '@ccms/api'
import { Autowired } from '@ccms/container'
import { Cmd, interfaces, JSPlugin, Tab } from '@ccms/plugin'
import { Server as SocketIOServer, Socket as SocketIOSocket, Namespace } from '@ccms/websocket'

import * as fs from '@ccms/common/dist/fs'

import type { MiaoConsole } from './MiaoConsole'

const FileFilter = Java.type('java.io.FileFilter')
const ByteArrayInputStream = java.io.ByteArrayInputStream
const ByteArrayOutputStream = java.io.ByteArrayOutputStream
const StandardCharsets = Java.type("java.nio.charset.StandardCharsets")
const GZIPInputStream = Java.type('java.util.zip.GZIPInputStream')
const ByteArray = Java.type("byte[]")

@JSPlugin({ prefix: 'Explorer', version: '1.0.0', author: 'MiaoWoo', source: __filename, depends: ['MiaoConsole'] })
export class MiaoExplorer extends interfaces.Plugin {
    @Autowired()
    private Server: server.Server
    @Autowired()
    private pluginManager: plugin.PluginManager

    private namespace: any
    private chunkCacheMap: Map<string, Array<string>>

    load() {
        this.chunkCacheMap = new Map()
    }

    enable() {
        let consolePlugin: MiaoConsole = this.pluginManager.getPlugin('MiaoConsole') as MiaoConsole
        consolePlugin.registryWebSocketNamespace('/MiaoExplorer', (namespace: Namespace) => {
            this.namespace = namespace
            this.namespace.on('connection', (client: SocketIOSocket) => {
                if (consolePlugin.checkWebSocketClient(client)) {
                    this.initWebSocketClient(client)
                    this.logger.console(`§6客户端 §b${client.id} §a新建连接...`)
                }
            })
        })
    }

    disable() {
        this.namespace?.close()
    }

    private readDir(dir) {
        let children = Java.from(dir.listFiles(new FileFilter({
            accept: file => file.getName().endsWith('.yml') || file.getName().endsWith('.js') || file.isDirectory()
        }))).sort().map(file => {
            if (file.isDirectory()) {
                let children = this.readDir(file)
                if (!children.length) { return null }
                return {
                    label: file.getName(),
                    value: fs.path(file),
                    children,
                    disabled: true
                }
            }
            return {
                label: file.getName(),
                value: fs.path(file),
                creatable: true,
                editable: true,
                removable: true,
                deleteApi: "delete"
            }
        })
        return children.filter(s => s)
    }

    private initWebSocketClient(client: SocketIOSocket) {
        client.on('ls', (fn) => {
            var pluginDirs = Java.from(fs.file('./plugins').listFiles(new FileFilter({
                accept: dirs => dirs.isDirectory()
            })))
            let result = {
                options: pluginDirs.sort().map(f => {
                    let node: any = {
                        label: f.getName(),
                        value: fs.path(f)
                    }
                    let children = this.readDir(f)
                    if (!children.length) {
                        return null
                    }
                    node.children = children
                    node.disabled = true
                    return node
                })
            }
            fn && fn(result.options.filter(s => s))
        })
        client.on('read', (file, callback) => {
            callback?.(base.read(file))
        })
        client.on('chunk', (file, index, content, callback) => {
            if (!this.chunkCacheMap.has(file)) {
                this.chunkCacheMap.set(file, [])
            }
            this.chunkCacheMap.get(file)[index] = content
            callback?.(true)
        })
        client.on('ungzip', (content) => {
            try {
                console.log(content)
                let baos = new ByteArrayOutputStream()
                let byte = java.util.Base64.getDecoder().decode(content)
                let gzip = new GZIPInputStream(new ByteArrayInputStream(byte))
                let buffer = new ByteArray(1024)
                let n: number
                while ((n = gzip.read(buffer)) != -1) {
                    baos.write(buffer, 0, n)
                }
                gzip.close()
                baos.close()
                content = baos.toString(StandardCharsets.UTF_8.name())
                this.logger.log(content)
            } catch (error) {
                console.ex(error)
            }
        })
        client.on('save', (file, callback) => {
            if (!this.chunkCacheMap.has(file)) {
                return callback?.(false)
            }
            let content = this.chunkCacheMap.get(file).join('')
            this.chunkCacheMap.delete(file)
            base.save(file, content)
            callback?.(true)
        })
        client.on('error', (error) => {
            this.logger.console(`§6客户端 §b${client.id} §c触发异常: ${error}`)
            this.logger.error(error)
        })
        client.on('disconnect', () => {
            this.logger.console(`§6客户端 §b${client.id} §c断开连接...`)
        })
    }
}
