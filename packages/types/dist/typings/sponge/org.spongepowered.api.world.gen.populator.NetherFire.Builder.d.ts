// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace NetherFire {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of clusters to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.NetherFire.Builder;
                                /**
                                 * Sets the number of clusters to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perChunk(count: number): org.spongepowered.api.world.gen.populator.NetherFire.Builder;
                                /**
                                 * Sets the number of fire to attempt to spawn per cluster, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perCluster(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.NetherFire.Builder;
                                /**
                                 * Sets the number of fire to attempt to spawn per cluster, must be
                                 * greater than zero.
                                 */
                                // @ts-ignore
                                 perCluster(count: number): org.spongepowered.api.world.gen.populator.NetherFire.Builder;
                                /**
                                 * Builds a new instance of a {@link NetherFire} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.NetherFire;
                            }
                        }
                    }
                }
            }
        }
    }
}
