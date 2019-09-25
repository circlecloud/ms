declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Flower {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of flowers to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of flowers which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Flower.Builder;
                                /**
                                 * Sets the number of flowers to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of flowers which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.Flower.Builder;
                                /**
                                 * Sets the plant types for this populator to spawn.
                                 */
                                // @ts-ignore
                                 types(types: org.spongepowered.api.util.weighted.WeightedTable): org.spongepowered.api.world.gen.populator.Flower.Builder;
                                /**
                                 * Adds the plant type to the list of types to spawn with the given
                                 * weight.
                                 */
                                // @ts-ignore
                                 type(type: org.spongepowered.api.data.type.PlantType, weight: number): org.spongepowered.api.world.gen.populator.Flower.Builder;
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 */
                                // @ts-ignore
                                 supplier(override: any): org.spongepowered.api.world.gen.populator.Flower.Builder;
                                /**
                                 * Builds a new instance of a {@link Flower} populator with the settings
                                 * set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Flower;
                            }
                        }
                    }
                }
            }
        }
    }
}
