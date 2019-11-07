// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Forest {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of trees to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Forest.Builder;
                                /**
                                 * Sets the number of trees to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.Forest.Builder;
                                /**
                                 * Sets the {@link BiomeTreeType}s to spawn.
                                 */
                                // @ts-ignore
                                 types(types: org.spongepowered.api.util.weighted.WeightedTable): org.spongepowered.api.world.gen.populator.Forest.Builder;
                                /**
                                 * Sets the {@link BiomeTreeType} to the list of weighted types.
                                 */
                                // @ts-ignore
                                 type(type: org.spongepowered.api.world.gen.PopulatorObject, weight: number): org.spongepowered.api.world.gen.populator.Forest.Builder;
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 */
                                // @ts-ignore
                                 supplier(override: java.util.function$.Function): org.spongepowered.api.world.gen.populator.Forest.Builder;
                                /**
                                 * Builds a new instance of a {@link Forest} populator with the settings
                                 * set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Forest;
                            }
                        }
                    }
                }
            }
        }
    }
}
