import { channel, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'

const Bukkit = org.bukkit.Bukkit
const PluginMessageListener = Java.type("org.bukkit.plugin.messaging.PluginMessageListener")
const Messenger = Bukkit.getMessenger()

@provideSingleton(channel.Channel)
export class BukkitChannel extends channel.Channel {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    private cacheChannel = new Map<string, any[]>()
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
        if (!this.cacheChannel.has(channel)) this.cacheChannel.set(channel, [])
        this.cacheChannel.get(channel).push(listener)
        let pluginMessageListener = new PluginMessageListener({
            onPluginMessageReceived: (/**String */ channel, /**Player */ player, /**byte[] */data) => {
                try {
                    listener(data, { channel, player, data })
                } catch (error: any) {
                    console.ex(error)
                }
            }
        })
        Messenger.registerIncomingPluginChannel(this.pluginInstance, channel, pluginMessageListener)
        Messenger.registerOutgoingPluginChannel(this.pluginInstance, channel)
        return pluginMessageListener
    }
    unregister(channel: string, listener: any) {
        if (!this.cacheChannel.has(channel)) return
        let cacheListener = this.cacheChannel.get(channel)
        cacheListener = cacheListener.filter(l => l != listener)
        Messenger.unregisterIncomingPluginChannel(this.pluginInstance, channel, listener)
        if (cacheListener.length == 0) {
            this.cacheChannel.delete(channel)
            Messenger.unregisterOutgoingPluginChannel(this.pluginInstance, channel)
        }
    }
}
