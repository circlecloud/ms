declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface DoubleChestInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the left half of this double chest.
                 */
                 getLeftSide(): org.bukkit.inventory.Inventory;
                /**
                 * Get the right side of this double chest.
                 */
                 getRightSide(): org.bukkit.inventory.Inventory;
                 getHolder(): org.bukkit.block.DoubleChest;
            }
        }
    }
}
