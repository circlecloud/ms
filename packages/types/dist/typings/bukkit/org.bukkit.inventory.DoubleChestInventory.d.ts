// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface DoubleChestInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the left half of this double chest.
                 */
                // @ts-ignore
                 getLeftSide(): org.bukkit.inventory.Inventory;
                /**
                 * Get the right side of this double chest.
                 */
                // @ts-ignore
                 getRightSide(): org.bukkit.inventory.Inventory;
                // @ts-ignore
                 getHolder(): org.bukkit.block.DoubleChest;
            }
        }
    }
}
