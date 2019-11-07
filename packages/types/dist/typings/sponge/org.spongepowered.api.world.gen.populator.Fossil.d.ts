declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Fossil extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Fossil} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Fossil.Builder;
                            /**
                             * Gets the probability of a fossil being generated.
                             */
                            // @ts-ignore
                             getSpawnProbability(): number;
                            /**
                             * Sets the spawn probability, must be be between 0 and 1.
                             */
                            // @ts-ignore
                             setSpawnProbability(chance: number): void;
                        }
                    }
                }
            }
        }
    }
}
