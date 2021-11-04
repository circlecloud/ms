/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { EventEmitter } from 'events'

import { constants, server } from '@ccms/api'
import { Autowired, JSClass } from '@ccms/container'
import { Cmd, JSPlugin, Tab, interfaces, PluginConfig, Config, Listener } from '@ccms/plugin'
import { WebSocket } from '@ccms/websocket'

const Thread = Java.type('java.lang.Thread')
const ChatColor = Java.type('org.bukkit.ChatColor')

const defaultConfig = {
    version: 1,
    address: '',
    token: '',
    group_id: '',
    admin_id: '',
    message: {
        join: "玩家: %player_name% 加入了服务器!",
        quit: "玩家: %player_name% 退出了服务器!",
        chat: "%player_name%: ",
        group: "&6[&c服务器群&6] &b%sender_nickname%&6(&a%sender_user_id%&6)&r: "
    }
}

interface RobotConfig {
    address: string,
    token: string,
    timeout: number
}

interface PlaceholderAPI {
    registerPlaceholderHook: (key: string, onPlaceholderRequest: (player, s) => string) => void
    unregisterPlaceholderHook: (key: string) => void
    setPlaceholders: (player: any, str: string) => string
}

class Robot extends EventEmitter {
    private config: RobotConfig

    private websocket: WebSocket

    private invokeCount = 1;
    private apiResultCache = [];

    constructor(config: RobotConfig) {
        super()
        this.config = config
    }

    sleep(ms) {
        Thread.sleep(ms)
    }

    invoke(action, params) {
        if (this.websocket.readyState != WebSocket.OPEN) { throw new Error('client not connect!') }
        let startTime: number = new Date().getTime()
        let request = { action, params, echo: this.invokeCount++ }
        this.websocket.send(JSON.stringify(request))
        while (startTime + this.config.timeout > new Date().getTime()) {
            if (this.apiResultCache[request.echo]) {
                let result = this.apiResultCache[request.echo]
                delete this.apiResultCache[request.echo]
                if ((result.status === "ok" && result.retcode !== 0) && (result.status === "async" && result !== 1)) {
                    throw Error(`Invoke API Error! Response ${JSON.stringify(result)}`)
                }
                return result.data
            }
            this.sleep(50)
        }
        throw Error(`Invoke API Timeout! Request ${JSON.stringify(request)}`)
    }

    connect() {
        this.websocket = new WebSocket(this.config.address, '', { Authorization: `Bearer ${this.config.token}` })
        this.websocket.onopen = () => {
            this.emit('connect')
        }
        this.websocket.onmessage = (event) => {
            let robotEvent = JSON.parse(event.data)
            if (robotEvent.post_type == "meta_event") { return }
            if (robotEvent.post_type) {
                this.emit(robotEvent.post_type, robotEvent)
            }
        }
        this.websocket.onclose = (event) => {
            this.emit('close', event)
        }
        this.websocket.onerror = (event) => {
            this.emit('error', event)
        }
    }

    disconnect(reason = '') {
        if (this.websocket) {
            this.websocket.close(0, reason)
        }
    }

    sendGroupMessage(group_id, message) {
        this.websocket.send(JSON.stringify({
            action: "send_msg",
            params: { group_id, message }
        }))
    }

    sendPrivateMessage(user_id, message) {
        this.websocket.send(JSON.stringify({
            action: "send_msg",
            params: { user_id, message }
        }))
    }
}

@JSPlugin({ version: '1.0.0', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename, nativeDepends: ['PlaceholderAPI'] })
export class MiaoRobot extends interfaces.Plugin {
    @Autowired()
    private server: server.Server

    @JSClass('me.clip.placeholderapi.PlaceholderAPI')
    private PlaceholderAPI: PlaceholderAPI

    private robot: Robot

    @Config()
    private config: PluginConfig & typeof defaultConfig = defaultConfig

    load() {
        this.logger.prefix = ''
    }

    enable() {
        if (this.config.address && this.config.token) {
            this.cmdconnect(this.server.getConsoleSender())
            if (!this.config.group_id) {
                this.logger.console('§c机器人尚未配置绑定服务器群 部分功能将无法使用!')
            }
        } else {
            this.logger.console('§c机器人尚未配置 请参照帖子内容配置机器人!')
        }
    }

    disable() {
        if (this.robot) {
            this.cmdclose(this.server.getConsoleSender())
        }
    }

    @Cmd({ autoMain: true })
    mbot() { }

    cmdconnect(sender: org.bukkit.entity.Player, address: string = this.config.address, token: string = this.config.token) {
        if (!address || !token) {
            return this.logger.sender(sender, '§4错误 请配置服务器地址和Token!')
        }
        this.cmdclose(sender)
        this.initRobot(sender)
    }

    initRobot(sender) {
        this.robot = new Robot({ ...this.config, timeout: 60 })
        this.robot.on('connect', () => {
            this.logger.sender(sender, '§a机器人链接成功!')
        })
        this.robot.on('message', (event) => {
            if (event.message_type == "group" && event.group_id == this.config.group_id) {
                let message: string = event.message
                message = message.replace(/.*\[CQ:image\,file=(.*),url=(.*),.*]/g, '[图片]')
                message = this.config.message.group
                    .replace(/%sender_nickname%/g, event.sender.nickname)
                    .replace(/%sender_card%/g, event.sender.card)
                    .replace(/%sender_title%/g, event.sender.title)
                    .replace(/%sender_user_id%/g, event.sender.user_id) + message
                message = ChatColor.translateAlternateColorCodes('&', message)
                this.server.getOnlinePlayers().forEach(p => this.logger.sender(p, message))
                this.logger.console(message)
            }
        })
        this.robot.connect()
    }

    cmdclose(sender: org.bukkit.entity.Player) {
        if (this.robot) {
            this.robot.disconnect()
            this.logger.sender(sender, '§c机器人已断开链接!')
        }
    }

    cmdsend(sender: org.bukkit.entity.Player, text: string) {
        this?.robot.sendGroupMessage(this.config.group_id, text)
        this.logger.sender(sender, '§a发送成功!')
    }

    @Tab()
    tabmbot(_sender: any, _command: string, _args: string[]) {
        return []
    }

    @Listener()
    private PlayerJoinEvent(event: org.bukkit.event.player.PlayerJoinEvent) {
        if (this.robot && this.config.group_id) {
            this.robot.sendGroupMessage(this.config.group_id, this.PlaceholderAPI.setPlaceholders(event.getPlayer(), this.config.message.join))
        }
    }
    @Listener()
    private PlayerQuitEvent(event: org.bukkit.event.player.PlayerQuitEvent) {
        if (this.robot && this.config.group_id) {
            this.robot.sendGroupMessage(this.config.group_id, this.PlaceholderAPI.setPlaceholders(event.getPlayer(), this.config.message.quit))
        }
    }
    @Listener()
    private AsyncPlayerChatEvent(event: org.bukkit.event.player.AsyncPlayerChatEvent) {
        if (this.robot && this.config.group_id) {
            this.robot.sendGroupMessage(this.config.group_id, this.PlaceholderAPI.setPlaceholders(event.getPlayer(), this.config.message.chat) + event.getMessage())
        }
    }
}
