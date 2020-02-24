import { channel, plugin } from '@ms/api'
import { inject, injectable } from '@ms/container'

const Bukkit = org.bukkit.Bukkit
const PluginMessageListener = Java.type("org.bukkit.plugin.messaging.PluginMessageListener")
const Messenger = Bukkit.getMessenger()

@injectable()
export class BukkitChannel extends channel.Channel {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    send(player: any, channel: string, data: any) {
        player.sendPluginMessage(this.pluginInstance, channel, data);
    }
    register(channel: string, listener: channel.ChannelListener) {
        Messenger.registerIncomingPluginChannel(this.pluginInstance, channel, new PluginMessageListener({
            onPluginMessageReceived: (/**String */ var1, /**Player */ var2, /**byte[] */var3) => {
                listener(var3)
            }
        }));
        Messenger.registerOutgoingPluginChannel(this.pluginInstance, channel);
    }
    unregister(channel: string, listener: any) {
        Messenger.unregisterIncomingPluginChannel(this.pluginInstance, channel)
        Messenger.unregisterOutgoingPluginChannel(this.pluginInstance, channel)
    }
}
