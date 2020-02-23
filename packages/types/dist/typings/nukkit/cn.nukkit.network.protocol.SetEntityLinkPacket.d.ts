declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class SetEntityLinkPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static TYPE_REMOVE: number;
                    // @ts-ignore
                    public static TYPE_RIDE: number;
                    // @ts-ignore
                    public static TYPE_PASSENGER: number;
                    // @ts-ignore
                    public vehicleUniqueId: number;
                    // @ts-ignore
                    public riderUniqueId: number;
                    // @ts-ignore
                    public type: number;
                    // @ts-ignore
                    public immediate: number;
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
