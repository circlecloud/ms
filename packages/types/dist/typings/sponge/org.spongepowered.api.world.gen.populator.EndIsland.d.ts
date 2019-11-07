// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface EndIsland extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link EndIsland} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.EndIsland.Builder;
                            /**
                             * Gets the initial starting radius range of the island.
                             */
                            // @ts-ignore
                             getStartingRadius(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the initial starting radius range of the island.
                             */
                            // @ts-ignore
                             setStartingRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the initial starting radius of the island.
                             */
                            // @ts-ignore
                             setStartingRadius(radius: number): void;
                            /**
                             * Gets the amount that the radius decreases for every downward step.
                             */
                            // @ts-ignore
                             getRadiusDecrement(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the amount that the radius decreases for every downward step.
                             */
                            // @ts-ignore
                             setRadiusDecrement(decrement: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the amount that the radius decreases for every downward step.
                             */
                            // @ts-ignore
                             setRadiusDecrement(decrement: number): void;
                            /**
                             * Gets the block state that the island will be formed from.
                             */
                            // @ts-ignore
                             getIslandBlock(): org.spongepowered.api.block.BlockState;
                            /**
                             * Sets the block state that the island will be formed from.
                             */
                            // @ts-ignore
                             setIslandBlock(state: org.spongepowered.api.block.BlockState): void;
                            /**
                             * Gets the radius around the center (0, 0) of the world that this populator
                             * will not apply to.
                             * <p>This is used to prevent the islands from generating around the ender
                             * dragon fight area.</p>
                             */
                            // @ts-ignore
                             getExclusionRadius(): number;
                            /**
                             * Sets the radius around the center (0, 0) of the world that this populator
                             * will not apply to.
                             * <p>This must be a positive value or zero.</p>
                             */
                            // @ts-ignore
                             setExclusionRadius(radius: number): void;
                        }
                    }
                }
            }
        }
    }
}
