declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class InventoryContentPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static SPECIAL_INVENTORY: number;
                    // @ts-ignore
                    public static SPECIAL_OFFHAND: number;
                    // @ts-ignore
                    public static SPECIAL_ARMOR: number;
                    // @ts-ignore
                    public static SPECIAL_CREATIVE: number;
                    // @ts-ignore
                    public static SPECIAL_HOTBAR: number;
                    // @ts-ignore
                    public static SPECIAL_FIXED_INVENTORY: number;
                    // @ts-ignore
                    public inventoryId: number;
                    // @ts-ignore
                    public slots: cn.nukkit.item.Item[];
                    // @ts-ignore
                    public pid(): number;
                    // @ts-ignore
                    public clean(): cn.nukkit.network.protocol.DataPacket;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public clone(): cn.nukkit.network.protocol.InventoryContentPacket;
                }
            }
        }
    }
}
