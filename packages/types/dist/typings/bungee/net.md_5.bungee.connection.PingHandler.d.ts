declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace connection {
                // @ts-ignore
                 class PingHandler extends net.md_5.bungee.netty.PacketHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public connected(channel: any /*net.md_5.bungee.netty.ChannelWrapper*/): void;
                    // @ts-ignore
                    public exception(t: java.lang.Throwable): void;
                    // @ts-ignore
                    public handle(packet: PacketWrapper): void;
                    // @ts-ignore
                    public handle(statusResponse: StatusResponse): void;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
