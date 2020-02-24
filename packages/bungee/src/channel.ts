import { channel, plugin, event } from '@ms/api'
import { inject, injectable } from '@ms/container'

const Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy()

@injectable()
export class BungeeChannel extends channel.Channel {
    send(player: any, channel: string, data: any) {
        throw new Error("Method not implemented.");
    }
    register(channel: string, listener: channel.ChannelListener) {
        Bungee.registerChannel(channel);
        console.console('§6[§eWARN§6] §eBungeeCord Channel only registerChannel you need self hanler PluginMessageEvent!')
    }
    unregister(channel: string, listener: any) {
        Bungee.unregisterChannel(channel);
    }
}
