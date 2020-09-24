import { channel, event } from '@ccms/api'
import { provideSingleton, inject } from '@ccms/container'

const Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy()

@provideSingleton(channel.Channel)
export class BungeeChannel extends channel.Channel {
    @inject(event.Event)
    private eventManager: event.Event

    send(player: any, channel: string, data: any) {
        throw new Error("Method not implemented.")
    }
    register(channel: string, listener: channel.ChannelListener) {
        Bungee.registerChannel(channel)
        // console.console('§6[§eWARN§6] §eMiaoScript channel in BungeeCord only register. you need self hanler PluginMessageEvent!')
        return this.eventManager.listen({ description: { name: channel } }, "PluginMessageEvent", (event: net.md_5.bungee.api.event.PluginMessageEvent) => {
            listener(event.getData(), event)
        })
    }
    unregister(channel: string, off: any) {
        Bungee.unregisterChannel(channel)
        off()
    }
}
