declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace DropItemEvent {
                            // @ts-ignore
                            interface Pre extends org.spongepowered.api.event.item.inventory.DropItemEvent {
                                /**
                                 * Gets the original immutable list of {@link ItemStackSnapshot}s to be
                                 * dropped.
                                 */
                                // @ts-ignore
                                 getOriginalDroppedItems(): any[] /*java.util.List*/;
                                /**
                                 * Gets the mutable list of {@link ItemStackSnapshot}s to be dropped.
                                 */
                                // @ts-ignore
                                 getDroppedItems(): any[] /*java.util.List*/;
                            }
                        }
                    }
                }
            }
        }
    }
}
