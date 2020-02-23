declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace data {
                    // @ts-ignore
                     class UseItemData extends java.lang.Object implements cn.nukkit.inventory.transaction.data.TransactionData {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public actionType: number;
                        // @ts-ignore
                        public blockPos: cn.nukkit.math.BlockVector3;
                        // @ts-ignore
                        public face: cn.nukkit.math.BlockFace;
                        // @ts-ignore
                        public hotbarSlot: number;
                        // @ts-ignore
                        public itemInHand: cn.nukkit.item.Item;
                        // @ts-ignore
                        public playerPos: cn.nukkit.math.Vector3;
                        // @ts-ignore
                        public clickPos: cn.nukkit.math.Vector3f;
                        // @ts-ignore
                        public blockRuntimeId: number;
                    }
                }
            }
        }
    }
}
