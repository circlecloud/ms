// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface RandomBlock extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link RandomBlock} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.RandomBlock.Builder;
                            /**
                             * Gets the {@link BlockState} that this populator will randomly distribute.
                             */
                            // @ts-ignore
                             getBlock(): org.spongepowered.api.block.BlockState;
                            /**
                             * Sets the {@link BlockState} that this populator will randomly distribute.
                             */
                            // @ts-ignore
                             setBlock(block: org.spongepowered.api.block.BlockState): void;
                            /**
                             * Gets the number of blocks to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getAttemptsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of blocks to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setAttemptsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of blocks to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setAttemptsPerChunk(count: number): void;
                            /**
                             * Gets the height that the block will be randomly placed within.
                             */
                            // @ts-ignore
                             getHeightRange(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height that the blocks will be randomly placed within.
                             */
                            // @ts-ignore
                             setHeightRange(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Gets the {@link Predicate} that this populator used to determine of a
                             * given {@link Location} is valid to attempt to place a block at.
                             */
                            // @ts-ignore
                             getPlacementTarget(): java.util.function$.Predicate;
                            /**
                             * Sets the {@link Predicate} that this populator used to determine of a
                             * given {@link Location} is valid to attempt to place a block at.
                             */
                            // @ts-ignore
                             getPlacementTarget(target: java.util.function$.Predicate): void;
                        }
                    }
                }
            }
        }
    }
}
