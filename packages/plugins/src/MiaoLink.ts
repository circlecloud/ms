/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { server, task } from '@ccms/api'
import { Autowired } from '@ccms/container'
import { Cmd, JSPlugin, Tab, interfaces, PluginConfig, Config } from '@ccms/plugin'

import * as fs from '@ccms/common/dist/fs'
import http from '@ccms/common/dist/http'

import * as base64 from 'base64-js'

const Runtime: typeof java.lang.Runtime = Java.type('java.lang.Runtime')
const Thread = Java.type('java.lang.Thread')

const defaultConfig = {
    id: 0,
    vkey: ''
}

@JSPlugin({ name: 'MiaoLink', version: '1.0.2', author: 'MiaoWoo', source: __filename })
export class MiaoLink extends interfaces.Plugin {
    @Autowired(task.TaskManager)
    private task: task.TaskManager
    @Autowired(server.Server)
    private server: server.Server

    @Config()
    private config: PluginConfig & typeof defaultConfig = defaultConfig

    private isWindows = false
    private clientName: string = 'npc'
    private client: string = ''
    private port: number = 0
    private npc: any

    load() {
        this.isWindows = process.platform == 'win32' || process.platform.toLowerCase().startsWith('windows')
        if (this.isWindows) {
            this.logger.console('§a当前运行于Windows服务器...')
            this.clientName = "npc.exe"
        } else {
            this.logger.console('§a当前运行于Linux服务器...')
        }
    }

    bukkitload() {
        this.port = org.bukkit.Bukkit.getPort()
    }

    spongeload() {
        this.logger.console('§4Sponge暂不支持端口映射!')
    }

    bungeeload() {
        let server: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxyServer()
        this.port = server.getConfig().getListeners()[0].getQueryPort()
    }

    enable() {
        if (!this.config.vkey) {
            return this.logger.console('§4服务器尚未绑定 取消自动映射!')
        }
        this.cmdconnect(this.server.getConsoleSender())
    }

    disable() {
        this.cmddisconnect(this.server.getConsoleSender())
    }

    @Cmd({ autoMain: true })
    mlink() { }

    cmdconnect(sender: any, secret?: string) {
        if (secret) {
            let configStr = String.fromCharCode(...Array.from(base64.toByteArray(secret)))
            let config = JSON.parse(configStr)
            this.config.id = config.id
            this.config.vkey = config.vkey
            this.config.save()
        }
        this.startClient(sender)
    }

    cmddisconnect(sender: any) {
        if (!this.npc || !this.npc.isAlive()) {
            return this.logger.sender(sender, '§4客户端尚未运行 跳过关闭流程...')
        }
        this.logger.sender(sender, '§6已发送关闭客户端指令...')
        this.npc.destroy()
    }

    @Tab()
    tabmlink(_sender: any, _command: string, _args: string[]) {
    }

    startClient(sender: any, id: number = this.config.id, vkey: string = this.config.vkey) {
        if (!this.port) {
            return this.logger.sender(sender, '§4服务器端口获取失败 取消自动映射!')
        }
        if (!id || !vkey) {
            return this.logger.sender(sender, '§4服务器尚未配置 取消自动映射!')
        }
        if (this.npc && this.npc.isAlive()) {
            this.npc.destroy()
        }
        this.task.create(() => {
            this.logger.sender(sender, `§6获取到服务器端口: §3${this.port} §a开始映射端口!`)
            let client = this.query(id, vkey, this.port)
            let node = client.node
            let tunnel = client.tunnel
            this.client = fs.concat(__dirname, 'MiaoLink', this.clientName)
            this.download(sender)
            try {
                this.npc = Runtime.getRuntime().exec(`${this.client} -server=${node.bridge} -vkey=${vkey} -type=tcp`)
                this.logger.sender(sender, `§a服务器端口映射成功! §6访问地址: §3${node.address}:${tunnel.port}`)
                return this.logger.console(`§4客户端已结束运行 退出代码: ${this.npc.waitFor()} 映射关闭!`)
            } catch (error) {
                this.logger.sender(sender, `§c服务器端口映射失败! §4ERROR: ${error}`)
                console.ex(error)
            }
        }, this).async().later(5).submit()
    }

    download(sender: any) {
        try {
            if (!fs.exists(this.client)) {
                this.logger.sender(sender, '§c客户端文件不存在 开始下载客户端...')
                let temp = this.client + '.tmp'
                http.download("https://static.c5mc.cn/" + this.clientName, temp)
                fs.move(temp, this.client, true)
                if (!this.isWindows) {
                    this.logger.sender(sender, '§a当前处于Linux环境 赋予可执行权限...')
                    Runtime.getRuntime().exec(`chmod +x ${this.client}`)
                }
            }
        } catch (error) {
            Thread.sleep(500)
            this.download(sender)
        }
    }

    query(id: number, vkey: string, target: number) {
        let result = this.post(`/client?id=${id}&vkey=${vkey}&target=${target}`)
        if (result.code != 200) {
            throw new Error('§4客户端查询失败: ' + result.msg)
        }
        return result.data
    }

    post(path, data = {}) {
        return http.post("https://nps.yumc.pw/api" + path, data)
    }
}
