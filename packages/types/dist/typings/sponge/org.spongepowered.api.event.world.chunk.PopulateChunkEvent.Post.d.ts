// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        namespace PopulateChunkEvent {
                            // @ts-ignore
                            interface Post extends org.spongepowered.api.event.world.chunk.PopulateChunkEvent {
                                /**
                                 * Returns a copy of the {@link Populator}s that ran
                                 * on this {@link Chunk}.
                                 */
                                // @ts-ignore
                                 getAppliedPopulators(): java.util.List;
                            }
                        }
                    }
                }
            }
        }
    }
}
