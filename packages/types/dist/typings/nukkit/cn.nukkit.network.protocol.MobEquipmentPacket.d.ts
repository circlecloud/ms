declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class MobEquipmentPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public eid: number;
                    // @ts-ignore
                    public item: cn.nukkit.item.Item;
                    // @ts-ignore
                    public inventorySlot: number;
                    // @ts-ignore
                    public hotbarSlot: number;
                    // @ts-ignore
                    public windowId: number;
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
