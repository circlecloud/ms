declare namespace org {
    namespace bukkit {
        namespace inventory {
            class DoubleChestInventory {
                /**
                 * Get the left half of this double chest.
                 */
                public getLeftSide(): org.bukkit.inventory.Inventory;
                /**
                 * Get the right side of this double chest.
                 */
                public getRightSide(): org.bukkit.inventory.Inventory;
                public getHolder(): org.bukkit.block.DoubleChest;
            }
        }
    }
}
