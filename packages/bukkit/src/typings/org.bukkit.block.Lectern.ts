declare namespace org {
    namespace bukkit {
        namespace block {
            class Lectern {
                /**
                 * Get the current lectern page.
                 */
                public getPage(): number;
                /**
                 * Set the current lectern page.
                 * If the page is greater than the number of pages of the book currently in
                 * the inventory, then behavior is undefined.
                 */
                public setPage(page: number): void;
                public getInventory(): org.bukkit.inventory.Inventory;
                public getSnapshotInventory(): org.bukkit.inventory.Inventory;
            }
        }
    }
}
