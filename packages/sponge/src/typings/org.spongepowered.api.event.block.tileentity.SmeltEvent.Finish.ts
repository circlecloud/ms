declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        namespace SmeltEvent {
                            // @ts-ignore
                            interface Finish extends org.spongepowered.api.event.block.tileentity.SmeltEvent {
                                /**
                                 * Gets an immutable {@link List} of {@link ItemStackSnapshot}s that are the result of the smelt.
                                 * Always exactly one item.
                                 */
                                // @ts-ignore
                                 getSmeltedItems(): any[] /*java.util.List*/;
                            }
                        }
                    }
                }
            }
        }
    }
}
