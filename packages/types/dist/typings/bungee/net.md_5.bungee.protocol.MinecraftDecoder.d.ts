declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                // @ts-ignore
                 class MinecraftDecoder extends object {
                    // @ts-ignore
                    constructor(protocol: net.md_5.bungee.protocol.Protocol, server: boolean, protocolVersion: number)
                    // @ts-ignore
                    protected decode(ctx: ChannelHandlerContext, input: ByteBuf, out: java.util.List): void;
                    // @ts-ignore
                    public setProtocol(protocol: net.md_5.bungee.protocol.Protocol): void;
                    // @ts-ignore
                    public setProtocolVersion(protocolVersion: number): void;
                }
            }
        }
    }
}
