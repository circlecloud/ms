import { task, server, constants } from "@ccms/api"
import { Autowired, JSClass } from "@ccms/container"
import { interfaces, JSPlugin } from "@ccms/plugin"

let createPacketAdapterFunction = eval(`
function(cls, plugin, type, onPacketSending){
    return new cls(plugin, type) {
        onPacketSending: onPacketSending
    }
}
`)
const ChatColor = Java.type('net.md_5.bungee.api.ChatColor')
const Pattern = Java.type('java.util.regex.Pattern')

@JSPlugin({ prefix: 'MCRS', version: '1.0.0', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], nativeDepends: ['ProtocolLib'], source: __filename })
export class MiaoChatRGBSupport extends interfaces.Plugin {
    private supportRGB: boolean = false
    // 用于匹配 '#FFFFFF' 颜色格式
    private RGBCOLOR_PATTERN = Pattern.compile("(#[a-fA-F0-9]{6}?)([^#?]*)");

    @JSClass('com.comphenix.protocol.events.PacketAdapter')
    private PacketAdapter: any
    @JSClass('com.comphenix.protocol.PacketType')
    private PacketType: any
    @JSClass('com.comphenix.protocol.ProtocolLibrary')
    private ProtocolLibrary: any

    private adapter: any

    load() {
        try {
            ChatColor.of('#FFFFFF').toString()
            this.supportRGB = true
            this.logger.console('§a检测到兼容RGB的服务端 已启动相关支持...')
        } catch (error) {
            this.logger.console('§c当前服务端不支持RGB色彩 Error: ' + error)
        }
    }

    enable() {
        if (this.supportRGB) {
            this.initPacketAdapter()
        }
    }

    disable() {
        if (this.supportRGB) {
            this.ProtocolLibrary.getProtocolManager().removePacketListener(this.adapter)
        }
    }

    createPacketAdapter(onPacketSending: (event) => void) {
        return createPacketAdapterFunction(this.PacketAdapter, base.getInstance(), [this.PacketType.Play.Server.CHAT], onPacketSending)
    }

    colorJson(jsonObj) {
        if (jsonObj.extra && jsonObj.extra.length) {
            for (const extra of jsonObj.extra) {
                this.colorJson(extra)
            }
        }
        let text: string = jsonObj.text
        var matcher = this.RGBCOLOR_PATTERN.matcher(text)
        let colors = []
        let texts = []
        let lastStart = 0
        while (matcher.find()) {
            if (lastStart == 0) {
                texts.push(text.substr(lastStart, matcher.start()))
                lastStart = matcher.end()
            }
            colors.push(matcher.group(1))
            texts.push(matcher.group(2))
        }
        if (colors.length) {
            jsonObj.text = ''
            let extras = []
            let firstText = texts.shift()
            if (firstText) { extras.push({ text: firstText }) }
            texts.forEach((value, index) => {
                extras.push({
                    text: value,
                    color: colors[index]
                })
            })
            if (jsonObj.extra) {
                jsonObj.extra = extras.concat(jsonObj.extra)
            } else {
                jsonObj.extra = extras
            }
        }
        return jsonObj
    }

    initPacketAdapter() {
        this.adapter = this.createPacketAdapter((event) => {
            try {
                if (!event.getPlayer().hasPermission('MiaoChatRGBSupport.color')) { return }
                let wcc = event.getPacket().getChatComponents().read(0)
                if (wcc == null) { return }
                wcc.setJson(JSON.stringify(this.colorJson(JSON.parse(wcc.getJson()))))
                event.getPacket().getChatComponents().writeSafely(0, wcc)
            } catch (error) {
                console.ex(error)
            }
        })
        this.ProtocolLibrary.getProtocolManager().addPacketListener(this.adapter)
    }
}
