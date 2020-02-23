declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class CompletedUsingItemPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static ACTION_UNKNOWN: number;
                    // @ts-ignore
                    public static ACTION_EQUIP_ARMOR: number;
                    // @ts-ignore
                    public static ACTION_EAT: number;
                    // @ts-ignore
                    public static ACTION_ATTACK: number;
                    // @ts-ignore
                    public static ACTION_CONSUME: number;
                    // @ts-ignore
                    public static ACTION_THROW: number;
                    // @ts-ignore
                    public static ACTION_SHOOT: number;
                    // @ts-ignore
                    public static ACTION_PLACE: number;
                    // @ts-ignore
                    public static ACTION_FILL_BOTTLE: number;
                    // @ts-ignore
                    public static ACTION_FILL_BUCKET: number;
                    // @ts-ignore
                    public static ACTION_POUR_BUCKET: number;
                    // @ts-ignore
                    public static ACTION_USE_TOOL: number;
                    // @ts-ignore
                    public static ACTION_INTERACT: number;
                    // @ts-ignore
                    public static ACTION_RETRIEVE: number;
                    // @ts-ignore
                    public static ACTION_DYED: number;
                    // @ts-ignore
                    public static ACTION_TRADED: number;
                    // @ts-ignore
                    public itemId: number;
                    // @ts-ignore
                    public action: number;
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
