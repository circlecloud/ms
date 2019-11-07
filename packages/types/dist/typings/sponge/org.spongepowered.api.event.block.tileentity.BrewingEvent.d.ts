declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        // @ts-ignore
                        interface BrewingEvent extends org.spongepowered.api.event.block.tileentity.TargetTileEntityEvent {
                            // @ts-ignore
                             getTargetTile(): org.spongepowered.api.block.tileentity.carrier.BrewingStand;
                            /**
                             * Gets the {@link ItemStackSnapshot} as the ingredient used.
                             */
                            // @ts-ignore
                             getIngredient(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                        }
                    }
                }
            }
        }
    }
}
