declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                namespace types {
                    // @ts-ignore
                     class NetworkInventoryAction extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static SOURCE_CONTAINER: number;
                        // @ts-ignore
                        public static SOURCE_WORLD: number;
                        // @ts-ignore
                        public static SOURCE_CREATIVE: number;
                        // @ts-ignore
                        public static SOURCE_TODO: number;
                        // @ts-ignore
                        public static SOURCE_CRAFT_SLOT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_CRAFTING_ADD_INGREDIENT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_CRAFTING_REMOVE_INGREDIENT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_CRAFTING_RESULT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_CRAFTING_USE_INGREDIENT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_ANVIL_INPUT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_ANVIL_MATERIAL: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_ANVIL_RESULT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_ANVIL_OUTPUT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_ENCHANT_INPUT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_ENCHANT_MATERIAL: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_ENCHANT_OUTPUT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_TRADING_INPUT_1: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_TRADING_INPUT_2: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_TRADING_USE_INPUTS: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_TRADING_OUTPUT: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_BEACON: number;
                        // @ts-ignore
                        public static SOURCE_TYPE_CONTAINER_DROP_CONTENTS: number;
                        // @ts-ignore
                        public sourceType: number;
                        // @ts-ignore
                        public windowId: number;
                        // @ts-ignore
                        public unknown: number;
                        // @ts-ignore
                        public inventorySlot: number;
                        // @ts-ignore
                        public oldItem: cn.nukkit.item.Item;
                        // @ts-ignore
                        public newItem: cn.nukkit.item.Item;
                        // @ts-ignore
                        public read(packet: cn.nukkit.network.protocol.InventoryTransactionPacket): cn.nukkit.network.protocol.types.NetworkInventoryAction;
                        // @ts-ignore
                        public write(packet: cn.nukkit.network.protocol.InventoryTransactionPacket): void;
                        // @ts-ignore
                        public createInventoryAction(player: cn.nukkit.Player): cn.nukkit.inventory.transaction.action.InventoryAction;
                    }
                }
            }
        }
    }
}
