declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class InteractPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static ACTION_VEHICLE_EXIT: number;
                    // @ts-ignore
                    public static ACTION_MOUSEOVER: number;
                    // @ts-ignore
                    public static ACTION_OPEN_INVENTORY: number;
                    // @ts-ignore
                    public action: number;
                    // @ts-ignore
                    public target: number;
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
