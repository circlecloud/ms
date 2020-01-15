declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                // @ts-ignore
                 class MinecraftEncoder extends object {
                    // @ts-ignore
                    constructor(protocol: net.md_5.bungee.protocol.Protocol, server: boolean, protocolVersion: number)
                    // @ts-ignore
                    protected encode(ctx: ChannelHandlerContext, msg: net.md_5.bungee.protocol.DefinedPacket, out: ByteBuf): void;
                    // @ts-ignore
                    public setProtocol(protocol: net.md_5.bungee.protocol.Protocol): void;
                    // @ts-ignore
                    public setProtocolVersion(protocolVersion: number): void;
                }
            }
        }
    }
}
