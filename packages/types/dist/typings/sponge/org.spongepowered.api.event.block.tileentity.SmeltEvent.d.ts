declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        // @ts-ignore
                        interface SmeltEvent extends org.spongepowered.api.event.block.tileentity.TargetTileEntityEvent {
                            // @ts-ignore
                             getTargetTile(): org.spongepowered.api.block.tileentity.carrier.Furnace;
                            /**
                             * Gets the fuel represented as an {@link ItemStackSnapshot}.
                             */
                            // @ts-ignore
                             getFuel(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                        }
                    }
                }
            }
        }
    }
}
