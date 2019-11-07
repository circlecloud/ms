declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        // @ts-ignore
                        interface TileEntityCarrier extends org.spongepowered.api.block.tileentity.TileEntity, org.spongepowered.api.item.inventory.BlockCarrier {
                            // @ts-ignore
                             getInventory(): org.spongepowered.api.item.inventory.type.TileEntityInventory;
                        }
                    }
                }
            }
        }
    }
}
