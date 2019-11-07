declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface BiomeVolume {
                        /**
                         * Gets the biome location with the lowest x and y that is still a valid
                         * position for {@link #getBiome(Vector3i)}.
                         */
                        // @ts-ignore
                         getBiomeMin(): any /*Vector3i*/;
                        /**
                         * Gets the biome location with the highest x and y that is still a valid
                         * position for {@link #getBiome(Vector3i)}.
                         */
                        // @ts-ignore
                         getBiomeMax(): any /*Vector3i*/;
                        /**
                         * Gets the size of the volume. Defined as <code>{@link #getBiomeMax()} -
                         * {@link #getBiomeMin()} + (1, 1)</code>.
                         */
                        // @ts-ignore
                         getBiomeSize(): any /*Vector3i*/;
                        /**
                         * Returns true if the biome volume contains a biome at the specified
                         * position. This is defined as <code>{{@link #getBiomeMin()} <= position
                         * <= {@link #getBiomeMax()}</code>
                         */
                        // @ts-ignore
                         containsBiome(position: any /*Vector3i*/): boolean;
                        /**
                         * Returns true if the biome volume contains a biome at the specified
                         * position. This is defined as <code>{{@link #getBiomeMin()} <= (x, y, z)
                         * <= {@link #getBiomeMax()}</code>
                         */
                        // @ts-ignore
                         containsBiome(x: number, y: number, z: number): boolean;
                        /**
                         * Gets an object representing the biome at the given position.
                         */
                        // @ts-ignore
                         getBiome(position: any /*Vector3i*/): org.spongepowered.api.world.biome.BiomeType;
                        /**
                         * Gets the {@link BiomeType} at the given location.
                         */
                        // @ts-ignore
                         getBiome(x: number, y: number, z: number): org.spongepowered.api.world.biome.BiomeType;
                        /**
                         * Returns a new volume that is the same or smaller than the current volume.
                         * This does not copy the biomes, it only provides a new view of the
                         * storage.
                         */
                        // @ts-ignore
                         getBiomeView(newMin: any /*Vector3i*/, newMax: any /*Vector3i*/): org.spongepowered.api.world.extent.BiomeVolume;
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getBiomeView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.BiomeVolume;
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BiomeVolume#getBiomeMin()} returns {@link Vector2i#ZERO}. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getRelativeBiomeView(): org.spongepowered.api.world.extent.BiomeVolume;
                        /**
                         * Returns a new volume that cannot be modified through this view. Unlike
                         * immutable storage, it can be changed by holders of mutable views. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getUnmodifiableBiomeView(): org.spongepowered.api.world.extent.UnmodifiableBiomeVolume;
                        /**
                         * Returns a mutable copy of the biomes stored in this volume. This uses the
                         * default storage type of {@link StorageType#STANDARD}.
                         */
                        // @ts-ignore
                         getBiomeCopy(): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a mutable copy of the biomes stored in this volume. This uses the
                         * provided storage type.
                         */
                        // @ts-ignore
                         getBiomeCopy(type: org.spongepowered.api.world.extent.StorageType): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns an immutable copy of the biomes stored in this volume. This uses
                         * some internal storage solution that is thread-safe by nature.
                         */
                        // @ts-ignore
                         getImmutableBiomeCopy(): org.spongepowered.api.world.extent.ImmutableBiomeVolume;
                        /**
                         * Gets a new biome worker for this biome volume.
                         */
                        // @ts-ignore
                         getBiomeWorker(): org.spongepowered.api.world.extent.worker.BiomeVolumeWorker;
                    }
                }
            }
        }
    }
}
