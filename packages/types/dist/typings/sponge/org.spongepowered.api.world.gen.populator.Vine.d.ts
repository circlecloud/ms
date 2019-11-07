// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Vine extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Vine} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Vine.Builder;
                            /**
                             * Gets the number of vines to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getVinesPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of vines to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setVinesPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of vines to attempt to spawn per chunk, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setVinesPerChunk(count: number): void;
                        }
                    }
                }
            }
        }
    }
}
