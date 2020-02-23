declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class InventoryTransactionPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static TYPE_NORMAL: number;
                    // @ts-ignore
                    public static TYPE_MISMATCH: number;
                    // @ts-ignore
                    public static TYPE_USE_ITEM: number;
                    // @ts-ignore
                    public static TYPE_USE_ITEM_ON_ENTITY: number;
                    // @ts-ignore
                    public static TYPE_RELEASE_ITEM: number;
                    // @ts-ignore
                    public static USE_ITEM_ACTION_CLICK_BLOCK: number;
                    // @ts-ignore
                    public static USE_ITEM_ACTION_CLICK_AIR: number;
                    // @ts-ignore
                    public static USE_ITEM_ACTION_BREAK_BLOCK: number;
                    // @ts-ignore
                    public static RELEASE_ITEM_ACTION_RELEASE: number;
                    // @ts-ignore
                    public static RELEASE_ITEM_ACTION_CONSUME: number;
                    // @ts-ignore
                    public static USE_ITEM_ON_ENTITY_ACTION_INTERACT: number;
                    // @ts-ignore
                    public static USE_ITEM_ON_ENTITY_ACTION_ATTACK: number;
                    // @ts-ignore
                    public static ACTION_MAGIC_SLOT_DROP_ITEM: number;
                    // @ts-ignore
                    public static ACTION_MAGIC_SLOT_PICKUP_ITEM: number;
                    // @ts-ignore
                    public static ACTION_MAGIC_SLOT_CREATIVE_DELETE_ITEM: number;
                    // @ts-ignore
                    public static ACTION_MAGIC_SLOT_CREATIVE_CREATE_ITEM: number;
                    // @ts-ignore
                    public transactionType: number;
                    // @ts-ignore
                    public actions: cn.nukkit.network.protocol.types.NetworkInventoryAction[];
                    // @ts-ignore
                    public transactionData: cn.nukkit.inventory.transaction.data.TransactionData;
                    // @ts-ignore
                    public isCraftingPart: boolean;
                    // @ts-ignore
                    public pid(): number;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public decode(): void;
                }
            }
        }
    }
}
