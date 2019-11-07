declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Flower extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Flower} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Flower.Builder;
                            /**
                             * Gets the number of flowers to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getFlowersPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of flowers to attempt to spawn per chunk, must be greater
                             * than zero.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of flowers which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             */
                            // @ts-ignore
                             setFlowersPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of flowers to attempt to spawn per chunk, must be greater
                             * than zero.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of flowers which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             */
                            // @ts-ignore
                             setFlowersPerChunk(count: number): void;
                            /**
                             * Gets a mutable weighted collection of plant type for this populator to
                             * spawn.
                             */
                            // @ts-ignore
                             getFlowerTypes(): org.spongepowered.api.util.weighted.WeightedTable;
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * PlantType to place.
                             */
                            // @ts-ignore
                             getSupplierOverride(): java.util.Optional;
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what PlantType to place.
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
