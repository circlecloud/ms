import { channel, plugin } from '@ms/api'
import { inject, provideSingleton } from '@ms/container'

const Sponge = org.spongepowered.api.Sponge
const RawDataListener = Java.type("org.spongepowered.api.network.RawDataListener")
const ChannelRegistrar = Sponge.getChannelRegistrar()
const Consumer = Java.type("java.util.function.Consumer");

@provideSingleton(channel.Channel)
export class SpongeChannel extends channel.Channel {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    private channelMap = new Map<string, any>();

    send(player: any, channel: string, data: any) {
        if (!this.channelMap.has(channel)) { return }
        this.channelMap.get(channel).sendTo(player, new Consumer({
            accept: (channelBuf: any) => channelBuf.writeBytes(data)
        }))
    }
    register(channel: string, listener: channel.ChannelListener) {
        if (!this.channelMap.has(channel)) {
            this.channelMap.set(channel, ChannelRegistrar.getOrCreateRaw(this.pluginInstance, channel))
        }
        let innerListener = new RawDataListener({
            handlePayload: (/* ChannelBuf */ data: any, /**RemoteConnection */ connection: any, /**Platform.Type */ side: any) => {
                listener(data.readBytes(data.available()))
            }
        })
        this.channelMap.get(channel).addListener(innerListener);
        return innerListener;
    }
    unregister(channel: string, listener: any) {
        if (!this.channelMap.has(channel)) { return }
        this.channelMap.get(channel).removeListener(listener);
    }
}
