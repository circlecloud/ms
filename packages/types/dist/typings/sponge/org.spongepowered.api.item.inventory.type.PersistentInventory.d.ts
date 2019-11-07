declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        // @ts-ignore
                        interface PersistentInventory extends org.spongepowered.api.item.inventory.Inventory {
                            /**
                             * Mark this inventory as dirty to serve as a flag to the serialisation
                             * mechanism.
                             */
                            // @ts-ignore
                             markDirty(): void;
                        }
                    }
                }
            }
        }
    }
}
