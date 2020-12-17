/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />
/// <reference types="typescript" />
// @ts-ignore
require.clear('websocket/client')
import { server } from '@ccms/api'
import { Autowired, Container, ContainerInstance } from '@ccms/container'
import { Cmd, JSPlugin, Tab, interfaces, PluginConfig, Config } from '@ccms/plugin'
import { WebSocket } from '@ccms/websocket'

const defaultConfig = {
    address: '',
    token: ''
}
//https://github3.mk-proxy.ml/-----https://github.com/Mrs4s/go-cqhttp/releases/download/v0.9.34/go-cqhttp-v0.9.34-linux-amd64
@JSPlugin({ version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class MiaoRobot extends interfaces.Plugin {
    @Autowired()
    private server: server.Server

    private client: WebSocket

    @Config()
    private config: PluginConfig & typeof defaultConfig = defaultConfig

    load() {
    }

    private downloadRobot() {
        //https://api.github.com/repos/Mrs4s/go-cqhttp/releases?per_page=1&page=1
    }

    enable() {
        if (!this.config.address || !this.config.token) {
            return this.logger
        }
        this.cmdconnect(this.server.getConsoleSender(), this.config.address, this.config.token)
    }

    disable() {
        this.cmdclose(this.server.getConsoleSender())
    }

    @Cmd({ autoMain: true })
    mbot() { }

    cmdconnect(sender: org.bukkit.entity.Player, address: string = this.config.address, token: string = this.config.token) {
        if (this.client && this.client.readyState == WebSocket.OPEN) {
            this.client.close()
            this.client = undefined
        }
        if (!address || !token) {
            return this.logger.sender(sender, '§4错误 请配置服务器地址和Token!')
        }
        try {
            this.client = new WebSocket(address, '', { Authorization: `Bearer ${token}` })
            this.initRobot(this.client)
        } catch (error) {
            console.ex(error)
        }
    }

    private initRobot(client: WebSocket) {
        client.onopen = () => {
            this.logger.console(`§3连接到 §b${client.url} §a成功!`)
        }
        client.onmessage = (event) => {
            let messageEvent = JSON.parse(event.data)
            switch (messageEvent.post_type) {
                case "message":
                    this.logger.console(`§6接收到 §3群 §b${messageEvent.group_id} §2成员 §a${messageEvent.sender.nickname} §6的消息: §r${messageEvent.message}`)
                    break
            }
        }
        client.onclose = (event) => {
            this.logger.console(`§4连接已断开 §6Code: §3${event.code} §6原因: §c${event.reason}!`)
        }
        client.onerror = (event) => {
            this.logger.console(`§4发生错误: §r${event.error}`)
            console.ex(event.error)
        }
    }

    cmdclose(sender: org.bukkit.entity.Player) {
        if (this.client) {
            this.client.close(0, 'plugin close socket')
        }
    }

    cmdsend(sender: org.bukkit.entity.Player, text: string) {
        if (this.client) {
            this.client.send(text)
            this.logger.sender(sender, '§a发送成功!')
        }
    }

    @Tab()
    tabmbot(_sender: any, _command: string, _args: string[]) {
        return []
    }
}
