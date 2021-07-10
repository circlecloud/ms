import { constants } from "@ccms/api"
import { JSClass } from "@ccms/container"
import { interfaces, JSPlugin } from "@ccms/plugin"

let createPacketAdapterFunction = eval(`
function(cls, plugin, type, onPacketSending){
    return new cls(plugin, type) {
        onPacketSending: onPacketSending
    }
}
`)
const Color = Java.type('java.awt.Color')
const Pattern = Java.type('java.util.regex.Pattern')
const ChatColor = Java.type('net.md_5.bungee.api.ChatColor')

@JSPlugin({ prefix: 'MRS', version: '1.0.0', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], nativeDepends: ['ProtocolLib'], source: __filename })
export class MiaoRGBSupport extends interfaces.Plugin {
    private supportRGB: boolean = false
    // 用于匹配 '#FFFFFF' 颜色格式
    private RGBCOLOR_PATTERN = Pattern.compile("(#[a-fA-F0-9]{6}?)([^#?]*)")
    // 用于匹配彩虹格式
    private RAINBOW_PATTERN = Pattern.compile("#RAINBOW([0-9]{1,3})([^#?]*)")

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
        return createPacketAdapterFunction(this.PacketAdapter, base.getInstance(), [
            this.PacketType.Play.Server.CHAT,
            this.PacketType.Play.Server.SCOREBOARD_OBJECTIVE,
            this.PacketType.Play.Server.SCOREBOARD_SCORE,
            this.PacketType.Play.Server.SCOREBOARD_TEAM
        ], onPacketSending)
    }

    colorJson(jsonObj) {
        return this.processJson(jsonObj, this.RGBCOLOR_PATTERN, (extras, colors) => {
            return (value, index) => {
                extras.push({
                    text: value,
                    color: colors[index]
                })
            }
        })
    }

    rainbowJson(jsonObj) {
        return this.processJson(jsonObj, this.RAINBOW_PATTERN, (extras, colors) => {
            return (value: string, index) => {
                let textArr = value.split("")
                let rainbowColors = this.createRainbow(textArr.length, colors[index])
                textArr.forEach((value, index) => {
                    extras.push({
                        text: value,
                        color: rainbowColors[index]
                    })
                })
            }
        })
    }

    private processJson(jsonObj, PATTERN, process: (extras, colors) => (value, index) => void) {
        let text: string = jsonObj.text
        if (jsonObj.extra && jsonObj.extra.length) {
            for (const extra of jsonObj.extra) {
                this.processJson(extra, PATTERN, process)
            }
        }
        if (!text) { return jsonObj }
        var matcher = PATTERN.matcher(text)
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
            texts.forEach(process(extras, colors))
            if (jsonObj.extra) {
                jsonObj.extra = extras.concat(jsonObj.extra)
            } else {
                jsonObj.extra = extras
            }
        }
        return jsonObj
    }

    private createRainbow(step, saturation) {
        var colors = []
        var colorStep = (1.00 / step)
        for (var i = 0; i < step; i++) {
            colors.push("#" + java.lang.String.format("%08x", Color.getHSBColor((colorStep * i), saturation, saturation).getRGB()).substring(2))
        }
        return colors
    }

    initPacketAdapter() {
        this.adapter = this.createPacketAdapter((event) => {
            try {
                if (!event.getPlayer().hasPermission('MiaoRGBSupport.color')) { return }
                let ccs = event.getPacket().getChatComponents()
                let size = ccs.size()
                for (let i = 0; i < size; i++) {
                    let wcc = ccs.read(i)
                    if (wcc == null) { continue }
                    let json = JSON.parse(wcc.getJson())
                    json = this.colorJson(json)
                    if (event.getPlayer().hasPermission('MiaoRGBSupport.rainbow')) {
                        json = this.rainbowJson(json)
                    }
                    wcc.setJson(JSON.stringify(json))
                    ccs.write(i, wcc)
                }
            } catch (error) {
                console.ex(error)
            }
        })
        this.ProtocolLibrary.getProtocolManager().addPacketListener(this.adapter)
    }
}
