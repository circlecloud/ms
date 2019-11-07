// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Glowstone extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Glowstone} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Glowstone.Builder;
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
                             * Gets the amount of glowstone to attempt to spawn per cluster, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             getAttemptsPerCluster(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the amount of glowstone to attempt to spawn per cluster, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setAttemptsPerCluster(attempts: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the amount of glowstone to attempt to spawn per cluster, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setAttemptsPerCluster(attempts: number): void;
                            /**
                             * Gets the height of the glowstone cluster.
                             */
                            // @ts-ignore
                             getClusterHeight(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height of the glowstone cluster.
                             */
                            // @ts-ignore
                             setClusterHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the height of the glowstone cluster.
                             */
                            // @ts-ignore
                             setClusterHeight(height: number): void;
                            /**
                             * Gets the height that the cluster may generate at.
                             */
                            // @ts-ignore
                             getHeight(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the height that the cluster may generate at.
                             */
                            // @ts-ignore
                             setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void;
                        }
                    }
                }
            }
        }
    }
}
