// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ChangeInventoryEvent {
                            // @ts-ignore
                            interface Transfer extends org.spongepowered.api.event.item.inventory.ChangeInventoryEvent {
                                /**
                                 * Gets the source {@link Inventory} of this {@link Event}.
                                 */
                                // @ts-ignore
                                 getSourceInventory(): org.spongepowered.api.item.inventory.Inventory;
                            }
                        }
                    }
                }
            }
        }
    }
}
