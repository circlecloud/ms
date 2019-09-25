declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface ChunkPreGenerate {
                    /**
                     * The {@link WorldProperties} of the world that this task is operating on.
                     */
                    // @ts-ignore
                     getWorldProperties(): org.spongepowered.api.world.storage.WorldProperties;
                    /**
                     * The total number of chunks generated during this generation.
                     */
                    // @ts-ignore
                     getTotalGeneratedChunks(): number;
                    /**
                     * The total number of chunks skipped during this generation.
                     */
                    // @ts-ignore
                     getTotalSkippedChunks(): number;
                    /**
                     * The target number of chunks that will be generated or skipped
                     * during this generation. This includes chunks already generated
                     * or skipped.
                     */
                    // @ts-ignore
                     getTargetTotalChunks(): number;
                    /**
                     * Gets the total wall clock time it has taken (so far) to generate
                     * chunks.
                     */
                    // @ts-ignore
                     getTotalTime(): any;
                    /**
                     * Gets whether the task for this world has been cancelled
                     * (or completed).
                     */
                    // @ts-ignore
                     isCancelled(): boolean;
                    /**
                     * Cancels this pre-generation if it is still running.
                     */
                    // @ts-ignore
                     cancel(): void;
                }
            }
        }
    }
}
