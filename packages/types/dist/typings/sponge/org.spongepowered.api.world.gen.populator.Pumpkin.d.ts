declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Pumpkin extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Pumpkin} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Pumpkin.Builder;
                            /**
                             * Gets the number of pumpkins to attempt to spawn per patch, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             getPumpkinsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of pumpkins to attempt to spawn per patch, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setPumpkinsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of pumpkins to attempt to spawn per patch, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setPumpkinsPerChunk(count: number): void;
                            /**
                             * Gets the probability of a pumpkin patch spawning within a chunk.
                             */
                            // @ts-ignore
                             getPumpkinChance(): number;
                            /**
                             * Sets the probability of a pumpkin patch spawning within a chunk.
                             */
                            // @ts-ignore
                             setPumpkinChance(p: number): void;
                        }
                    }
                }
            }
        }
    }
}
