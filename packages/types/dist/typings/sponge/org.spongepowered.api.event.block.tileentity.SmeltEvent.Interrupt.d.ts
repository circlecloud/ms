// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        namespace SmeltEvent {
                            // @ts-ignore
                            interface Interrupt extends org.spongepowered.api.event.block.tileentity.SmeltEvent {
                                /**
                                 * Gets an immutable {@link List} of {@link ItemStackSnapshot}s that are the result
                                 * of the smelt.
                                 */
                                // @ts-ignore
                                 getSmeltedItems(): java.util.List;
                            }
                        }
                    }
                }
            }
        }
    }
}
