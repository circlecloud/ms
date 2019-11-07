declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface BlockCarrier extends org.spongepowered.api.item.inventory.Carrier, org.spongepowered.api.world.Locatable {
                        /**
                         * Returns the Location of the Block.
                         */
                        // @ts-ignore
                         getLocation(): org.spongepowered.api.world.Location;
                        /**
                         * Returns the Inventory owned by this Carrier and accessible from
                         * the given direction.
                         * <p>e.g. A Furnace accessed from {@link Direction#DOWN} will return its Fuel Slot</p>
                         * <p>When no inventory is accessible a {@link EmptyInventory} is returned</p>
                         */
                        // @ts-ignore
                         getInventory(from: org.spongepowered.api.util.Direction): org.spongepowered.api.item.inventory.Inventory;
                    }
                }
            }
        }
    }
}
