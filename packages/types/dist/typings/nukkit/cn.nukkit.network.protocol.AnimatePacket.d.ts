declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class AnimatePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public eid: number;
                    // @ts-ignore
                    public action: cn.nukkit.network.protocol.AnimatePacket.Action;
                    // @ts-ignore
                    public rowingTime: number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public pid(): number;
                }
            }
        }
    }
}
