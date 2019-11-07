// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Ore extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Ore} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Ore.Builder;
                            /**
                             * Gets the block to place as ore.
                             */
                            // @ts-ignore
                             getOreBlock(): org.spongepowered.api.block.BlockState;
                            /**
                             * Sets the block to place as ore.
                             */
                            // @ts-ignore
                             setOreBlock(block: org.spongepowered.api.block.BlockState): void;
                            /**
                             * Gets the size of deposit of ore. This is the number of blocks per clump
                             * of ores spawned.
                             */
                            // @ts-ignore
                             getDepositSize(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the size of deposit of ore. This is the number of blocks per clump
                             * of ores spawned.
                             */
                            // @ts-ignore
                             setDepositSize(size: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the size of deposit of ore. This is the number of blocks per clump
                             * of ores spawned.
                             */
                            // @ts-ignore
                             setDepositSize(size: number): void;
                            /**
                             * Gets the number of ore clumps to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             getDepositsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of ore clumps to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setDepositsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of ore clumps to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setDepositsPerChunk(count: number): void;
                            /**
                             * Gets the height that the ore will generate at.
                             */
                            // @ts-ignore
                             getHeight(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height that the ore will generate at.
                             */
                            // @ts-ignore
                             setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Gets a predicate which checks for the placement conditions for this ore.
                             */
                            // @ts-ignore
                             getPlacementCondition(): java.util.function$.Predicate;
                            /**
                             * Sets a predicate which checks for the placement conditions for this ore.
                             */
                            // @ts-ignore
                             setPlacementCondition(condition: java.util.function$.Predicate): void;
                        }
                    }
                }
            }
        }
    }
}
