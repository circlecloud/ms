declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        // @ts-ignore
                        interface TargetChunkEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the {@link Chunk} being changed.
                             */
                            // @ts-ignore
                             getTargetChunk(): org.spongepowered.api.world.Chunk;
                        }
                    }
                }
            }
        }
    }
}
