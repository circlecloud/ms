declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Lectern extends org.bukkit.block.TileState, org.bukkit.inventory.BlockInventoryHolder {
                /**
                 * Get the current lectern page.
                 */
                 getPage(): number;
                /**
                 * Set the current lectern page.
                 * If the page is greater than the number of pages of the book currently in
                 * the inventory, then behavior is undefined.
                 */
                 setPage(page: number): void;
                 getInventory(): org.bukkit.inventory.Inventory;
                 getSnapshotInventory(): org.bukkit.inventory.Inventory;
            }
        }
    }
}
