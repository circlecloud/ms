declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface UnmodifiableBiomeVolume extends org.spongepowered.api.world.extent.BiomeVolume {
                        /**
                         * Returns a new volume that is the same or smaller than the current volume.
                         * This does not copy the biomes, it only provides a new view of the
                         * storage.
                         */
                        // @ts-ignore
                         getBiomeView(newMin: any /*Vector3i*/, newMax: any /*Vector3i*/): org.spongepowered.api.world.extent.UnmodifiableBiomeVolume;
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getBiomeView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.UnmodifiableBiomeVolume;
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BiomeVolume#getBiomeMin()} returns {@link Vector2i#ZERO}. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getRelativeBiomeView(): org.spongepowered.api.world.extent.UnmodifiableBiomeVolume;
                        // @ts-ignore
                         getUnmodifiableBiomeView(): org.spongepowered.api.world.extent.UnmodifiableBiomeVolume;
                        // @ts-ignore
                         getBiomeWorker(): org.spongepowered.api.world.extent.worker.BiomeVolumeWorker;
                    }
                }
            }
        }
    }
}
