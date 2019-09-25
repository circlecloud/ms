declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace BigMushroom {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the weighted {@link PopulatorObject}s to select from during
                                 * generation.
                                 */
                                // @ts-ignore
                                 types(types: org.spongepowered.api.util.weighted.WeightedTable): org.spongepowered.api.world.gen.populator.BigMushroom.Builder;
                                /**
                                 * Adds the weighted {@link PopulatorObject} to the list of available
                                 * types.
                                 */
                                // @ts-ignore
                                 type(type: org.spongepowered.api.world.gen.PopulatorObject, weight: number): org.spongepowered.api.world.gen.populator.BigMushroom.Builder;
                                /**
                                 * Sets the number of mushrooms which will be attempted to be spawned.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of mushrooms which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 */
                                // @ts-ignore
                                 mushroomsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.BigMushroom.Builder;
                                /**
                                 * Sets the number of mushrooms which will be attempted to be spawned.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of mushrooms which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 */
                                // @ts-ignore
                                 mushroomsPerChunk(count: number): org.spongepowered.api.world.gen.populator.BigMushroom.Builder;
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 */
                                // @ts-ignore
                                 supplier(override: any): org.spongepowered.api.world.gen.populator.BigMushroom.Builder;
                                /**
                                 * Builds a new instance of a {@link BigMushroom} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.BigMushroom;
                            }
                        }
                    }
                }
            }
        }
    }
}
