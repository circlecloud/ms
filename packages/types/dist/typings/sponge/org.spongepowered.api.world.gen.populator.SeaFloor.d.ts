// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface SeaFloor extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link SeaFloor} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                            /**
                             * Gets the {@link BlockState} to place down.
                             */
                            // @ts-ignore
                             getBlock(): org.spongepowered.api.block.BlockState;
                            /**
                             * Sets the {@link BlockState} to place down.
                             */
                            // @ts-ignore
                             setBlock(block: org.spongepowered.api.block.BlockState): void;
                            /**
                             * Gets the number of discs to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getDiscsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of discs to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setDiscsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of discs to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setDiscsPerChunk(count: number): void;
                            /**
                             * Gets the radius of the discs being spawned.
                             */
                            // @ts-ignore
                             getRadius(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the radius of the discs being spawned.
                             */
                            // @ts-ignore
                             setRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the radius of the discs being spawned.
                             */
                            // @ts-ignore
                             setRadius(radius: number): void;
                            /**
                             * Gets the depth of the sea floor cover to generate.
                             */
                            // @ts-ignore
                             getDepth(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the depth of the sea floor cover to generate.
                             */
                            // @ts-ignore
                             setDepth(depth: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the depth of the sea floor cover to generate.
                             */
                            // @ts-ignore
                             setDepth(depth: number): void;
                            /**
                             * Gets the predicate which is applied to determine what {@link BlockState}s
                             * this populator may replace.
                             */
                            // @ts-ignore
                             getValidBlocksToReplace(): java.util.function$.Predicate;
                            /**
                             * Sets the predicate which will be applied to all {@link BlockState}s that
                             * this populator attempts to replace in order to determine if they are
                             * valid.
                             */
                            // @ts-ignore
                             setValidBlocksToReplace(check: java.util.function$.Predicate): void;
                        }
                    }
                }
            }
        }
    }
}
