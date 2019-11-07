// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface MultiBlockCarrier extends org.spongepowered.api.item.inventory.BlockCarrier {
                        /**
                         * Returns the Locations of the Blocks.
                         */
                        // @ts-ignore
                         getLocations(): java.util.List;
                        /**
                         * Returns the Inventory at given location if owned by this Carrier.
                         */
                        // @ts-ignore
                         getInventory(at: org.spongepowered.api.world.Location): java.util.Optional;
                        /**
                         * Returns the Inventory at given location if owned by this Carrier and
                         * accessible from given direction.
                         * <p>e.g. A Furnace accessed from {@link Direction#DOWN} will return
                         * its Fuel Slot</p>
                         */
                        // @ts-ignore
                         getInventory(at: org.spongepowered.api.world.Location, from: org.spongepowered.api.util.Direction): java.util.Optional;
                    }
                }
            }
        }
    }
}
