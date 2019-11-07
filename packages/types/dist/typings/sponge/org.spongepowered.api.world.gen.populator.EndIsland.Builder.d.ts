// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace EndIsland {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the initial starting radius range of the island.
                                 */
                                // @ts-ignore
                                 startingRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.EndIsland.Builder;
                                /**
                                 * Sets the initial starting radius of the island.
                                 */
                                // @ts-ignore
                                 startingRadius(radius: number): org.spongepowered.api.world.gen.populator.EndIsland.Builder;
                                /**
                                 * Sets the amount that the radius decreases for every downward step.
                                 */
                                // @ts-ignore
                                 radiusDecrement(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.EndIsland.Builder;
                                /**
                                 * Sets the amount that the radius decreases for every downward step.
                                 */
                                // @ts-ignore
                                 radiusDecrement(radius: number): org.spongepowered.api.world.gen.populator.EndIsland.Builder;
                                /**
                                 * Sets the block state that the island will be formed from.
                                 */
                                // @ts-ignore
                                 islandBlock(state: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.EndIsland.Builder;
                                /**
                                 * Sets the radius around the center (0, 0) of the world that this
                                 * populator will not apply to.
                                 * <p>This must be a positive value or zero.</p>
                                 */
                                // @ts-ignore
                                 exclusionRadius(radius: number): org.spongepowered.api.world.gen.populator.EndIsland.Builder;
                                /**
                                 * Builds a new instance of a {@link EndIsland} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.EndIsland;
                            }
                        }
                    }
                }
            }
        }
    }
}
