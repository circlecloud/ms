declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace transaction {
                        // @ts-ignore
                         class InventoryTransactionResult {
                            /**
                             * Begin building a new InventoryTransactionResult.
                             */
                            // @ts-ignore
                            public static builder(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Builder;
                            /**
                             * Returns a builder which indicates that the transaction succeeded, but the
                             * transaction result was no-op.
                             */
                            // @ts-ignore
                            public static successNoTransactions(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult;
                            /**
                             * Returns a builder which indicates that the transaction failed, and the
                             * transaction result was no-op.
                             */
                            // @ts-ignore
                            public static failNoTransactions(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult;
                            /**
                             * Gets the type of result.
                             */
                            // @ts-ignore
                            public getType(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type;
                            /**
                             * If items were supplied to the operation, this collection will return any
                             * items which were rejected by the target inventory.
                             */
                            // @ts-ignore
                            public getRejectedItems(): any[] /*java.util.Collection*/;
                            /**
                             * If the operation replaced items in the inventory, this collection returns
                             * the ItemStacks which were replaced.
                             */
                            // @ts-ignore
                            public getReplacedItems(): any[] /*java.util.Collection*/;
                        }
                    }
                }
            }
        }
    }
}
