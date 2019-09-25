declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface BigMushroom extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link BigMushroom} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.BigMushroom.Builder;
                            /**
                             * Gets a mutable {@link WeightedTable} of possible mushroom types to spawn.
                             */
                            // @ts-ignore
                             getTypes(): org.spongepowered.api.util.weighted.WeightedTable;
                            /**
                             * Gets a representation of the amount of mushrooms which will be attempted
                             * to be spawned per chunk.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of mushrooms which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             */
                            // @ts-ignore
                             getMushroomsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the representation of the amount of mushrooms which will be
                             * attempted to be spawned per chunk.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of mushrooms which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             */
                            // @ts-ignore
                             setMushroomsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the amount of mushrooms which will be attempted to be spawned per
                             * chunk.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of mushrooms which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             */
                            // @ts-ignore
                             setMushroomsPerChunk(count: number): void;
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * PopulatorObject to place.
                             */
                            // @ts-ignore
                             getSupplierOverride(): any;
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what PopulatorObject to
                             * place.
                             */
                            // @ts-ignore
                             setSupplierOverride(override: any): void;
                            /**
                             * Clears the supplier override to force the weighted table to be used
                             * instead.
                             */
                            // @ts-ignore
                             clearSupplierOverride(): void;
                        }
                    }
                }
            }
        }
    }
}
