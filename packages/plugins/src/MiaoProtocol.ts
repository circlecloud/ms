import { task, server, constants } from "@ccms/api"
import { Autowired, JSClass } from "@ccms/container"
import { plugin, interfaces, Cmd } from "@ccms/plugin"

let createPacketAdapterFunction = eval(`
function(cls, plugin, type, onPacketSending){
    return new cls(plugin, type) {
        onPacketSending: onPacketSending
    }
}
`)

interface PlaceholderAPI {
    registerPlaceholderHook: (key: string, onPlaceholderRequest: (player, s) => string) => void
    unregisterPlaceholderHook: (key: string) => void
    setPlaceholders: (player: any, str: string) => string
}
const Pattern = Java.type('java.util.regex.Pattern')

@plugin({ prefix: 'MPTL', version: '1.0.0', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename })
export class MiaoProtocol extends interfaces.Plugin {
    @Autowired()
    private server: server.Server
    @Autowired()
    private taskManager: task.TaskManager

    @JSClass('com.comphenix.protocol.events.PacketAdapter')
    private PacketAdapter
    @JSClass('com.comphenix.protocol.PacketType')
    private PacketType
    @JSClass('com.comphenix.protocol.ProtocolLibrary')
    private ProtocolLibrary

    @JSClass('com.comphenix.protocol.wrappers.nbt.NbtFactory')
    private NbtFactory

    @JSClass('me.clip.placeholderapi.PlaceholderAPI')
    private PlaceholderAPI: PlaceholderAPI

    private pipeline: any
    private adapter: any

    @Cmd({ autoMain: true })
    mptl() {
    }

    cmdnbt(sender: org.bukkit.entity.Player) {
        let nbt = this.NbtFactory.fromItemOptional(sender.getItemInHand())
        console.log(nbt)
    }

    enable() {
        let count = 0
        let wait = this.taskManager.create(() => {
            this.pipeline = this.server.getNettyPipeline()
            if (this.pipeline) {
                wait.cancel()
            } else if (count++ > 30) {
                wait.cancel()
                this.logger.console('§cNetty通道注入失败 §4所有功能将无法使用！')
            }
        }).later(20).timer(40).submit()
        this.initPacketAdapter()
    }

    disable() {
        this.ProtocolLibrary.getProtocolManager().removePacketListener(this.adapter)
    }

    createPacketAdapter(onPacketSending: (event) => void) {
        return createPacketAdapterFunction(this.PacketAdapter, base.getInstance(), [this.PacketType.Play.Server.CHAT], onPacketSending)
    }

    initPacketAdapter() {
        this.adapter = this.createPacketAdapter((event) => {
            try {
                // let wcc = event.getPacket().getChatComponents().read(0)
                // if (wcc == null) { return }
                // let json = wcc.getJson()
                // console.log(json)
                // let jsonObj = JSON.parse(json)
                // let result = JSON.stringify(this.colorJson(jsonObj))
                // console.log(result)
                // wcc.setJson(result)
                // event.getPacket().getChatComponents().writeSafely(0, wcc)
                // let packet = event.getPacket()
                // let modify = packet.getEntityModifier(event)
                // console.log(modify.getValues().get(0).getType().getName())
                // let modify = event.getPacket().getNbtModifier()
                // let nbt = modify.read(0)
                // let lines = ["Text1", "Text2", "Text3", "Text4"]
                // console.log("Before Replace", event.getPlayer().getName(), nbt)
                // lines.forEach((s: string) => {
                //     let origin = nbt.getString(s)
                //     let replaced = this.PlaceholderAPI.setPlaceholders(event.getPlayer(), origin)
                //     nbt.put(s, replaced)
                //     console.log(event.getPlayer(), origin, replaced)
                // })
                // // Arrays.asList("Text1", "Text2", "Text3", "Text4").forEach(s -> nbt.put(s, replace(event.getPlayer(), nbt.getString(s))))
                // console.log("After Replace", event.getPlayer().getName(), nbt)
                // modify.write(0, nbt)
                // let integers = event.getPacket().getIntegers().getValues()
                //             console.log(`ProtocolLib onPacketSending filter Map
                // Player: ${event.getPlayer()}
                // MapId: ${integers.get(0)}
                // Short: ${event.getPacket().getShorts().read(0)}
                // Bytes: ${event.getPacket().getByteArrays().read(0).length}
                // `)
                //Size: ${integers.get(3)}x${integers.get(4)}
                // org.bukkit.map.MapPalette.imageToBytes()
            } catch (error) {
                console.ex(error)
            }
        })
        this.ProtocolLibrary.getProtocolManager().addPacketListener(this.adapter)
    }
}
