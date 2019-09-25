declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ChangeInventoryEvent {
                            namespace Pickup {
                                // @ts-ignore
                                interface Pre extends org.spongepowered.api.event.item.inventory.TargetInventoryEvent, org.spongepowered.api.event.entity.item.TargetItemEvent, org.spongepowered.api.event.Cancellable {
                                    /**
                                     * Returns the original picked up {@link ItemStackSnapshot}
                                     * to add to the inventory.
                                     */
                                    // @ts-ignore
                                     getOriginalStack(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                                    /**
                                     * Returns the custom set list of items to add to the inventory or {@link Optional#empty()} if not set.
                                     */
                                    // @ts-ignore
                                     getCustom(): any;
                                    /**
                                     * Sets the items to add to the inventory.
                                     * <p>If all items do not fit the inventory this event will be
                                     * automatically canceled.</p>
                                     */
                                    // @ts-ignore
                                     setCustom(items: any[] /*java.util.List*/): void;
                                    /**
                                     * Returns the proposed final list of items to add to the inventory.
                                     * <p>If a custom list was set all items have to fit the inventory
                                     * or this event will be automatically canceled.</p>
                                     */
                                    // @ts-ignore
                                     getFinal(): any[] /*java.util.List*/;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
