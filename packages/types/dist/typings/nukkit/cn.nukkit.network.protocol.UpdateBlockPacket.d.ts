declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class UpdateBlockPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static FLAG_NONE: number;
                    // @ts-ignore
                    public static FLAG_NEIGHBORS: number;
                    // @ts-ignore
                    public static FLAG_NETWORK: number;
                    // @ts-ignore
                    public static FLAG_NOGRAPHIC: number;
                    // @ts-ignore
                    public static FLAG_PRIORITY: number;
                    // @ts-ignore
                    public static FLAG_ALL: number;
                    // @ts-ignore
                    public static FLAG_ALL_PRIORITY: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public blockRuntimeId: number;
                    // @ts-ignore
                    public flags: number;
                    // @ts-ignore
                    public dataLayer: number;
                    // @ts-ignore
                    public pid(): number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                }
            }
        }
    }
}
