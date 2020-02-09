/// <reference types="@ms/types/dist/typings/bukkit" />
/// <reference types="@ms/types/dist/typings/sponge" />

import { server, plugin as pluginApi } from '@ms/api'
import { inject } from '@ms/container';
import { plugin, interfaces, cmd, listener, tab } from '@ms/plugin'
import Tellraw from '@ms/common/dist/tellraw'

const ByteArrayInputStream = Java.type("java.io.ByteArrayInputStream");
const ByteArrayOutputStream = Java.type("java.io.ByteArrayOutputStream");
const StandardCharsets = Java.type("java.nio.charset.StandardCharsets");
const GZIPInputStream = Java.type("java.util.zip.GZIPInputStream");
const GZIPOutputStream = Java.type("java.util.zip.GZIPOutputStream");
const Consumer = Java.type("java.util.function.Consumer");
const ByteArray = Java.type("byte[]")

class MiaoMessage {
    // public static final String CHANNEL = "MiaoChat:Default".toLowerCase();
    public static CHANNEL: string = "MiaoChat:Default".toLowerCase()
    // public static final String NORMAL_CHANNEL = "MiaoChat:Normal".toLowerCase();
    public static NORMAL_CHANNEL: string = "MiaoChat:Normal".toLowerCase()
    // private static final int MAX_MESSAGE_LENGTH = 32000;
    private static MAX_MESSAGE_LENGTH = 32000;

    private static copy(input, output) {
        let buffer = new ByteArray(1024);
        let n: number;
        while ((n = input.read(buffer)) != -1) {
            output.write(buffer, 0, n);
        }
        input.close();
        output.close();
    }
    public static encode(input: any): any {
        return new MiaoMessage(input).encode();
    }
    public static decode(input: any): MiaoMessage {
        let baos = new ByteArrayOutputStream();
        MiaoMessage.copy(new GZIPInputStream(new ByteArrayInputStream(input)), baos);
        return new MiaoMessage(baos.toString(StandardCharsets.UTF_8.name()));
    }

    // private String json;
    constructor(public json: any) { }

    public encode(): any {
        let baos = new ByteArrayOutputStream();
        MiaoMessage.copy(new ByteArrayInputStream(this.json.getBytes(StandardCharsets.UTF_8)), new GZIPOutputStream(baos));
        if (baos.size() > MiaoMessage.MAX_MESSAGE_LENGTH) { return null; }
        return baos.toByteArray();
    }
}

@plugin({ name: 'MiaoChat', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class MiaoChat extends interfaces.Plugin {
    @inject(server.Server)
    private Server: server.Server
    @inject(server.ServerType)
    private ServerType: string

    private spongeChannel: any;
    private spongeListener: any;

    private config = {
        Version: "1.8.5",
        BungeeCord: true,
        Server: "生存服",
        ChatFormats: {
            default: {
                index: 50,
                permission: "MiaoChat.default",
                range: 0,
                format: "[world][player]: ",
                item: true,
                itemformat: "&6[&b%s&6]&r"
            },
            admin: {
                index: 49,
                permission: "MiaoChat.admin",
                format: "[admin][world][player][help]: ",
                range: 0,
                item: true,
                itemformat: "&6[&b%s&6]&r"
            }
        },
        StyleFormats: {
            world: {
                text: "&6[&a%player_world%&6]",
                hover: [
                    "&6当前所在位置:",
                    "&6世界: &d%player_world%",
                    "&6坐标: &aX:%player_x% Y: %player_y% Z: %player_z%",
                    "",
                    "&c点击即可TP我!"
                ],
                click: {
                    type: "COMMAND",
                    command: "/tpa %player_name%"
                }
            },
            player: {
                text: "&b%player_name%",
                hover: [
                    "&6玩家名称: &b%player_name%",
                    "&6玩家等级: &a%player_level%",
                    "&6玩家血量: &c%player_health%",
                    "&6玩家饥饿: &d%player_food_level%",
                    "&6游戏模式: &4%player_gamemode%",
                    "",
                    "&c点击与我聊天"
                ],
                click: {
                    type: "SUGGEST",
                    command: "/tell %player_name%"
                }
            },
            admin: {
                text: "&6[&c管理员&6]"
            },
            help: {
                text: "&4[求助]",
                hover: [
                    "点击求助OP"
                ],
                click: {
                    type: "COMMAND",
                    command: "管理员@%player_name% 我需要你的帮助!"
                }
            }
        }
    }

    private chatFormats: any[];
    private styleFormats: any;
    // 用于匹配 '[xx]' 聊天格式
    private FORMAT_PATTERN = /[\[]([^\[\]]+)[\]]/ig;

    private PlaceholderAPI: { setPlaceholders: (player: any, str: string) => string };

    load() {
        this.chatFormats = Object.values(this.config.ChatFormats);
        this.chatFormats.sort(this.compare('index'));
        this.initFormat(this.chatFormats);
        this.styleFormats = this.config.StyleFormats;
    }

    private compare(prop: string) {
        return function(obj1: { [x: string]: any; }, obj2: { [x: string]: any; }) {
            var val1 = obj1[prop];
            var val2 = obj2[prop];
            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                val1 = Number(val1);
                val2 = Number(val2);
            }
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    enable() {
        this.PlaceholderAPI = {
            setPlaceholders: (player: any, string: string) => {
                return string;
            }
        }
    }

    disable() {
    }

    bukkitenable() {
        // 尝试加载 Bukkit 的 PlaceholderAPI
        try {
            //@ts-ignore
            this.PlaceholderAPI = base.getClass("me.clip.placeholderapi.PlaceholderAPI").static;
            this.logger.log('[PAPI] Found Bukkit PlaceholderAPI Hooking...')
        } catch (ex) {
            this.logger.console("§cCan't found me.clip.placeholderapi.PlaceholderAPI variable will not be replaced! Err: " + ex)
        }
        var Bukkit = org.bukkit.Bukkit;
        var PluginMessageListener = Java.type("org.bukkit.plugin.messaging.PluginMessageListener")
        Bukkit.getMessenger().registerIncomingPluginChannel(base.getInstance(), MiaoMessage.CHANNEL, new PluginMessageListener({
            onPluginMessageReceived: (/**String */ var1, /**Player */ var2, /**byte[] */var3) => {
                this.sendChatAll(MiaoMessage.decode(var3).json)
            }
        }));
        Bukkit.getMessenger().registerOutgoingPluginChannel(base.getInstance(), MiaoMessage.CHANNEL);
    }

    bukkitdisable() {
        var Bukkit = org.bukkit.Bukkit;
        Bukkit.getMessenger().unregisterIncomingPluginChannel(base.getInstance(), MiaoMessage.CHANNEL)
        Bukkit.getMessenger().unregisterOutgoingPluginChannel(base.getInstance(), MiaoMessage.CHANNEL)
    }

    spongeenable() {
        // 尝试加载 Sponge 的 PlaceholderAPI
        try {
            var spongePapi = this.Server.getService('me.rojo8399.placeholderapi.PlaceholderService');
            var s = org.spongepowered.api.text.serializer.TextSerializers.formattingCode('§');
            if (spongePapi) {
                this.PlaceholderAPI = {
                    setPlaceholders: (player: any, string: string) => {
                        return s.serialize(spongePapi.replacePlaceholders(string, player, player));
                    }
                };
                this.logger.log('[PAPI] Found Sponge PlaceholderAPI Hooking...')
            }
        } catch (ex) {
            this.logger.console("§cCan't found me.rojo8399.placeholderapi.PlaceholderService variable will not be replaced! Err: " + ex)
        }
        var Sponge = org.spongepowered.api.Sponge
        var RawDataListener = Java.type("org.spongepowered.api.network.RawDataListener")
        var ChannelRegistrar = Sponge.getChannelRegistrar()
        this.spongeChannel = ChannelRegistrar.getOrCreateRaw(base.getInstance(), MiaoMessage.CHANNEL)
        this.spongeListener = new RawDataListener({
            handlePayload: (/* ChannelBuf */ data, /**RemoteConnection */ connection, /**Platform.Type */ side) => {
                this.sendChatAll(MiaoMessage.decode(data.readBytes(data.available())).json)
            }
        })
        this.spongeChannel.addListener(this.spongeListener)
    }

    spongedisable() {
        this.spongeChannel.removeListener(this.spongeListener)
    }

    bungeeenable() {
        let bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy()
        bungee.registerChannel(MiaoMessage.CHANNEL);
        bungee.registerChannel(MiaoMessage.NORMAL_CHANNEL);
    }

    bungeedisable() {
        let bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy()
        bungee.unregisterChannel(MiaoMessage.CHANNEL);
        bungee.unregisterChannel(MiaoMessage.NORMAL_CHANNEL);
    }

    @cmd({ servers: ["bungee"] })
    mct(sender: any, command: string, args: string[]) {
        this.logger.log(sender, command, args);
        sender.sendMessage(JSON.stringify({ command, ...args }))
    }

    @cmd({ servers: ["!bungee"] })
    mchat(sender: any, command: string, args: string[]) {
        this.logger.log(sender, command, args);
        sender.sendMessage(JSON.stringify({ command, ...args }))
    }

    @tab()
    tabmchat(_sender: any, _command: string, _args: string[]) {
    }

    @listener({ servers: ['bukkit'] })
    AsyncPlayerChatEvent(event: org.bukkit.event.player.AsyncPlayerChatEvent) {
        this.sendChat(event.getPlayer(), event.getMessage(), function() {
            event.setCancelled(true);
        });
    }

    @listener({ servers: ['sponge'] })
    MessageChannelEvent$Chat(event: org.spongepowered.api.event.message.MessageChannelEvent.Chat) {
        //@ts-ignore
        var player = event.getCause().first(org.spongepowered.api.entity.living.player.Player.class).orElse(null);
        if (player == null) {
            return;
        }
        var plain = event.getRawMessage().toPlain();
        if (plain.startsWith(Tellraw.duplicateChar)) {
            return;
        }
        this.sendChat(player, plain, function() {
            event.setMessageCancelled(true)
        });
    }

    @listener({ servers: ['bungee'] })
    PluginMessageEvent(e: any) {
        let bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy()
        let event = e as net.md_5.bungee.api.event.PluginMessageEvent
        if (event.getTag() == MiaoMessage.CHANNEL || event.getTag() == MiaoMessage.NORMAL_CHANNEL) {
            let origin = event.getSender().getAddress();
            bungee.getServers().forEach(server => {
                if (server.getAddress() != origin && server.getPlayers().size() > 0) {
                    server.sendData(event.getTag(), event.getData())
                }
            });
        }
    }

    initFormat(chatFormats: any[]) {
        chatFormats.forEach(chatFormat => {
            var chat_format_str = chatFormat.format;
            var temp = [];
            var r: any[];
            while (r = this.FORMAT_PATTERN.exec(chat_format_str)) {
                temp.push(r[1]);
            }
            var format_list = [];
            temp.forEach(t => {
                var arr = chat_format_str.split('[' + t + ']', 2);
                if (arr[0]) {
                    format_list.push(arr[0]);
                }
                format_list.push(t);
                chat_format_str = arr[1];
            });
            if (chat_format_str) {
                format_list.push(chat_format_str);
            }
            chatFormat.format_list = format_list;
        })
    }

    sendChat(player: any, plain: string, callback: { (): void; }) {
        var chat_format = this.getChatFormat(player);
        if (!chat_format) {
            console.debug('未获得用户', player.getName(), '的 ChatRule 跳过执行...');
            return;
        }
        callback();
        var tr = Tellraw.create();
        chat_format.format_list.forEach((format) => {
            var style = this.styleFormats[format];
            if (style) {
                tr.then(this.replace(player, style.text));
                if (style.hover) {
                    tr.tip(this.replace(player, style.hover.join('\n')));
                }
                if (style.click && style.click.type && style.click.command) {
                    var command = this.replace(player, style.click.command);
                    switch (style.click.type.toUpperCase()) {
                        case "COMMAND":
                            tr.command(command);
                            break;
                        case "OPENURL":
                            tr.link(command);
                            break;
                        case "SUGGEST":
                            tr.suggest(command);
                            break;
                        default:
                    }
                }
            } else {
                tr.then(this.replace(player, format));
            }
        });
        let json = tr.then(this.replace(player, plain)).json()
        this.sendChatAll(json)
        let mm = MiaoMessage.encode(json);
        switch (this.ServerType) {
            case "bukkit":
                if (mm == null) {
                    player.sendPluginMessage(base.getInstance(), MiaoMessage.NORMAL_CHANNEL, MiaoMessage.encode(tr.string()));
                } else {
                    player.sendPluginMessage(base.getInstance(), MiaoMessage.CHANNEL, mm);
                }
                break;
            case "sponge":
                if (mm == null) {
                    this.spongeChannel.sendTo(player, new Consumer({
                        accept: (channelBuf) => channelBuf.writeBytes(MiaoMessage.encode(tr.string()))
                    }))
                } else {
                    this.spongeChannel.sendTo(player, new Consumer({
                        accept: (channelBuf) => channelBuf.writeBytes(mm)
                    }))
                }
                break;
        }
    }

    sendChatAll(json: string) {
        this.Server.getOnlinePlayers().forEach(player => this.Server.sendJson(player, json))
    }

    getChatFormat(player: any) {
        for (var i in this.chatFormats) {
            var format = this.chatFormats[i];
            if (player.hasPermission(format.permission)) {
                return format;
            }
        }
        return null;
    }

    replace(player: any, target: string) {
        return this.PlaceholderAPI.setPlaceholders(player, target)
    }
}
