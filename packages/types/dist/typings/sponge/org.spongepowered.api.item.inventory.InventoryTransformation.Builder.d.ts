declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace InventoryTransformation {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Appends one or more {@link QueryOperation}s
                             */
                            // @ts-ignore
                             append(operation: org.spongepowered.api.item.inventory.query.QueryOperation): org.spongepowered.api.item.inventory.InventoryTransformation.Builder;
                            /**
                             * Builds the transformation
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.item.inventory.InventoryTransformation;
                        }
                    }
                }
            }
        }
    }
}
