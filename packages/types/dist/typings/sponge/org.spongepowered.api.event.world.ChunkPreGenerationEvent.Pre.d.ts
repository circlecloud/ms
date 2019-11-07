// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace ChunkPreGenerationEvent {
                        // @ts-ignore
                        interface Pre extends org.spongepowered.api.event.world.ChunkPreGenerationEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Returns whether the chunk generator will skip generation this time
                             * around. This only prevents the next step from being performed.
                             * <p>Use {@link #isCancelled()} to check for cancellation of the
                             * entire generation task.</p>
                             */
                            // @ts-ignore
                             getSkipStep(): boolean;
                            /**
                             * Sets whether the next step should be skipped.
                             * <p>Use {@link #setCancelled(boolean)} to cancel the entire pre
                             * generation task.</p>
                             */
                            // @ts-ignore
                             setSkipStep(skipStep: boolean): void;
                        }
                    }
                }
            }
        }
    }
}
