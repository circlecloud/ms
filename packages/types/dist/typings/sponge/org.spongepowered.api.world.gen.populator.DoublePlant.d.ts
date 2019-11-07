declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface DoublePlant extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link DoublePlant} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.DoublePlant.Builder;
                            /**
                             * Gets a mutable weighted collection of possible plants which may be
                             * selected to be spawned in by this populator.
                             */
                            // @ts-ignore
                             getPossibleTypes(): org.spongepowered.api.util.weighted.WeightedTable;
                            /**
                             * Gets the number of plants to create per chunk.
                             */
                            // @ts-ignore
                             getPlantsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of plants to create per chunk, cannot be negative.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of plants which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             */
                            // @ts-ignore
                             setPlantsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of plants to create per chunk, cannot be negative.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of plants which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             */
                            // @ts-ignore
                             setPlantsPerChunk(count: number): void;
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * DoublePlantType to place.
                             */
                            // @ts-ignore
                             getSupplierOverride(): java.util.Optional;
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what DoublePlantType to
                             * place.
                             */
                            // @ts-ignore
                             setSupplierOverride(override: java.util.function$.Function): void;
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
