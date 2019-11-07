declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface BlockDataMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Returns whether the item has block data currently attached to it.
                     */
                    // @ts-ignore
                     hasBlockData(): boolean;
                    /**
                     * Returns the currently attached block data for this item or creates a new
                     * one if one doesn't exist.
                     * The state is a copy, it must be set back (or to another item) with
                     * {@link #setBlockData(org.bukkit.block.data.BlockData)}
                     */
                    // @ts-ignore
                     getBlockData(material: org.bukkit.Material): org.bukkit.block.data.BlockData;
                    /**
                     * Attaches a copy of the passed block data to the item.
                     */
                    // @ts-ignore
                     setBlockData(blockData: org.bukkit.block.data.BlockData): void;
                }
            }
        }
    }
}
