declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface TargetInventoryEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the target {@link Inventory} of this {@link Event}.
                             */
                            // @ts-ignore
                             getTargetInventory(): org.spongepowered.api.item.inventory.Inventory;
                        }
                    }
                }
            }
        }
    }
}
