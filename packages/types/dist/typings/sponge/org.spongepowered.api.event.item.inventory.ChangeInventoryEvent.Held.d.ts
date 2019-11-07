declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ChangeInventoryEvent {
                            // @ts-ignore
                            interface Held extends org.spongepowered.api.event.item.inventory.ChangeInventoryEvent {
                                /**
                                 * The previously selected slot.
                                 */
                                // @ts-ignore
                                 getOriginalSlot(): org.spongepowered.api.item.inventory.Slot;
                                /**
                                 * The new selected slot.
                                 */
                                // @ts-ignore
                                 getFinalSlot(): org.spongepowered.api.item.inventory.Slot;
                            }
                        }
                    }
                }
            }
        }
    }
}
