/*global Java, base, module, exports, require*/
var nmsChatSerializerClass;
var nmsChatSerializerMethod;
var packetTypeConstructor;
var nmsChatMessageTypeClass;
var chatMessageTypes;

var downgrade = false;
/**
 * 获取NMS版本
 */
//@ts-ignore
var nmsVersion = org.bukkit.Bukkit.server.class.name.split('.')[3];
/**
 * 获取NMS类
 */
function nmsCls(name) {
    return base.getClass(['net.minecraft.server', nmsVersion, name].join('.'))
}

function init() {
    nmsChatSerializerClass = nmsCls(nmsVersion.split("_")[1] > 7 ? "IChatBaseComponent$ChatSerializer" : "ChatSerializer");
    try {
        nmsChatSerializerMethod = nmsChatSerializerClass.getMethod('a', base.getClass('java.lang.String'))
    } catch (ex) {
        nmsChatSerializerMethod = nmsChatSerializerClass.getMethod('func_150699_a', base.getClass('java.lang.String'))
    }
    var packetTypeClass = nmsCls("PacketPlayOutChat");
    Java.from(packetTypeClass.constructors).forEach(function(c) {
        if (c.parameterTypes.length === 2) {
            packetTypeConstructor = c
        }
    });
    nmsChatMessageTypeClass = packetTypeConstructor.parameterTypes[1];
    if (nmsChatMessageTypeClass.isEnum()) {
        chatMessageTypes = nmsChatMessageTypeClass.getEnumConstants();
    } else {
        switch (nmsChatMessageTypeClass.name) {
            case "int":
                //@ts-ignore
                nmsChatMessageTypeClass = java.lang.Integer;
                break;
            case "byte":
                //@ts-ignore
                nmsChatMessageTypeClass = java.lang.Byte;
                break;
        }
    }
}

function json(sender, json) {
    if (downgrade) {
        return '/tellraw ' + sender.name + ' ' + json
    } else {
        send(sender, json, 0);
        return false;
    }
}

function send(sender, json, type) {
    //@ts-ignore
    sendPacket(sender, packetTypeConstructor.newInstance(nmsChatSerializerMethod.invoke(null, json), chatMessageTypes == null ? nmsChatMessageTypeClass.valueOf(java.lang.String.valueOf(type)) : chatMessageTypes[type]))
}

function sendPacket(player, p) {
    player.handle.playerConnection.sendPacket(p);
}

try {
    init();
} catch (ex) {
    org.bukkit.Bukkit.getConsoleSender().sendMessage(`§6[§cMS§6][§bbukkit§6][§achat§6] §cNMS Inject Error §4${ex} §cDowngrade to Command Mode...`)
    downgrade = true;
}

let chat = {
    json
}

export default chat
