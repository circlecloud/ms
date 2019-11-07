// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace RandomObject {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of fires to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.RandomObject.Builder;
                                /**
                                 * Sets the number of fires to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.RandomObject.Builder;
                                /**
                                 * Sets the height range that the object will be placed within.
                                 */
                                // @ts-ignore
                                 height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.RandomObject.Builder;
                                /**
                                 * Sets the {@link PopulatorObject} for the populator to attempt to
                                 * place.
                                 */
                                // @ts-ignore
                                 object(obj: org.spongepowered.api.world.gen.PopulatorObject): org.spongepowered.api.world.gen.populator.RandomObject.Builder;
                                /**
                                 * Sets the chance of spawning the object for each attempt. This chance
                                 * is applied before the checks for if the placement is valid. This
                                 * value must be between zero and one (inclusive) with a chance of zero
                                 * representing no chance of the object being placed, and a chance of 1
                                 * representing a 100% chance of the object being placed.
                                 */
                                // @ts-ignore
                                 spawnChance(chance: number): org.spongepowered.api.world.gen.populator.RandomObject.Builder;
                                /**
                                 * Builds a new instance of a {@link RandomBlock} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.RandomObject;
                            }
                        }
                    }
                }
            }
        }
    }
}
