// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Melon {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of melons to attempt to spawn per chunk.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Melon.Builder;
                                /**
                                 * Sets the number of melons to attempt to spawn per chunk.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.Melon.Builder;
                                /**
                                 * Builds a new instance of a {@link Melon} populator with the settings
                                 * set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Melon;
                            }
                        }
                    }
                }
            }
        }
    }
}
