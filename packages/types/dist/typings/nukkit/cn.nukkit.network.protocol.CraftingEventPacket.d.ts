declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class CraftingEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static TYPE_SHAPELESS: number;
                    // @ts-ignore
                    public static TYPE_SHAPED: number;
                    // @ts-ignore
                    public static TYPE_FURNACE: number;
                    // @ts-ignore
                    public static TYPE_FURNACE_DATA: number;
                    // @ts-ignore
                    public static TYPE_MULTI: number;
                    // @ts-ignore
                    public static TYPE_SHULKER_BOX: number;
                    // @ts-ignore
                    public windowId: number;
                    // @ts-ignore
                    public type: number;
                    // @ts-ignore
                    public id: java.util.UUID;
                    // @ts-ignore
                    public input: cn.nukkit.item.Item[];
                    // @ts-ignore
                    public output: cn.nukkit.item.Item[];
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
