// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Pumpkin {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of pumpkins to attempt to spawn per patch, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Pumpkin.Builder;
                                /**
                                 * Sets the number of pumpkins to attempt to spawn per patch, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.Pumpkin.Builder;
                                /**
                                 * Sets the probability of a pumpkin patch spawning within a chunk.
                                 */
                                // @ts-ignore
                                 chance(p: number): org.spongepowered.api.world.gen.populator.Pumpkin.Builder;
                                /**
                                 * Builds a new instance of a {@link Pumpkin} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Pumpkin;
                            }
                        }
                    }
                }
            }
        }
    }
}
