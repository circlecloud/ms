declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface ImmutableBlockVolume extends org.spongepowered.api.world.extent.UnmodifiableBlockVolume {
                        /**
                         * Returns a new volume that is the same or smaller than the current volume.
                         * This does not copy the blocks, it only provides a new view of the
                         * storage.
                         */
                        // @ts-ignore
                         getBlockView(newMin: any /*Vector3i*/, newMax: any /*Vector3i*/): org.spongepowered.api.world.extent.ImmutableBlockVolume;
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getBlockView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.ImmutableBlockVolume;
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BlockVolume#getBlockMin()} returns {@link Vector3i#ZERO}. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getRelativeBlockView(): org.spongepowered.api.world.extent.ImmutableBlockVolume;
                        // @ts-ignore
                         getImmutableBlockCopy(): org.spongepowered.api.world.extent.ImmutableBlockVolume;
                        // @ts-ignore
                         getBlockWorker(): org.spongepowered.api.world.extent.worker.BlockVolumeWorker;
                    }
                }
            }
        }
    }
}
