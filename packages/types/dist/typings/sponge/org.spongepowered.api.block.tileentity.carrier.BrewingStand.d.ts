// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        // @ts-ignore
                        interface BrewingStand extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Attempts to brew the current potions if possible.
                             * <p>This will work if there is a compatible recipe.</p>
                             */
                            // @ts-ignore
                             brew(): boolean;
                        }
                    }
                }
            }
        }
    }
}
