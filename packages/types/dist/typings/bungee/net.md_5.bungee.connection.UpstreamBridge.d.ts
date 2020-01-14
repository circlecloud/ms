declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace connection {
                // @ts-ignore
                 class UpstreamBridge extends net.md_5.bungee.netty.PacketHandler {
                    // @ts-ignore
                    constructor(bungee: ProxyServer, con: net.md_5.bungee.UserConnection)
                    // @ts-ignore
                    public exception(t: java.lang.Throwable): void;
                    // @ts-ignore
                    public disconnected(channel: net.md_5.bungee.netty.ChannelWrapper): void;
                    // @ts-ignore
                    public writabilityChanged(channel: net.md_5.bungee.netty.ChannelWrapper): void;
                    // @ts-ignore
                    public shouldHandle(packet: PacketWrapper): boolean;
                    // @ts-ignore
                    public handle(packet: PacketWrapper): void;
                    // @ts-ignore
                    public handle(alive: KeepAlive): void;
                    // @ts-ignore
                    public handle(chat: Chat): void;
                    // @ts-ignore
                    public handle(tabComplete: TabCompleteRequest): void;
                    // @ts-ignore
                    public handle(settings: ClientSettings): void;
                    // @ts-ignore
                    public handle(pluginMessage: PluginMessage): void;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
