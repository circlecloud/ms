declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Melon extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Melon} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Melon.Builder;
                            /**
                             * Gets the number of melons to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getMelonsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of melons to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setMelonsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of melons to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setMelonsPerChunk(count: number): void;
                        }
                    }
                }
            }
        }
    }
}
