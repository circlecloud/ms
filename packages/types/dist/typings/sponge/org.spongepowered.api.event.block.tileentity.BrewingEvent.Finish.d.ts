declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        namespace BrewingEvent {
                            // @ts-ignore
                            interface Finish extends org.spongepowered.api.event.block.tileentity.BrewingEvent {
                                /**
                                 * Gets an immutable {@link List} of {@link ItemStackSnapshot}s that are the result
                                 * of the brew.
                                 */
                                // @ts-ignore
                                 getBrewedItemStacks(): java.util.List;
                            }
                        }
                    }
                }
            }
        }
    }
}
