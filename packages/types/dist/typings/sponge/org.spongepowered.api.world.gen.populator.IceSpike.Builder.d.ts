// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace IceSpike {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of spikes to generate per chunk.
                                 */
                                // @ts-ignore
                                 spikesPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IceSpike.Builder;
                                /**
                                 * Sets the number of spikes to generate per chunk.
                                 */
                                // @ts-ignore
                                 spikesPerChunk(count: number): org.spongepowered.api.world.gen.populator.IceSpike.Builder;
                                /**
                                 * Sets the base height of the spike.
                                 */
                                // @ts-ignore
                                 height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IceSpike.Builder;
                                /**
                                 * Sets the base height of the spike.
                                 */
                                // @ts-ignore
                                 height(height: number): org.spongepowered.api.world.gen.populator.IceSpike.Builder;
                                /**
                                 * Gets the probability of the spike much larger than normal.
                                 */
                                // @ts-ignore
                                 extremeSpikeProbability(p: number): org.spongepowered.api.world.gen.populator.IceSpike.Builder;
                                /**
                                 * Sets the base height increase of the extreme spikes.
                                 */
                                // @ts-ignore
                                 extremeSpikeIncrease(increase: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IceSpike.Builder;
                                /**
                                 * Sets the base height increase of the extreme spikes.
                                 */
                                // @ts-ignore
                                 extremeSpikeIncrease(increase: number): org.spongepowered.api.world.gen.populator.IceSpike.Builder;
                                /**
                                 * Builds a new instance of a {@link IceSpike} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.IceSpike;
                            }
                        }
                    }
                }
            }
        }
    }
}
