import { constants, task, server, channel } from "@ccms/api"
import { JSPlugin, interfaces, Cmd, Tab, Listener, Config } from "@ccms/plugin"

import { QRCode, QRErrorCorrectLevel } from '@ccms/common/dist/qrcode'

import { inject, JSClass, optional } from '@ccms/container'
import http from '@ccms/common/dist/http'
import chat from '@ccms/bukkit/dist/enhance/chat'

const MapView = Java.type('org.bukkit.map.MapView')
const Bukkit = Java.type('org.bukkit.Bukkit')
const MapRenderer = Java.type('org.bukkit.map.MapRenderer')
const ItemStack = Java.type('org.bukkit.inventory.ItemStack')
const Material = Java.type('org.bukkit.Material')

const BufferedImage = Java.type('java.awt.image.BufferedImage')
const Graphics2D = Java.type('java.awt.Graphics2D')
const Color = Java.type('java.awt.Color')
const Image = Java.type('java.awt.Image')
const Font = Java.type('java.awt.Font')
const RenderingHints = Java.type('java.awt.RenderingHints')

class QRCodeRender {
    private _proxy
    constructor(image: any) {
        const ProxyAdapter = Java.extend(MapRenderer, {
            render: (_mapView, mapCanvas) => {
                mapCanvas.drawImage(0, 0, image)
            }
        })
        this._proxy = new ProxyAdapter()
    }
    getHandler() {
        return this._proxy
    }
}

interface PlaceholderAPI {
    registerPlaceholderHook: (key: string, onPlaceholderRequest: (player, s) => string) => void
    setPlaceholders: (player: any, str: string) => string
}

@JSPlugin({ version: '1.0.0', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename })
export class MiaoCoin extends interfaces.Plugin {
    @inject(server.Server)
    private server: server.Server
    @inject(task.TaskManager)
    private taskManager: task.TaskManager

    @JSClass('me.clip.placeholderapi.PlaceholderAPI')
    private PlaceholderAPI: PlaceholderAPI
    @JSClass('me.clip.placeholderapi.PlaceholderHook')
    private PlaceholderHook: any

    @Config()
    private config = {
        MySQL: {

        }
    }

    enable() {
        if (!this.PlaceholderAPI) {
            console.console("§cCan't found me.clip.placeholderapi.PlaceholderAPI variable will not be replaced!")
        } else {
            this.PlaceholderAPI.registerPlaceholderHook("mcn", new this.PlaceholderHook({
                onPlaceholderRequest: (player: any, s: string) => {
                    switch (s.toLowerCase()) {
                        case "has":
                            return ''
                        case "add":
                            return ''
                        case "remove":
                            return ''
                        default:
                    }
                    return `未知的参数: ${s}`
                }
            }))
        }
    }

    disable() {
    }

    @Cmd()
    mrd(sender: any, command: string, args: string[]) {
        let cmd = args[0] || 'help'
        let cmdKey = 'cmd' + cmd
        if (!this[cmdKey]) {
            console.sender(sender, '§4未知的子命令: §c' + cmd)
            console.sender(sender, `§6请执行 §b/${command} §ahelp §6查看帮助!`)
            return
        }
        args.shift()
        this.taskManager.create(() => this[cmdKey](sender, ...args)).async().submit()
    }

    @Tab()
    tabmrd(sender: any, _command: any, args: string | any[]) {
        if (args.length === 1) return ['help', 'bind', 'show', 'query', 'draw', "ratio"]
        if (args.length === 2 && args[0] === "bind" && sender.isOp()) return ['server']
    }
}
