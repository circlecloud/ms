import { channel, plugin } from '@ms/api'
import { inject, provideSingleton } from '@ms/container'

const Bukkit = org.bukkit.Bukkit
const PluginMessageListener = Java.type("org.bukkit.plugin.messaging.PluginMessageListener")
const Messenger = Bukkit.getMessenger()

@provideSingleton(channel.Channel)
export class BukkitChannel extends channel.Channel {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    send(player: any, channel: string, data: any) {
        player.sendPluginMessage(this.pluginInstance, channel, data);
    }
    register(channel: string, listener: channel.ChannelListener) {
        Messenger.registerIncomingPluginChannel(this.pluginInstance, channel, new PluginMessageListener({
            onPluginMessageReceived: (/**String */ channel, /**Player */ player, /**byte[] */data) => {
                listener(data, { channel, player, data })
            }
        }));
        Messenger.registerOutgoingPluginChannel(this.pluginInstance, channel);
    }
    unregister(channel: string, listener: any) {
        Messenger.unregisterIncomingPluginChannel(this.pluginInstance, channel)
        Messenger.unregisterOutgoingPluginChannel(this.pluginInstance, channel)
    }
}
