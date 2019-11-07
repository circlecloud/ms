// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Reed extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Reed} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Reed.Builder;
                            /**
                             * Gets the number of reeds to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getReedsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of reeds to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setReedsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of reeds to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setReedsPerChunk(count: number): void;
                            /**
                             * Gets the height of the reeds to generate.
                             */
                            // @ts-ignore
                             getReedHeight(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height of the reeds to generate.
                             */
                            // @ts-ignore
                             setReedHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                        }
                    }
                }
            }
        }
    }
}
