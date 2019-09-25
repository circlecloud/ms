declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace CraftItemEvent {
                            // @ts-ignore
                            interface Craft extends org.spongepowered.api.event.item.inventory.CraftItemEvent, org.spongepowered.api.event.item.inventory.ClickInventoryEvent {
                                /**
                                 * The item crafted with this event.
                                 */
                                // @ts-ignore
                                 getCrafted(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                                /**
                                 * Returns the crafting output Slot.
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
}
