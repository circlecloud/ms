// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface DesertWell extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link DesertWell} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.DesertWell.Builder;
                            /**
                             * Gets the probability of a desert well spawning.
                             */
                            // @ts-ignore
                             getSpawnProbability(): number;
                            /**
                             * Sets the probability of a desert well spawning.
                             */
                            // @ts-ignore
                             setSpawnProbability(p: number): void;
                            /**
                             * Gets the {@link PopulatorObject} representing the well.
                             */
                            // @ts-ignore
                             getWellObject(): org.spongepowered.api.world.gen.PopulatorObject;
                            /**
                             * Sets the {@link PopulatorObject} representing the well.
                             */
                            // @ts-ignore
                             setWellObject(obj: org.spongepowered.api.world.gen.PopulatorObject): void;
                        }
                    }
                }
            }
        }
    }
}
