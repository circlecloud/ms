// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface IceSpike extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link IceSpike} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.IceSpike.Builder;
                            /**
                             * Gets the number of spikes to generate per chunk.
                             */
                            // @ts-ignore
                             getSpikesPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of spikes to attempt to generate per chunk.
                             */
                            // @ts-ignore
                             setSpikesPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of spikes to attempt to generate per chunk.
                             */
                            // @ts-ignore
                             setSpikesPerChunk(count: number): void;
                            /**
                             * Gets the base height of the spike.
                             */
                            // @ts-ignore
                             getHeight(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the base height of the spike.
                             */
                            // @ts-ignore
                             setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the base height of the spike.
                             */
                            // @ts-ignore
                             setHeight(height: number): void;
                            /**
                             * Gets the probability of the spike much larger than normal.
                             */
                            // @ts-ignore
                             getExtremeSpikeProbability(): number;
                            /**
                             * Gets the probability of the spike much larger than normal.
                             */
                            // @ts-ignore
                             setExtremeSpikeProbability(p: number): void;
                            /**
                             * Gets the height increase of the extreme spikes.
                             */
                            // @ts-ignore
                             getExtremeSpikeIncrease(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height increase of the extreme spikes.
                             */
                            // @ts-ignore
                             setExtremeSpikeIncrease(increase: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the height increase of the extreme spikes.
                             */
                            // @ts-ignore
                             setExtremeSpikeIncrease(increase: number): void;
                        }
                    }
                }
            }
        }
    }
}
