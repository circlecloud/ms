// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface RandomObject extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link RandomObject} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.RandomObject.Builder;
                            /**
                             * Gets the number of fires to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getAttemptsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of fires to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setAttemptsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of fires to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setAttemptsPerChunk(count: number): void;
                            /**
                             * Gets the height range that the object will be placed within.
                             */
                            // @ts-ignore
                             getHeightRange(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height range that the object will be placed within.
                             */
                            // @ts-ignore
                             setHeightRange(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Gets the {@link PopulatorObject} that this populator will attempt to
                             * place.
                             */
                            // @ts-ignore
                             getObject(): org.spongepowered.api.world.gen.PopulatorObject;
                            /**
                             * Sets the {@link PopulatorObject} for this populator to attempt to place.
                             */
                            // @ts-ignore
                             setObject(obj: org.spongepowered.api.world.gen.PopulatorObject): void;
                            /**
                             * Gets the chance of spawning the object for each attempt. This chance is
                             * applied before the checks for if the placement is valid. This value must
                             * be between zero and one (inclusive) with a chance of zero representing no
                             * chance of the object being placed, and a chance of 1 representing a 100%
                             * chance of the object being placed.
                             */
                            // @ts-ignore
                             getSpawnChance(): number;
                            /**
                             * Sets the chance of spawning the object for each attempt. This chance is
                             * applied before the checks for if the placement is valid. This value must
                             * be between zero and one (inclusive) with a chance of zero representing no
                             * chance of the object being placed, and a chance of 1 representing a 100%
                             * chance of the object being placed.
                             */
                            // @ts-ignore
                             setSpawnChance(chance: number): void;
                        }
                    }
                }
            }
        }
    }
}
