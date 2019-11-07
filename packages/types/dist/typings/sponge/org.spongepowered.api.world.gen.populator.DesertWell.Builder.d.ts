// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace DesertWell {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the probability of a desert well spawning.
                                 */
                                // @ts-ignore
                                 probability(p: number): org.spongepowered.api.world.gen.populator.DesertWell.Builder;
                                /**
                                 * Sets the {@link PopulatorObject} representing the well.
                                 */
                                // @ts-ignore
                                 wellObject(obj: org.spongepowered.api.world.gen.PopulatorObject): org.spongepowered.api.world.gen.populator.DesertWell.Builder;
                                /**
                                 * Builds a new instance of a {@link DesertWell} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.DesertWell;
                            }
                        }
                    }
                }
            }
        }
    }
}
