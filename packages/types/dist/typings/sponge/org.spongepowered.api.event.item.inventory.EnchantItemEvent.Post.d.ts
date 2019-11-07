// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace EnchantItemEvent {
                            // @ts-ignore
                            interface Post extends org.spongepowered.api.event.item.inventory.ClickInventoryEvent, org.spongepowered.api.event.item.inventory.EnchantItemEvent {
                                /**
                                 * Returns the slot of the enchanted item.
                                 */
                                // @ts-ignore
                                 getEnchantingSlot(): org.spongepowered.api.item.inventory.Slot;
                            }
                        }
                    }
                }
            }
        }
    }
}
