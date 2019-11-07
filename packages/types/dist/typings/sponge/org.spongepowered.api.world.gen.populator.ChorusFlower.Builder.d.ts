// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace ChorusFlower {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the radius around the center (0, 0) of the world that this
                                 * populator will not apply to.
                                 * <p> This must be a positive value or zero. </p>
                                 */
                                // @ts-ignore
                                 exclusionRadius(radius: number): org.spongepowered.api.world.gen.populator.ChorusFlower.Builder;
                                /**
                                 * Builds a new instance of a {@link ChorusFlower} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.ChorusFlower;
                            }
                        }
                    }
                }
            }
        }
    }
}
