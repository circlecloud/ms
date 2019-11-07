// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface MutableBiomeVolume extends org.spongepowered.api.world.extent.BiomeVolume {
                        /**
                         * Sets the biome at the given position in the world.
                         */
                        // @ts-ignore
                         setBiome(position: any /*Vector3i*/, biome: org.spongepowered.api.world.biome.BiomeType): void;
                        /**
                         * Sets the biome at the given position in the world.
                         */
                        // @ts-ignore
                         setBiome(x: number, y: number, z: number, biome: org.spongepowered.api.world.biome.BiomeType): void;
                        /**
                         * Returns a new volume that is the same or smaller than the current volume.
                         * This does not copy the biomes, it only provides a new view of the
                         * storage.
                         */
                        // @ts-ignore
                         getBiomeView(newMin: any /*Vector3i*/, newMax: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getBiomeView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BiomeVolume#getBiomeMin()} returns {@link Vector2i#ZERO}. This does
                         * not copy the biomes, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getRelativeBiomeView(): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        // @ts-ignore
                         getBiomeWorker(): org.spongepowered.api.world.extent.worker.MutableBiomeVolumeWorker;
                    }
                }
            }
        }
    }
}
