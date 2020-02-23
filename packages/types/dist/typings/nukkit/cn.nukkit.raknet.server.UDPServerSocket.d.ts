declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                // @ts-ignore
                 class UDPServerSocket extends ChannelInboundHandlerAdapter {
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger)
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger, port: number)
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger, port: number, interfaz: string)
                    // @ts-ignore
                    protected logger: cn.nukkit.utils.ThreadedLogger;
                    // @ts-ignore
                    protected bootstrap: Bootstrap;
                    // @ts-ignore
                    protected channel: Channel;
                    // @ts-ignore
                    public static EPOLL: boolean;
                    // @ts-ignore
                    protected packets: java.util.concurrent.ConcurrentLinkedQueue;
                    // @ts-ignore
                    public close(): void;
                    // @ts-ignore
                    public clearPacketQueue(): void;
                    // @ts-ignore
                    public readPacket(): DatagramPacket;
                    // @ts-ignore
                    public writePacket(data: number, dest: string, port: number): number;
                    // @ts-ignore
                    public writePacket(data: number, dest: java.net.InetSocketAddress): number;
                    // @ts-ignore
                    public channelRead(ctx: ChannelHandlerContext, msg: java.lang.Object): void;
                    // @ts-ignore
                    public exceptionCaught(ctx: ChannelHandlerContext, cause: java.lang.Throwable): void;
                }
            }
        }
    }
}
