// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        namespace PopulateChunkEvent {
                            // @ts-ignore
                            interface Pre extends org.spongepowered.api.event.world.chunk.PopulateChunkEvent {
                                /**
                                 * Returns a mutable list of all pending populators.
                                 */
                                // @ts-ignore
                                 getPendingPopulators(): java.util.List;
                            }
                        }
                    }
                }
            }
        }
    }
}
