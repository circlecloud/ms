declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class BlockStateMeta {
                    /**
                     * Returns whether the item has a block state currently
                     * attached to it.
                     */
                    public hasBlockState(): boolean;
                    /**
                     * Returns the currently attached block state for this
                     * item or creates a new one if one doesn't exist.
                     * The state is a copy, it must be set back (or to another
                     * item) with {@link #setBlockState(org.bukkit.block.BlockState)}
                     */
                    public getBlockState(): org.bukkit.block.BlockState;
                    /**
                     * Attaches a copy of the passed block state to the item.
                     */
                    public setBlockState(blockState: org.bukkit.block.BlockState): void;
                }
            }
        }
    }
}
