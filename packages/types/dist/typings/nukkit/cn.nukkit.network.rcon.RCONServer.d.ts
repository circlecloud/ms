declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace rcon {
                // @ts-ignore
                 class RCONServer extends java.lang.Thread {
                    // @ts-ignore
                    constructor(address: string, port: number, password: string)
                    // @ts-ignore
                    public receive(): cn.nukkit.network.rcon.RCONCommand;
                    // @ts-ignore
                    public respond(channel: java.nio.channels.SocketChannel, id: number, response: string): void;
                    // @ts-ignore
                    public close(): void;
                    // @ts-ignore
                    public run(): void;
                }
            }
        }
    }
}
