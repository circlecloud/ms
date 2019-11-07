// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface CraftingInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Check what item is in the result slot of this crafting inventory.
                 */
                // @ts-ignore
                 getResult(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the contents of the crafting matrix.
                 */
                // @ts-ignore
                 getMatrix(): org.bukkit.inventory.ItemStack[];
                /**
                 * Set the item in the result slot of the crafting inventory.
                 */
                // @ts-ignore
                 setResult(newResult: org.bukkit.inventory.ItemStack): void;
                /**
                 * Replace the contents of the crafting matrix
                 */
                // @ts-ignore
                 setMatrix(contents: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the current recipe formed on the crafting inventory, if any.
                 */
                // @ts-ignore
                 getRecipe(): org.bukkit.inventory.Recipe;
            }
        }
    }
}
