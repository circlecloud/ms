// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace IcePath {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the radius of the path to spawn, cannot be negative.
                                 */
                                // @ts-ignore
                                 radius(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IcePath.Builder;
                                /**
                                 * Sets the radius of the path to spawn, cannot be negative.
                                 */
                                // @ts-ignore
                                 radius(radius: number): org.spongepowered.api.world.gen.populator.IcePath.Builder;
                                /**
                                 * Sets the number of sections to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(sections: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IcePath.Builder;
                                /**
                                 * Sets the number of sections to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(sections: number): org.spongepowered.api.world.gen.populator.IcePath.Builder;
                                /**
                                 * Builds a new instance of a {@link IcePath} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.IcePath;
                            }
                        }
                    }
                }
            }
        }
    }
}
