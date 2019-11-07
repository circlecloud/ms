// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface BlockVolume {
                        /**
                         * Gets the block location with the lowest x, y and z that is still a valid
                         * position for {@link #getBlock(Vector3i)}.
                         */
                        // @ts-ignore
                         getBlockMin(): any /*Vector3i*/;
                        /**
                         * Gets the block location with the highest x, y and z that is still a valid
                         * position for {@link #getBlock(Vector3i)}.
                         */
                        // @ts-ignore
                         getBlockMax(): any /*Vector3i*/;
                        /**
                         * Gets the size of the whole volume. Defined as <code>
                         * {@link #getBlockMax()} - {@link #getBlockMin()} + (1, 1, 1) </code>.
                         */
                        // @ts-ignore
                         getBlockSize(): any /*Vector3i*/;
                        /**
                         * Returns true if the block volume contains a block at the specified
                         * position. This is defined as <code>{{@link #getBlockMin()} <= position <=
                         * {@link #getBlockMax()}</code>
                         */
                        // @ts-ignore
                         containsBlock(position: any /*Vector3i*/): boolean;
                        /**
                         * Returns true if the block volume contains a block at the specified
                         * position. This is defined as <code>{{@link #getBlockMin()} <= (x, y, z)
                         * <= {@link #getBlockMax()}</code>
                         */
                        // @ts-ignore
                         containsBlock(x: number, y: number, z: number): boolean;
                        /**
                         * Gets a representation of the block at the given position.
                         */
                        // @ts-ignore
                         getBlock(position: any /*Vector3i*/): org.spongepowered.api.block.BlockState;
                        /**
                         * Gets a representation of the block at the given position.
                         */
                        // @ts-ignore
                         getBlock(x: number, y: number, z: number): org.spongepowered.api.block.BlockState;
                        /**
                         * Gets the base type of block.
                         * <p>The type does not include block data such as the contents of
                         * inventories.</p>
                         */
                        // @ts-ignore
                         getBlockType(position: any /*Vector3i*/): org.spongepowered.api.block.BlockType;
                        /**
                         * Gets the base type of block.
                         * <p>The type does not include block data such as the contents of
                         * inventories.</p>
                         */
                        // @ts-ignore
                         getBlockType(x: number, y: number, z: number): org.spongepowered.api.block.BlockType;
                        /**
                         * Returns a new volume that is the same or smaller than the current volume.
                         * This does not copy the blocks, it only provides a new view of the
                         * storage.
                         */
                        // @ts-ignore
                         getBlockView(newMin: any /*Vector3i*/, newMax: any /*Vector3i*/): org.spongepowered.api.world.extent.BlockVolume;
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getBlockView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.BlockVolume;
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BlockVolume#getBlockMin()} returns {@link Vector3i#ZERO}. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getRelativeBlockView(): org.spongepowered.api.world.extent.BlockVolume;
                        /**
                         * Returns a new volume that cannot be modified through this view. Unlike
                         * immutable storage, it can be changed by holders of mutable views. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         */
                        // @ts-ignore
                         getUnmodifiableBlockView(): org.spongepowered.api.world.extent.UnmodifiableBlockVolume;
                        /**
                         * Returns a mutable copy of the blocks stored in this volume. This uses the
                         * default storage type of {@link StorageType#STANDARD}.
                         */
                        // @ts-ignore
                         getBlockCopy(): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a mutable copy of the blocks stored in this volume. This uses the
                         * provided storage type.
                         */
                        // @ts-ignore
                         getBlockCopy(type: org.spongepowered.api.world.extent.StorageType): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns an immutable copy of the blocks stored in this volume. This uses
                         * some internal storage solution that is thread-safe by nature.
                         */
                        // @ts-ignore
                         getImmutableBlockCopy(): org.spongepowered.api.world.extent.ImmutableBlockVolume;
                        /**
                         * Gets a new block worker for this block volume.
                         */
                        // @ts-ignore
                         getBlockWorker(): org.spongepowered.api.world.extent.worker.BlockVolumeWorker;
                    }
                }
            }
        }
    }
}
