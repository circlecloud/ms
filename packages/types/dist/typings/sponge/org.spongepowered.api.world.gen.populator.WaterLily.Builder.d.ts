declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace WaterLily {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of water lilies to attempt to spawn per chunk, must
                                 * be greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.WaterLily.Builder;
                                /**
                                 * Sets the number of water lilies to attempt to spawn per chunk, must
                                 * be greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.WaterLily.Builder;
                                /**
                                 * Builds a new instance of a {@link WaterLily} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.WaterLily;
                            }
                        }
                    }
                }
            }
        }
    }
}
