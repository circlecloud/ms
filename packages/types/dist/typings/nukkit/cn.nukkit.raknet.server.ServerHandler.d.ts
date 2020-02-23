declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                // @ts-ignore
                 class ServerHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor(server: cn.nukkit.raknet.server.RakNetServer, instance: cn.nukkit.raknet.server.ServerInstance)
                    // @ts-ignore
                    protected server: cn.nukkit.raknet.server.RakNetServer;
                    // @ts-ignore
                    protected instance: cn.nukkit.raknet.server.ServerInstance;
                    // @ts-ignore
                    public sendEncapsulated(identifier: string, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket): void;
                    // @ts-ignore
                    public sendEncapsulated(identifier: string, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number): void;
                    // @ts-ignore
                    public sendRaw(address: string, port: number, payload: number): void;
                    // @ts-ignore
                    public closeSession(identifier: string, reason: string): void;
                    // @ts-ignore
                    public sendOption(name: string, value: string): void;
                    // @ts-ignore
                    public blockAddress(address: string, timeout: number): void;
                    // @ts-ignore
                    public unblockAddress(address: string): void;
                    // @ts-ignore
                    public shutdown(): void;
                    // @ts-ignore
                    public emergencyShutdown(): void;
                    // @ts-ignore
                    protected invalidSession(identifier: string): void;
                    // @ts-ignore
                    public handlePacket(): boolean;
                }
            }
        }
    }
}
