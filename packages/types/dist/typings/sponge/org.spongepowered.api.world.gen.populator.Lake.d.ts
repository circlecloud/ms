// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Lake extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Lake} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Lake.Builder;
                            /**
                             * Gets the {@link BlockState} of the liquid to fill the lake with.
                             */
                            // @ts-ignore
                             getLiquidType(): org.spongepowered.api.block.BlockState;
                            /**
                             * Sets the {@link BlockState} of the liquid to fill the lake with.
                             */
                            // @ts-ignore
                             setLiquidType(liquid: org.spongepowered.api.block.BlockState): void;
                            /**
                             * Gets the probability of a lake spawning in a chunk.
                             */
                            // @ts-ignore
                             getLakeProbability(): number;
                            /**
                             * Sets the probability of a lake spawning in a chunk.
                             */
                            // @ts-ignore
                             setLakeProbability(p: number): void;
                            /**
                             * Gets the height that this lake will be spawned at.
                             */
                            // @ts-ignore
                             getHeight(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height that this lake will be spawned at.
                             */
                            // @ts-ignore
                             setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                        }
                    }
                }
            }
        }
    }
}
