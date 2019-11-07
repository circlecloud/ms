// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface InventoryTransformation {
                        /**
                         * Transforms an Inventory
                         */
                        // @ts-ignore
                         transform(inventory: org.spongepowered.api.item.inventory.Inventory): org.spongepowered.api.item.inventory.Inventory;
                        // @ts-ignore
                         builder(): org.spongepowered.api.item.inventory.InventoryTransformation.Builder;
                        /**
                         * Creates a new transformation based on QueryOperations.
                         */
                        // @ts-ignore
                         of(operations: org.spongepowered.api.item.inventory.query.QueryOperation): org.spongepowered.api.item.inventory.InventoryTransformation;
                    }
                }
            }
        }
    }
}
