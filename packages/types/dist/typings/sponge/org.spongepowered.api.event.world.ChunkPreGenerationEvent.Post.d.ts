declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace ChunkPreGenerationEvent {
                        // @ts-ignore
                        interface Post extends org.spongepowered.api.event.world.ChunkPreGenerationEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * The number of chunks generated during the previous step.
                             */
                            // @ts-ignore
                             getChunksGeneratedThisStep(): number;
                            /**
                             * The number of chunks generated that did not need to be generated and
                             * were skipped over.
                             */
                            // @ts-ignore
                             getChunksSkippedThisStep(): number;
                            /**
                             * The {@link Duration} of the previous step.
                             */
                            // @ts-ignore
                             getTimeTakenForStep(): java.time.Duration;
                        }
                    }
                }
            }
        }
    }
}
