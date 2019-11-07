declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Ore {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the block to place as ore.
                                 */
                                // @ts-ignore
                                 ore(block: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.Ore.Builder;
                                /**
                                 * Sets the size of deposit of ore. This is the number of blocks per
                                 * clump of ores spawned.
                                 */
                                // @ts-ignore
                                 size(size: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Ore.Builder;
                                /**
                                 * Sets the size of deposit of ore. This is the number of blocks per
                                 * clump of ores spawned.
                                 */
                                // @ts-ignore
                                 size(size: number): org.spongepowered.api.world.gen.populator.Ore.Builder;
                                /**
                                 * Sets the number of ore clumps to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Ore.Builder;
                                /**
                                 * Sets the number of ore clumps to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.Ore.Builder;
                                /**
                                 * Sets the height that the ore can generate at.
                                 */
                                // @ts-ignore
                                 height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Ore.Builder;
                                /**
                                 * Sets a predicate which checks for the placement conditions for this
                                 * ore.
                                 */
                                // @ts-ignore
                                 placementCondition(condition: java.util.function$.Predicate): org.spongepowered.api.world.gen.populator.Ore.Builder;
                                /**
                                 * Builds a new instance of a {@link Ore} populator with the settings
                                 * set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Ore;
                            }
                        }
                    }
                }
            }
        }
    }
}
