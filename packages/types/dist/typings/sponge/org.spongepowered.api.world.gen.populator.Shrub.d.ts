// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Shrub extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Shrub} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Shrub.Builder;
                            /**
                             * Gets a weighted collection of {@link ShrubType}s to place.
                             */
                            // @ts-ignore
                             getTypes(): org.spongepowered.api.util.weighted.WeightedTable;
                            /**
                             * Gets the number of shrubs to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getShrubsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of shrubs to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setShrubsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of shrubs to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setShrubsPerChunk(count: number): void;
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * ShrubType to place.
                             */
                            // @ts-ignore
                             getSupplierOverride(): java.util.Optional;
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what ShrubType to place.
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
