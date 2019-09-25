declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                // @ts-ignore
                interface BlockSnapshot extends org.spongepowered.api.data.LocatableSnapshot {
                    // @ts-ignore
                     NONE: org.spongepowered.api.block.BlockSnapshot;
                    /**
                     * Creates a {@link Builder} to get {@link BlockSnapshot}s.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.block.BlockSnapshot.Builder;
                    /**
                     * Gets the {@link BlockState}.
                     */
                    // @ts-ignore
                     getState(): org.spongepowered.api.block.BlockState;
                    /**
                     * Gets the extended {@link BlockState}. This applies extended properties
                     * that are usually located around the associated {@link BlockType}. Check
                     * {@link BlockState#withExtendedProperties(Location)} for more info.
                     */
                    // @ts-ignore
                     getExtendedState(): org.spongepowered.api.block.BlockState;
                    /**
                     * Creates a copy of the {@link BlockSnapshot} with the provided
                     * {@link BlockState}. Any additional data associated with a
                     * {@link TileEntity} or custom data may be lost.
                     * <p>Note: all custom data, including implementation detailed
                     * data relating to any and all {@link TileEntity} instances that
                     * was included in this snapshot will NOT copy over to the new
                     * snapshot.</p>
                     */
                    // @ts-ignore
                     withState(blockState: org.spongepowered.api.block.BlockState): org.spongepowered.api.block.BlockSnapshot;
                    /**
                     * Creates a copy of the {@link BlockSnapshot} with the provided
                     * {@link DataContainer}. Note that this is equal to calling
                     * {@link Builder#build(DataView)}. All data is
                     * validated and
                     */
                    // @ts-ignore
                     withContainer(container: org.spongepowered.api.data.DataContainer): org.spongepowered.api.block.BlockSnapshot;
                    /**
                     * Restores the {@link BlockSnapshot} to the {@link Location} stored within
                     * the snapshot. If the {@link Location} is not available, the snapshot will
                     * not be restored.
                     * <p>If forced, the state of the block will change its {@link BlockType}
                     * to match that of the snapshot then set the state. However, if force is
                     * set to false and the {@link BlockType}s does not match, false will be
                     * returned.
                     * If notifyNeighbors is true, neighboring blocks will be notified of
                     * changes at the restored block location triggering physic updates.</p>
                     */
                    // @ts-ignore
                     restore(force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                    /**
                     * Gets the {@link UUID}, if available, of the user who created this
                     * {@link BlockSnapshot}.
                     */
                    // @ts-ignore
                     getCreator(): any;
                    /**
                     * Gets the {@link UUID}, if available, of the user who last notified this
                     * {@link BlockSnapshot}.
                     */
                    // @ts-ignore
                     getNotifier(): any;
                    /**
                     * Creates a new {@link TileEntityArchetype} for use with {@link Schematic}s
                     * and placing the archetype in multiple locations.
                     * <p>If this blocksnapshot does not contain a tile entity then this will
                     * return {@link Optional#empty()}.</p>
                     */
                    // @ts-ignore
                     createArchetype(): any;
                }
            }
        }
    }
}
