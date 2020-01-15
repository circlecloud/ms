declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace compress {
                // @ts-ignore
                 class PacketCompressor extends object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public handlerAdded(ctx: ChannelHandlerContext): void;
                    // @ts-ignore
                    public handlerRemoved(ctx: ChannelHandlerContext): void;
                    // @ts-ignore
                    protected encode(ctx: ChannelHandlerContext, msg: ByteBuf, out: ByteBuf): void;
                    // @ts-ignore
                    public setThreshold(threshold: number): void;
                }
            }
        }
    }
}
