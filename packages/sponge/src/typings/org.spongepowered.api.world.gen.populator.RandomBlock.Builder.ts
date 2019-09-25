declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace RandomBlock {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the {@link BlockState} that this populator will randomly
                                 * distribute.
                                 */
                                // @ts-ignore
                                 block(block: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.RandomBlock.Builder;
                                /**
                                 * Sets the number of blocks to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.RandomBlock.Builder;
                                /**
                                 * Sets the number of blocks to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.RandomBlock.Builder;
                                /**
                                 * Sets the {@link Predicate} that this populator used to determine of a
                                 * given {@link BlockType} is valid to attempt to place a block of fire
                                 * on top of.
                                 */
                                // @ts-ignore
                                 placementTarget(target: any): org.spongepowered.api.world.gen.populator.RandomBlock.Builder;
                                /**
                                 * Sets the height range of the random block placement.
                                 */
                                // @ts-ignore
                                 height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.RandomBlock.Builder;
                                /**
                                 * Builds a new instance of a {@link RandomBlock} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.RandomBlock;
                            }
                        }
                    }
                }
            }
        }
    }
}
