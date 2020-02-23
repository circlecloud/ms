declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class LecternUpdatePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public page: number;
                    // @ts-ignore
                    public totalPages: number;
                    // @ts-ignore
                    public blockPosition: cn.nukkit.math.BlockVector3;
                    // @ts-ignore
                    public dropBook: boolean;
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
