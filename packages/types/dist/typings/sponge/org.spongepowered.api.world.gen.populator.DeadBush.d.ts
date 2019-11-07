// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface DeadBush extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link DeadBush} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.DeadBush.Builder;
                            /**
                             * Gets the number of bushes to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getShrubsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of bushes to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setShrubsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of bushes to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setShrubsPerChunk(count: number): void;
                        }
                    }
                }
            }
        }
    }
}
