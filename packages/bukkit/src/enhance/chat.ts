/*global Java, base, module, exports, require*/
let ChatSerializer: any
let nmsChatSerializerMethodName: string
let PacketPlayOutChat: any
let chatMessageTypes: any

let RemapUtils: any

let playerConnectionFieldName: string
let sendPacketMethodName: string

let downgrade = false
/**
 * 获取NMS版本
 */
let nmsVersion = undefined
/**
 * 获取NMS类
 */
function nmsCls(name: string) {
    return base.getClass(['net.minecraft.server', nmsVersion, name].join('.'))
}

function remapMethod(clazz: any, origin: string, test: string, params: any) {
    try {
        return clazz.getMethod(origin, params)
    } catch (ex) {
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
    } catch (ex) {
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
    try {
        RemapUtils = Java.type('catserver.server.remapper.RemapUtils')
    } catch (ex) {
    }
    let nmsChatSerializerClass = nmsCls(nmsVersion.split("_")[1] > 7 ? "IChatBaseComponent$ChatSerializer" : "ChatSerializer")
    let nmsChatSerializerMethod = remapMethod(nmsChatSerializerClass, 'a', 'func_150699_a', base.getClass('java.lang.String'))
    nmsChatSerializerMethodName = nmsChatSerializerMethod.getName()
    ChatSerializer = Java.type(nmsChatSerializerClass.getName())
    let packetTypeClass = nmsCls("PacketPlayOutChat")
    PacketPlayOutChat = Java.type(packetTypeClass.getName())
    let packetTypeConstructor: { parameterTypes: any[] }
    Java.from(packetTypeClass.constructors).forEach(function (c) {
        if (c.parameterTypes.length === 2) {
            packetTypeConstructor = c
        }
    })
    let nmsChatMessageTypeClass = packetTypeConstructor.parameterTypes[1]
    if (nmsChatMessageTypeClass.isEnum()) {
        chatMessageTypes = nmsChatMessageTypeClass.getEnumConstants()
    }
    let playerConnectionField = remapFieldName(nmsCls('EntityPlayer'), 'playerConnection', 'field_71135_a')
    playerConnectionFieldName = playerConnectionField.getName()
    sendPacketMethodName = remapMethod(playerConnectionField.getType(), 'sendPacket', 'func_179290_a', nmsCls('Packet')).getName()
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
    sendPacket(sender, new PacketPlayOutChat(ChatSerializer[nmsChatSerializerMethodName](json), chatMessageTypes == null ? type : chatMessageTypes[type]))
}

function sendPacket(player: { handle: { [x: string]: { [x: string]: (arg0: any) => void } } }, p: any) {
    player.handle[playerConnectionFieldName][sendPacketMethodName](p)
}

try {
    init()
} catch (ex) {
    org.bukkit.Bukkit.getConsoleSender().sendMessage(`§6[§cMS§6][§bbukkit§6][§achat§6] §cNMS Inject Error §4${ex} §cDowngrade to Command Mode...`)
    downgrade = true
}

let chat = {
    json,
    send
}

export default chat
