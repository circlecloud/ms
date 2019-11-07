declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface MutableBlockVolume extends org.spongepowered.api.world.extent.BlockVolume {
                        /**
                         * Sets the block at the given position in the world.
                         */
                        // @ts-ignore
                         setBlock(position: any /*Vector3i*/, block: org.spongepowered.api.block.BlockState): boolean;
                        /**
                         * Sets the block at the given position in the world.
                         */
                        // @ts-ignore
                         setBlock(x: number, y: number, z: number, block: org.spongepowered.api.block.BlockState): boolean;
                        /**
                         * Replace the block at this position by a new type.
                         * <p>This will remove any extended block data at the given position.</p>
                         */
                        // @ts-ignore
                         setBlockType(position: any /*Vector3i*/, type: org.spongepowered.api.block.BlockType): boolean;
                        /**
                         * Replace the block at this position by a new type.
                         * <p>This will remove any extended block data at the given position.</p>
                         */
                        // @ts-ignore
                         setBlockType(x: number, y: number, z: number, type: org.spongepowered.api.block.BlockType): boolean;
                        /**
                         * Returns a new volume that is the same or smaller than the current volume.
                         * This does not copy the blocks, it only provides a new view of the
                         * storage.
                         */
                        // @ts-ignore
                         getBlockView(newMin: any /*Vector3i*/, newMax: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getBlockView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BlockVolume#getBlockMin()} returns {@link Vector3i#ZERO}. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getRelativeBlockView(): org.spongepowered.api.world.extent.MutableBlockVolume;
                        // @ts-ignore
                         getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker;
                    }
                }
            }
        }
    }
}
