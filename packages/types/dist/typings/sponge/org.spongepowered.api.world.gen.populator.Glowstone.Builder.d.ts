// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Glowstone {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of clusters to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Glowstone.Builder;
                                /**
                                 * Sets the number of clusters to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.Glowstone.Builder;
                                /**
                                 * Sets the amount of glowstone to attempt to spawn per cluster, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 blocksPerCluster(attempts: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Glowstone.Builder;
                                /**
                                 * Sets the amount of glowstone to attempt to spawn per cluster, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 blocksPerCluster(attempts: number): org.spongepowered.api.world.gen.populator.Glowstone.Builder;
                                /**
                                 * Sets the height of the glowstone cluster.
                                 */
                                // @ts-ignore
                                 clusterHeight(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Glowstone.Builder;
                                /**
                                 * Sets the height of the glowstone cluster.
                                 */
                                // @ts-ignore
                                 clusterHeight(height: number): org.spongepowered.api.world.gen.populator.Glowstone.Builder;
                                /**
                                 * Sets the height that the cluster may generate at.
                                 */
                                // @ts-ignore
                                 height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Glowstone.Builder;
                                /**
                                 * Builds a new instance of a {@link Glowstone} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Glowstone;
                            }
                        }
                    }
                }
            }
        }
    }
}
