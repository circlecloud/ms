declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Cactus {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of cacti to spawn per chunk, cannot be negative.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of cacti which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 */
                                // @ts-ignore
                                 cactiPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Cactus.Builder;
                                /**
                                 * Sets the number of cacti to spawn per chunk, cannot be negative.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of cacti which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 */
                                // @ts-ignore
                                 cactiPerChunk(count: number): org.spongepowered.api.world.gen.populator.Cactus.Builder;
                                /**
                                 * Sets the height of the cacti.
                                 */
                                // @ts-ignore
                                 height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Cactus.Builder;
                                /**
                                 * Sets the height of the cacti.
                                 */
                                // @ts-ignore
                                 height(height: number): org.spongepowered.api.world.gen.populator.Cactus.Builder;
                                /**
                                 * Builds a new instance of a {@link Cactus} populator with the settings
                                 * set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Cactus;
                            }
                        }
                    }
                }
            }
        }
    }
}
