/*global Java, base, module, exports, require*/
let bukkitChatInvoke: BukkitChatInvoke
/**
 * 获取NMS类
 */
abstract class BukkitChatInvoke {
    private downgrade: boolean = false
    protected RemapUtils: any

    protected ChatSerializer: any
    protected nmsChatSerializerMethodName: string
    protected PacketPlayOutChat: any
    protected chatMessageTypes: any
    protected playerConnectionFieldName: string
    protected sendPacketMethodName: string

    constructor(private nmsVersion) {
    }

    init() {
        try {
            try {
                this.RemapUtils = Java.type('catserver.server.remapper.RemapUtils')
            } catch (ex: any) {
            }
            let nmsChatSerializerClass = this.getNmsChatSerializerClass()
            let nmsChatSerializerMethod = this.remapMethod(nmsChatSerializerClass, 'a', 'func_150699_a', base.getClass('java.lang.String'))
            this.nmsChatSerializerMethodName = nmsChatSerializerMethod.getName()
            this.ChatSerializer = Java.type(nmsChatSerializerClass.getName())
            let packetTypeClass = this.getPacketPlayOutChatClass()
            this.PacketPlayOutChat = Java.type(packetTypeClass.getName())
            let constructors = packetTypeClass.constructors
            for (const constructor of Java.from(constructors)) {
                let parameterTypes = constructor.parameterTypes
                if (parameterTypes.length === 2 || parameterTypes.length === 3) {
                    let nmsChatMessageTypeClass = parameterTypes[1]
                    if (nmsChatMessageTypeClass.isEnum()) {
                        this.chatMessageTypes = nmsChatMessageTypeClass.getEnumConstants()
                        break
                    }
                }
            }
            let playerConnectionField = this.getPlayerConnectionField()
            this.playerConnectionFieldName = playerConnectionField.getName()
            this.sendPacketMethodName = this.remapMethod(playerConnectionField.getType(), 'sendPacket', 'func_179290_a', this.getPacketClass()).getName()
        } catch (ex: any) {
            org.bukkit.Bukkit.getConsoleSender().sendMessage(`§6[§cMS§6][§bbukkit§6][§achat§6] §cNMS Inject Error §4${ex} §cDowngrade to Command Mode...`)
            this.downgrade = true
        }
    }

    abstract getNmsChatSerializerClass()
    abstract getPacketPlayOutChatClass()
    abstract getPacketPlayOutChat(sender: any, json: any, type: number)
    abstract getPlayerConnectionField()
    abstract getPacketClass()

    nmsCls(name: string) {
        return base.getClass(['net.minecraft.server', this.nmsVersion, name].join('.'))
    }

    remapMethod(clazz: any, origin: string, test: string, params: any) {
        try {
            return clazz.getMethod(origin, params)
        } catch (ex: any) {
            if (this.RemapUtils) {
                return clazz.getMethod(this.RemapUtils.mapMethod(clazz, origin, params), params)
            } else {
                return clazz.getMethod(test, params)
            }
        }
    }

    remapFieldName(clazz: any, origin: string, test: string) {
        try {
            return clazz.getField(origin)
        } catch (ex: any) {
            if (this.RemapUtils) {
                return clazz.getField(this.RemapUtils.mapFieldName(clazz, origin))
            } else {
                return clazz.getField(test)
            }
        }
    }

    json(sender: { name: string }, json: string) {
        if (this.downgrade) {
            return '/tellraw ' + sender.name + ' ' + json
        } else {
            this.send(sender, json, 0)
            return false
        }
    }
    send(sender: any, json: any, type: number) {
        this.sendPacket(sender, this.getPacketPlayOutChat(sender, json, type))
    }
    sendPacket(player: { handle: { [x: string]: { [x: string]: (arg0: any) => void } } }, p: any) {
        player.handle[this.playerConnectionFieldName][this.sendPacketMethodName](p)
    }
}

class BukkitChatInvokeBase extends BukkitChatInvoke {
    getPacketPlayOutChat(sender: any, json: any, type: number) {
        return new this.PacketPlayOutChat(this.ChatSerializer[this.nmsChatSerializerMethodName](json), type)
    }
    getNmsChatSerializerClass() {
        return this.nmsCls("ChatSerializer")
    }
    getPacketPlayOutChatClass() {
        return this.nmsCls("PacketPlayOutChat")
    }
    getPlayerConnectionField() {
        return this.remapFieldName(this.nmsCls('EntityPlayer'), 'playerConnection', 'field_71135_a')
    }
    getPacketClass() {
        return this.nmsCls('Packet')
    }
}

class BukkitChatInvoke_1_7_10 extends BukkitChatInvokeBase {
}

class BukkitChatInvoke_1_8 extends BukkitChatInvoke_1_7_10 {
    getPacketPlayOutChat(sender: any, json: any, type: number) {
        return new this.PacketPlayOutChat(this.ChatSerializer[this.nmsChatSerializerMethodName](json), this.chatMessageTypes[type])
    }
    getNmsChatSerializerClass() {
        return this.nmsCls("IChatBaseComponent$ChatSerializer")
    }
}
class BukkitChatInvoke_1_16_5 extends BukkitChatInvoke_1_8 {
    getPacketPlayOutChat(sender: any, json: any, type: number) {
        return new this.PacketPlayOutChat(this.ChatSerializer[this.nmsChatSerializerMethodName](json), this.chatMessageTypes[type], sender.getUniqueId())
    }
}

class BukkitChatInvoke_1_17_1 extends BukkitChatInvoke_1_16_5 {
    getPacketPlayOutChatClass() {
        return base.getClass('net.minecraft.network.protocol.game.PacketPlayOutChat')
    }
    getNmsChatSerializerClass() {
        return base.getClass('net.minecraft.network.chat.IChatBaseComponent$ChatSerializer')
    }
    getPlayerConnectionField() {
        return base.getClass('net.minecraft.server.level.EntityPlayer').getField('b')
    }
    getPacketClass() {
        return base.getClass('net.minecraft.network.protocol.Packet')
    }
}

try {
    let Bukkit: typeof org.bukkit.Bukkit = Java.type('org.bukkit.Bukkit')
    // @ts-ignore
    let nmsVersion = Bukkit.getServer().class.name.split('.')[3]
    let nmsSubVersion = nmsVersion.split("_")[1]
    if (nmsSubVersion >= 8) {
        bukkitChatInvoke = new BukkitChatInvoke_1_8(nmsVersion)
    } else if (nmsSubVersion >= 16) {
        bukkitChatInvoke = new BukkitChatInvoke_1_16_5(nmsVersion)
    } else if (nmsSubVersion >= 17) {
        bukkitChatInvoke = new BukkitChatInvoke_1_17_1(nmsVersion)
    } else {
        bukkitChatInvoke = new BukkitChatInvoke_1_7_10(nmsVersion)
    }
    bukkitChatInvoke.init()
} catch (ex: any) {
}

let chat = {
    invoke: bukkitChatInvoke,
    json: bukkitChatInvoke.json.bind(bukkitChatInvoke),
    send: bukkitChatInvoke.send.bind(bukkitChatInvoke)
}

export default chat
