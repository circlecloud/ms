/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { plugin, server, task } from '@ccms/api'
import { Autowired } from '@ccms/container'
import { Config, interfaces, JSPlugin, PluginConfig } from '@ccms/plugin'

import http from '@ccms/common/dist/http'

import type { Socket as SocketIOSocket, Namespace } from '@ccms/websocket'
import type { MiaoConsole } from './MiaoConsole'

const defaultConfig = {
    statistics: {
        max: 300
    }
}

const defaultDataConfig = {
    server_online: "%server_online%",
    server_tps: "%server_tps_1%",
    server_ram_used: "%server_ram_used%",
    server_total_chunks: "%server_total_chunks%",
    server_total_living_entities: "%server_total_living_entities%",
    server_total_entities: "%server_total_entities%",
}

@JSPlugin({ prefix: 'Dashboard', version: '1.0.0', author: 'MiaoWoo', source: __filename, depends: ['MiaoConsole'] })
export class MiaoDashboard extends interfaces.Plugin {
    @Autowired()
    private server: server.Server
    @Autowired()
    private nativePluginManager: server.NativePluginManager
    @Autowired()
    private pluginManager: plugin.PluginManager
    @Autowired()
    private taskManager: task.TaskManager

    private namespace: Namespace

    @Config()
    private config: PluginConfig & typeof defaultConfig = defaultConfig
    @Config()
    private dataConfig: PluginConfig & typeof defaultDataConfig = defaultDataConfig
    @Config({ autosave: true })
    private dataCache: { [key: string]: { time: string, value: Number }[] } = {}
    private statisticTimer: task.Task

    private PlaceholderAPI: { setPlaceholders: (player: any, str: string) => string }

    load() {
        for (const key of Object.keys(this.dataConfig)) {
            this.dataCache[key] = this.dataCache[key] ?? []
        }
    }

    enable() {
        let consolePlugin: MiaoConsole = this.pluginManager.getPlugin('MiaoConsole') as MiaoConsole
        consolePlugin.registryWebSocketNamespace('/MiaoDashboard', (namespace: Namespace) => {
            this.namespace = namespace
            this.namespace.on('connection', (client: SocketIOSocket) => {
                if (consolePlugin.checkWebSocketClient(client)) {
                    this.initWebSocketClient(client)
                    this.logger.console(`§6客户端 §b${client.id} §a新建连接...`)
                }
            })
        })
        this.PlaceholderAPI = base.getClass("me.clip.placeholderapi.PlaceholderAPI").static
        this.statisticTimer = this.taskManager.create(() => {
            for (const key of Object.keys(this.dataConfig)) {
                let dataArray = this.dataCache[key]
                dataArray.push({
                    time: this.dateFormat('HH:MM:SS'),
                    value: parseFloat(this.taskManager.callSyncMethod(() => this.PlaceholderAPI['setPlaceholders(Player,String)'](null, this.dataConfig[key]))) ?? 0
                })
                if (dataArray.length > this.config.statistics.max) {
                    this.dataCache[key] = dataArray.slice(dataArray.length - this.config.statistics.max, dataArray.length)
                }
            }
        }, this).async().timer(20 * 10).submit()
    }

    private dateFormat(fmt: string, date = new Date()) {
        let ret: RegExpExecArray
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        }
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt)
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt
    }

    disable() {
        this.namespace?.close()
        this.statisticTimer.cancel()
    }

    private wrapper(fn, data) {
        fn({ status: 0, data })
    }

    private initWebSocketClient(client: SocketIOSocket) {
        client.on('message', (...args) => {
            console.log(args)
        })
        this.initStatistics(client)
        this.initPlayers(client)
        this.initPlugins(client)
        this.initServices(client)
        client.on('error', (error) => {
            this.logger.console(`§6客户端 §b${client.id} §c触发异常: ${error}`)
            this.logger.error(error)
        })
        client.on('disconnect', () => {
            this.logger.console(`§6客户端 §b${client.id} §c断开连接...`)
        })
    }

    private initStatistics(client: SocketIOSocket) {
        client.on('statistics', (data, callback) => {
            let result = {}
            data.keys.map((key: string) => result[key] = this.dataCache[key])
            this.wrapper(callback, { time: Date.now(), data: result })
        })
    }
    private initPlayers(client: SocketIOSocket) {
        client.on('players', (callback) => {
            let players = Java.from(this.server.getOnlinePlayers()).map((player: org.bukkit.entity.Player) => {
                let loc = player.getLocation()
                return {
                    name: player.getName(),
                    location: {
                        world: loc.getWorld().getName(),
                        x: loc.getX().toFixed(0),
                        y: loc.getY().toFixed(0),
                        z: loc.getZ().toFixed(0)
                    },
                    health: player.getHealth().toFixed(0),
                    foodlevel: player.getFoodLevel().toFixed(0),
                    gamemode: player.getGameMode().name(),
                    ip: player.getAddress().getAddress().getHostAddress()
                }
            })
            this.wrapper(callback, {
                items: players
            })
        })
        this.initPlayerModify(client)
        client.on('players.heal', ({ name }, callback) => {
            let player: org.bukkit.entity.Player = this.server.getPlayer(name)
            if (!player) {
                return callback({
                    status: 1,
                    msg: '玩家 ' + name + ' 不在线!'
                })
            }
            player.setHealth(player.getMaxHealth())
            player.setFoodLevel(20)
            player.sendMessage('§a您已被治疗 §7- 来自MiaoDashboard')
            return callback({
                status: 0,
                msg: '操作成功!'
            })
        })
        client.on('players.kick', ({ name, reason }, callback) => {
            let player: org.bukkit.entity.Player = this.server.getPlayer(name)
            if (!player) {
                return callback({
                    status: 1,
                    msg: '玩家 ' + name + ' 不在线!'
                })
            }
            player.kickPlayer(reason)
            return callback({
                status: 0,
                msg: '操作成功!'
            })
        })
    }
    private initPlayerModify(client: SocketIOSocket) {
        client.on('players.modify.gamemode', ({ name, gamemode }, callback) => {
            let player: org.bukkit.entity.Player = this.server.getPlayer(name)
            if (!player) {
                return callback({
                    status: 1,
                    msg: '玩家 ' + name + ' 不在线!'
                })
            }
            let GameMode = Java.type('org.bukkit.GameMode')
            let mode = GameMode.valueOf(gamemode)
            this.taskManager.callSyncMethod(() => player.setGameMode(mode))
            player.sendMessage('§a您的游戏模式已被修改为 ' + gamemode + ' §7- 来自MiaoDashboard')
            return callback({
                status: 0,
                msg: '操作成功!'
            })
        })
    }
    private initPlugins(client: SocketIOSocket) {
        this.initNativePlugins(client)
        this.initScriptPlugins(client)
    }
    private initServices(client: SocketIOSocket) {
        client.on('services.plugins', (callback) => {
            this.wrapper(callback, http.get('http://w.yumc.pw/api/free_plugin/find').data.map(plugin => {
                let installed = this.nativePluginManager.get(plugin.name)
                if (installed) {
                    plugin.installed = true
                    plugin.installedVersion = installed.version
                }
                plugin.installed = this.nativePluginManager.has(plugin.name)
                return plugin
            }))
        })
        client.on('services.plugins.install', ({ name }, callback) => {
            return callback({
                status: 0,
                msg: `插件 ${name} 安装成功!`
            })
        })
        client.on('services.plugins.update', ({ name }, callback) => {
            return callback({
                status: 0,
                msg: `插件 ${name} 安装成功!`
            })
        })
    }
    private initNativePlugins(client: SocketIOSocket) {
        client.on('plugins.natives', callback => {
            this.wrapper(callback, this.nativePluginManager.list().map(plugin => {
                plugin.status = plugin.enable ? 1 : 0
                return plugin
            }))
        })
        client.on('plugins.natives.reload', ({ name }, callback) => {
            return callback({
                status: 0,
                msg: `插件 ${name} 不存在`
            })
            return callback({
                status: 0,
                msg: `插件 ${name} 安装完成`
            })
        })
        client.on('plugins.natives.install', ({ name }, callback) => {
            return callback({
                status: 0,
                msg: `插件 ${name} 不存在`
            })
            return callback({
                status: 0,
                msg: `插件 ${name} 安装完成`
            })
        })
    }

    private initScriptPlugins(client: SocketIOSocket) {
        client.on('plugins.scripts', (callback) => {
            let plugins = []
            this.pluginManager.getPlugins().forEach((plugin) => {
                plugins.push({
                    name: plugin.description.name,
                    version: plugin.description.version,
                    author: plugin.description.author,
                    source: plugin.description.source.toString().replace(root, ''),
                    type: plugin.description.type,
                    scanner: plugin.description.loadMetadata.scanner.type,
                    loader: plugin.description.loadMetadata.loader.type,
                    status: 1
                })
            })
            this.wrapper(callback, {
                items: plugins,
                total: plugins.length
            })
        })
        client.on('plugins.scripts.reload', ({ name }, callback) => {
            let plugin: any = this.pluginManager.getPlugin(name)
            if (!plugin) {
                return callback({
                    status: 404,
                    msg: `插件 ${name} 不存在`
                })
            }
            this.pluginManager.reload(plugin)
            return callback({
                status: 0,
                msg: `插件 ${name} 重载完成`
            })
        })
    }
}
