// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Lectern extends org.bukkit.block.TileState, org.bukkit.inventory.BlockInventoryHolder {
                /**
                 * Get the current lectern page.
                 */
                // @ts-ignore
                 getPage(): number;
                /**
                 * Set the current lectern page.
                 * If the page is greater than the number of pages of the book currently in
                 * the inventory, then behavior is undefined.
                 */
                // @ts-ignore
                 setPage(page: number): void;
                // @ts-ignore
                 getInventory(): org.bukkit.inventory.Inventory;
                // @ts-ignore
                 getSnapshotInventory(): org.bukkit.inventory.Inventory;
            }
        }
    }
}
