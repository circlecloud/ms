/*global Java, base, module, exports, require*/
let ChatSerializer: any
let nmsChatSerializerMethodName: string
let PacketPlayOutChat: any
let chatMessageTypes: any

let RemapUtils: any

let playerConnectionFieldName: string
let sendPacketMethodName: string

let above_1_16 = false
let downgrade = false
/**
 * 获取NMS版本
 */
let nmsVersion = undefined
let nmsSubVersion = undefined
/**
 * 获取NMS类
 */
function nmsCls(name: string) {
    return base.getClass(['net.minecraft.server', nmsVersion, name].join('.'))
}

function remapMethod(clazz: any, origin: string, test: string, params: any) {
    try {
        return clazz.getMethod(origin, params)
    } catch (ex: any) {
        if (RemapUtils) {
            return clazz.getMethod(RemapUtils.mapMethod(clazz, origin, params), params)
        } else {
            return clazz.getMethod(test, params)
        }
    }
}

function remapFieldName(clazz: any, origin: string, test: string) {
    try {
        return clazz.getField(origin)
    } catch (ex: any) {
        if (RemapUtils) {
            return clazz.getField(RemapUtils.mapFieldName(clazz, origin))
        } else {
            return clazz.getField(test)
        }
    }
}

function init() {
    //@ts-ignore
    nmsVersion = org.bukkit.Bukkit.server.class.name.split('.')[3]
    nmsSubVersion = nmsVersion.split("_")[1]
    try {
        RemapUtils = Java.type('catserver.server.remapper.RemapUtils')
    } catch (ex: any) {
    }
    let nmsChatSerializerClass = undefined
    if (nmsSubVersion < 8) {
        nmsChatSerializerClass = nmsCls("ChatSerializer")
    } else if (nmsSubVersion < 17) {
        nmsChatSerializerClass = nmsCls("IChatBaseComponent$ChatSerializer")
    } else {
        nmsChatSerializerClass = base.getClass('net.minecraft.network.chat.IChatBaseComponent$ChatSerializer')
    }
    let nmsChatSerializerMethod = remapMethod(nmsChatSerializerClass, 'a', 'func_150699_a', base.getClass('java.lang.String'))
    nmsChatSerializerMethodName = nmsChatSerializerMethod.getName()
    ChatSerializer = Java.type(nmsChatSerializerClass.getName())
    let packetTypeClass = nmsSubVersion < 17 ? nmsCls("PacketPlayOutChat") : base.getClass('net.minecraft.network.protocol.game.PacketPlayOutChat')
    PacketPlayOutChat = Java.type(packetTypeClass.getName())
    let packetTypeConstructor: { parameterTypes: any[] }
    let constructors = packetTypeClass.constructors
    Java.from(constructors).forEach(function (c) {
        if (c.parameterTypes.length === 2) {
            packetTypeConstructor = c
        }
        if (c.parameterTypes.length === 3) {
            packetTypeConstructor = c
            above_1_16 = true
        }
    })
    let parameterTypes = packetTypeConstructor.parameterTypes
    let nmsChatMessageTypeClass = parameterTypes[1]
    if (nmsChatMessageTypeClass.isEnum()) {
        chatMessageTypes = nmsChatMessageTypeClass.getEnumConstants()
    }
    let playerConnectionField = undefined
    if (nmsSubVersion < 17) {
        playerConnectionField = remapFieldName(nmsCls('EntityPlayer'), 'playerConnection', 'field_71135_a')
    } else {
        playerConnectionField = base.getClass('net.minecraft.server.level.EntityPlayer').getField('b')
    }
    playerConnectionFieldName = playerConnectionField.getName()
    sendPacketMethodName = remapMethod(playerConnectionField.getType(), 'sendPacket', 'func_179290_a', nmsSubVersion < 17 ? nmsCls('Packet') : base.getClass('net.minecraft.network.protocol.Packet')).getName()
}

function json(sender: { name: string }, json: string) {
    if (downgrade) {
        return '/tellraw ' + sender.name + ' ' + json
    } else {
        send(sender, json, 0)
        return false
    }
}

function send(sender: any, json: any, type: number) {
    let packet
    if (above_1_16) {
        packet = new PacketPlayOutChat(ChatSerializer[nmsChatSerializerMethodName](json), chatMessageTypes == null ? type : chatMessageTypes[type], sender.getUniqueId())
    } else {
        packet = new PacketPlayOutChat(ChatSerializer[nmsChatSerializerMethodName](json), chatMessageTypes == null ? type : chatMessageTypes[type])
    }
    sendPacket(sender, packet)
}

function sendPacket(player: { handle: { [x: string]: { [x: string]: (arg0: any) => void } } }, p: any) {
    player.handle[playerConnectionFieldName][sendPacketMethodName](p)
}

try {
    init()
} catch (ex: any) {
    org.bukkit.Bukkit.getConsoleSender().sendMessage(`§6[§cMS§6][§bbukkit§6][§achat§6] §cNMS Inject Error §4${ex} §cDowngrade to Command Mode...`)
    downgrade = true
}

let chat = {
    json,
    send
}

export default chat
