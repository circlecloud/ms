// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface NetherFire extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link NetherFire} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.NetherFire.Builder;
                            /**
                             * Gets the number of clusters to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             getClustersPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of clusters to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setClustersPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of clusters to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setClustersPerChunk(count: number): void;
                            /**
                             * Gets the number of fire to attempt to spawn per patch, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             getFirePerCluster(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of fire to attempt to spawn per patch, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setFirePerCluster(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of Fire to attempt to spawn per patch, must be greater
                             * than zero.
                             */
                            // @ts-ignore
                             setFirePerCluster(count: number): void;
                        }
                    }
                }
            }
        }
    }
}
