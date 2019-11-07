// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        namespace PopulateChunkEvent {
                            // @ts-ignore
                            interface Populate extends org.spongepowered.api.event.world.chunk.PopulateChunkEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the populator which is about to be run.
                                 */
                                // @ts-ignore
                                 getPopulator(): org.spongepowered.api.world.gen.Populator;
                            }
                        }
                    }
                }
            }
        }
    }
}
