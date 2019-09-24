declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface CraftingInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Check what item is in the result slot of this crafting inventory.
                 */
                 getResult(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the contents of the crafting matrix.
                 */
                 getMatrix(): org.bukkit.inventory.ItemStack[];
                /**
                 * Set the item in the result slot of the crafting inventory.
                 */
                 setResult(newResult: org.bukkit.inventory.ItemStack): void;
                /**
                 * Replace the contents of the crafting matrix
                 */
                 setMatrix(contents: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the current recipe formed on the crafting inventory, if any.
                 */
                 getRecipe(): org.bukkit.inventory.Recipe;
            }
        }
    }
}
