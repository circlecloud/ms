declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Lake {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the {@link BlockState} of the liquid to fill the lake with.
                                 */
                                // @ts-ignore
                                 liquidType(liquid: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.Lake.Builder;
                                /**
                                 * Sets the probability of a lake spawning in a chunk.
                                 */
                                // @ts-ignore
                                 chance(p: number): org.spongepowered.api.world.gen.populator.Lake.Builder;
                                /**
                                 * Sets the height that the lake will be spawned at.
                                 */
                                // @ts-ignore
                                 height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Lake.Builder;
                                /**
                                 * Builds a new instance of a {@link Lake} populator with the settings
                                 * set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Lake;
                            }
                        }
                    }
                }
            }
        }
    }
}
