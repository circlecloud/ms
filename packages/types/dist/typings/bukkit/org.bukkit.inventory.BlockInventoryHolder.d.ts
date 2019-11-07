declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface BlockInventoryHolder extends org.bukkit.inventory.InventoryHolder {
                /**
                 * Gets the block associated with this holder.
                 */
                // @ts-ignore
                 getBlock(): org.bukkit.block.Block;
            }
        }
    }
}
