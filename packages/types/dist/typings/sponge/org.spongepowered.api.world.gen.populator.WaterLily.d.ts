// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface WaterLily extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link WaterLily} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.WaterLily.Builder;
                            /**
                             * Gets the number of water lilies to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             getWaterLilyPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of water lilies to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setWaterLilyPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of water lilies to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setWaterLilyPerChunk(count: number): void;
                        }
                    }
                }
            }
        }
    }
}
