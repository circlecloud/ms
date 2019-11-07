declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace SeaFloor {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the {@link BlockState} to place down.
                                 */
                                // @ts-ignore
                                 block(block: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                                /**
                                 * Sets the number of discs to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                                /**
                                 * Sets the number of discs to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                                /**
                                 * Sets the radius of the discs being spawned.
                                 */
                                // @ts-ignore
                                 radius(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                                /**
                                 * Sets the radius of the discs being spawned.
                                 */
                                // @ts-ignore
                                 radius(radius: number): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                                /**
                                 * Sets the depth of the sea floor cover to generate.
                                 */
                                // @ts-ignore
                                 depth(depth: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                                /**
                                 * Sets the depth of the sea floor cover to generate.
                                 */
                                // @ts-ignore
                                 depth(depth: number): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                                /**
                                 * Sets the predicate which will be applied to all {@link BlockState}s
                                 * that this populator attempts to replace in order to determine if they
                                 * are valid.
                                 */
                                // @ts-ignore
                                 replace(check: java.util.function$.Predicate): org.spongepowered.api.world.gen.populator.SeaFloor.Builder;
                                /**
                                 * Builds a new instance of a {@link SeaFloor} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.SeaFloor;
                            }
                        }
                    }
                }
            }
        }
    }
}
