declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        // @ts-ignore
                        interface TileEntityInventory extends org.spongepowered.api.item.inventory.type.PersistentInventory, org.spongepowered.api.item.inventory.type.Interactable, org.spongepowered.api.item.inventory.type.CarriedInventory {
                            /**
                             * Returns the owner of this Inventory.
                             */
                            // @ts-ignore
                             getTileEntity(): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
