declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkPreGenerate {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets the owner of the resulting task.
                         * <p>Mandatory.</p>
                         */
                        // @ts-ignore
                         owner(plugin: any): org.spongepowered.api.world.ChunkPreGenerate.Builder;
                        /**
                         * Adds a logger for logging generator efforts.
                         * <p>Optional. No effect if null is passed.</p>
                         */
                        // @ts-ignore
                         logger(logger: any /*Logger*/): org.spongepowered.api.world.ChunkPreGenerate.Builder;
                        /**
                         * Sets the number of ticks between generation runs.
                         * <p>Must be greater than 0.</p>
                         * <p>Optional.</p>
                         * <p>Default is 4.</p>
                         */
                        // @ts-ignore
                         tickInterval(tickInterval: number): org.spongepowered.api.world.ChunkPreGenerate.Builder;
                        /**
                         * Sets maximum number of chunks per tick to generate.
                         * <p>Use a value smaller or equal to 0 to disable.</p>
                         * <p>Optional if {@link #tickPercentLimit(float)} is used.</p>
                         * <p>Default is disabled.</p>
                         */
                        // @ts-ignore
                         chunksPerTick(chunkCount: number): org.spongepowered.api.world.ChunkPreGenerate.Builder;
                        /**
                         * Sets the limit of tick time that can be used to generate chunks as a
                         * percentage of {@link Scheduler#getPreferredTickInterval()}. The
                         * percentage must be a value in the range (0, 1]. No estimation is
                         * used to decide when to stop so the actual value will always be
                         * somewhere above the given percentage.
                         * <p>Use a value smaller or equal to 0 to disable.</p>
                         * <p>Optional if {@link #chunksPerTick(int)} is used.</p>
                         * <p>Default is 80%.</p>
                         */
                        // @ts-ignore
                         tickPercentLimit(tickPercent: number): org.spongepowered.api.world.ChunkPreGenerate.Builder;
                        /**
                         * Adds a {@link ChunkPreGenerationEvent} listener callback that will be
                         * called for this, and only this, pre-generation routine. Note that
                         * this does not change whether the various {@link ChunkPreGenerationEvent}
                         * events will be called, this is a convenience method to simply setup
                         * a listener bound to this pre-generation.
                         */
                        // @ts-ignore
                         addListener(listener: any): org.spongepowered.api.world.ChunkPreGenerate.Builder;
                        /**
                         * Schedules the task with the {@link Game#getScheduler()}.
                         */
                        // @ts-ignore
                         start(): org.spongepowered.api.world.ChunkPreGenerate;
                    }
                }
            }
        }
    }
}
