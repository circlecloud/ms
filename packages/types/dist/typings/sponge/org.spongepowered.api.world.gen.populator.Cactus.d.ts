// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Cactus extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Cactus} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Cactus.Builder;
                            /**
                             * Gets the number of cacti to spawn per chunk.
                             */
                            // @ts-ignore
                             getCactiPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of cacti to spawn per chunk, cannot be negative.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of cacti which are successfully spawned by the populator will
                             * almost always be lower.</p>
                             */
                            // @ts-ignore
                             setCactiPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of cacti to spawn per chunk, cannot be negative.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of cacti which are successfully spawned by the populator will
                             * almost always be lower.</p>
                             */
                            // @ts-ignore
                             setCactiPerChunk(count: number): void;
                            /**
                             * Gets the height of the cacti.
                             */
                            // @ts-ignore
                             getHeight(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height of the cacti.
                             */
                            // @ts-ignore
                             setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the height of the cacti.
                             */
                            // @ts-ignore
                             setHeight(count: number): void;
                        }
                    }
                }
            }
        }
    }
}
