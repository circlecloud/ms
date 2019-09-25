declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface ClickInventoryEvent extends org.spongepowered.api.event.item.inventory.ChangeInventoryEvent, org.spongepowered.api.event.item.inventory.InteractInventoryEvent {
                            /**
                             * Returns the primary interaction Slot.
                             * <p>May return {@link Optional#empty()} for events that do not directly interact with a Slot</p>
                             */
                            // @ts-ignore
                             getSlot(): any;
                        }
                    }
                }
            }
        }
    }
}
