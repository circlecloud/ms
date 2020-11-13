import { task, server, constants } from "@ccms/api"
import { Autowired, JSClass } from "@ccms/container"
import { plugin, interfaces } from "@ccms/plugin"

let createPacketAdapterFunction = eval(`
function(cls, plugin, type, onPacketSending){
    return new cls(plugin, type) {
        onPacketSending: onPacketSending
    }
}
`)

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

    private pipeline: any
    private adapter: any

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
        return createPacketAdapterFunction(this.PacketAdapter, base.getInstance(), [this.PacketType.Play.Server.MAP], onPacketSending)
    }

    initPacketAdapter() {
        this.adapter = this.createPacketAdapter((event) => {
            let integers = event.getPacket().getIntegers().getValues()
            //             console.log(`ProtocolLib onPacketSending filter Map
            // Player: ${event.getPlayer()}
            // MapId: ${integers.get(0)}
            // Short: ${event.getPacket().getShorts().read(0)}
            // Bytes: ${event.getPacket().getByteArrays().read(0).length}
            // `)
            //Size: ${integers.get(3)}x${integers.get(4)}
            // org.bukkit.map.MapPalette.imageToBytes()
        })
        this.ProtocolLibrary.getProtocolManager().addPacketListener(this.adapter)
    }
}
