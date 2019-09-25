declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace DoublePlant {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets which plant types may be spawned in by this populator.
                                 */
                                // @ts-ignore
                                 types(types: org.spongepowered.api.util.weighted.WeightedTable): org.spongepowered.api.world.gen.populator.DoublePlant.Builder;
                                /**
                                 * Adds a plant type to the list that may be spawned in by this
                                 * populator.
                                 */
                                // @ts-ignore
                                 type(type: org.spongepowered.api.data.type.DoublePlantType, weight: number): org.spongepowered.api.world.gen.populator.DoublePlant.Builder;
                                /**
                                 * Sets the number of plants to create, cannot be negative.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of plants which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.DoublePlant.Builder;
                                /**
                                 * Sets the number of plants to create, cannot be negative.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of plants which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.DoublePlant.Builder;
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 */
                                // @ts-ignore
                                 supplier(override: any): org.spongepowered.api.world.gen.populator.DoublePlant.Builder;
                                /**
                                 * Builds a new instance of a {@link DoublePlant} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.DoublePlant;
                            }
                        }
                    }
                }
            }
        }
    }
}
