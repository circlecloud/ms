declare namespace org {
    namespace bukkit {
        namespace inventory {
            class CraftingInventory {
                /**
                 * Check what item is in the result slot of this crafting inventory.
                 */
                public getResult(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the contents of the crafting matrix.
                 */
                public getMatrix(): org.bukkit.inventory.ItemStack[];
                /**
                 * Set the item in the result slot of the crafting inventory.
                 */
                public setResult(newResult: org.bukkit.inventory.ItemStack): void;
                /**
                 * Replace the contents of the crafting matrix
                 */
                public setMatrix(contents: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the current recipe formed on the crafting inventory, if any.
                 */
                public getRecipe(): org.bukkit.inventory.Recipe;
            }
        }
    }
}
