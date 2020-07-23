import { channel, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'

const Bukkit = org.bukkit.Bukkit
const PluginMessageListener = Java.type("org.bukkit.plugin.messaging.PluginMessageListener")
const Messenger = Bukkit.getMessenger()

@provideSingleton(channel.Channel)
export class BukkitChannel extends channel.Channel {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    /**
     * 给玩家发送通道消息
     * @param player 接受消息的玩家
     * @param channel 通道
     * @param data 数据
     */
    send(player: any, channel: string, data: number[]) {
        player.sendPluginMessage(this.pluginInstance, channel, data)
    }

    /**
     * 注册通道监听器
     * @param channel 通道
     * @param listener 监听器
     */
    register(channel: string, listener: channel.ChannelListener) {
        Messenger.registerIncomingPluginChannel(this.pluginInstance, channel, new PluginMessageListener({
            onPluginMessageReceived: (/**String */ channel, /**Player */ player, /**byte[] */data) => {
                listener(data, { channel, player, data })
            }
        }))
        Messenger.registerOutgoingPluginChannel(this.pluginInstance, channel)
    }
    unregister(channel: string, listener: any) {
        Messenger.unregisterIncomingPluginChannel(this.pluginInstance, channel)
        Messenger.unregisterOutgoingPluginChannel(this.pluginInstance, channel)
    }
}
