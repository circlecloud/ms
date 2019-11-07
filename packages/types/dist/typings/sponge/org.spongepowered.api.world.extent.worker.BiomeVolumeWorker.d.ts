declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        // @ts-ignore
                        interface BiomeVolumeWorker {
                            /**
                             * Returns the volume this worker operates on.
                             */
                            // @ts-ignore
                             getVolume(): org.spongepowered.api.world.extent.BiomeVolume;
                            /**
                             * Applies a mapping operation to all the biomes in the volume and saves the
                             * results to the destination volume.
                             */
                            // @ts-ignore
                             map(mapper: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeMapper, destination: org.spongepowered.api.world.extent.MutableBiomeVolume): void;
                            /**
                             * Applies a merging operation to the biomes of the operating volume and an
                             * external one. Saves the results to the destination volume.
                             */
                            // @ts-ignore
                             merge(second: org.spongepowered.api.world.extent.BiomeVolume, merger: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeMerger, destination: org.spongepowered.api.world.extent.MutableBiomeVolume): void;
                            /**
                             * Iterates this biome volume, calling the visitor on each coordinate pair.
                             */
                            // @ts-ignore
                             iterate(visitor: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeVisitor): void;
                            /**
                             * Applies a reduction operation to the volume. The identity should be the
                             * result of no reduction being applied. For example, the additive identity
                             * is 0, the multiplicative one is 1 and the set union one is the empty
                             * set.
                             */
                            // @ts-ignore
                             reduce(reducer: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeReducer, merge: java.util.function$.BiFunction, identity: java.lang.Object): java.lang.Object;
                        }
                    }
                }
            }
        }
    }
}
