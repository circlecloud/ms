declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                // @ts-ignore
                 class Session extends java.lang.Object {
                    // @ts-ignore
                    constructor(sessionManager: cn.nukkit.raknet.server.SessionManager, address: string, port: number)
                    // @ts-ignore
                    public static STATE_UNCONNECTED: number;
                    // @ts-ignore
                    public static STATE_CONNECTING_1: number;
                    // @ts-ignore
                    public static STATE_CONNECTING_2: number;
                    // @ts-ignore
                    public static STATE_CONNECTED: number;
                    // @ts-ignore
                    public static MAX_SPLIT_SIZE: number;
                    // @ts-ignore
                    public static MAX_SPLIT_COUNT: number;
                    // @ts-ignore
                    public static WINDOW_SIZE: number;
                    // @ts-ignore
                    public getAddress(): string;
                    // @ts-ignore
                    public getPort(): number;
                    // @ts-ignore
                    public getID(): number;
                    // @ts-ignore
                    public update(time: number): void;
                    // @ts-ignore
                    public disconnect(): void;
                    // @ts-ignore
                    public disconnect(reason: string): void;
                    // @ts-ignore
                    public sendQueue(): void;
                    // @ts-ignore
                    public addEncapsulatedToQueue(packet: cn.nukkit.raknet.protocol.EncapsulatedPacket): void;
                    // @ts-ignore
                    public addEncapsulatedToQueue(packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number): void;
                    // @ts-ignore
                    public getState(): number;
                    // @ts-ignore
                    public isTemporal(): boolean;
                    // @ts-ignore
                    public handlePacket(packet: cn.nukkit.raknet.protocol.Packet): void;
                    // @ts-ignore
                    public close(): void;
                }
            }
        }
    }
}
