// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Forest extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Forest} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Forest.Builder;
                            /**
                             * Gets the number of trees to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getTreesPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of trees to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setTreesPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of trees to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setTreesPerChunk(count: number): void;
                            /**
                             * Gets the a mutable weighted collection of {@link PopulatorObject}s to
                             * spawn.
                             */
                            // @ts-ignore
                             getTypes(): org.spongepowered.api.util.weighted.WeightedTable;
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * PopulatorObject to place.
                             */
                            // @ts-ignore
                             getSupplierOverride(): java.util.Optional;
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what PopulatorObject to
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
