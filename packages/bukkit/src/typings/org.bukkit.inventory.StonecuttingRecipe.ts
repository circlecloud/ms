declare namespace org {
    namespace bukkit {
        namespace inventory {
            class StonecuttingRecipe {
                /**
                 * Create a Stonecutting recipe to craft the specified ItemStack.
                 */
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material)
                /**
                 * Create a cooking recipe to craft the specified ItemStack.
                 */
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice)
                /**
                 * Sets the input of this cooking recipe.
                 */
                public setInput(input: org.bukkit.Material): org.bukkit.inventory.StonecuttingRecipe;
                /**
                 * Get the input material.
                 */
                public getInput(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the input of this cooking recipe.
                 */
                public setInputChoice(input: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.StonecuttingRecipe;
                /**
                 * Get the input choice.
                 */
                public getInputChoice(): org.bukkit.inventory.RecipeChoice;
                /**
                 * Get the result of this recipe.
                 */
                public getResult(): org.bukkit.inventory.ItemStack;
                public getKey(): org.bukkit.NamespacedKey;
                /**
                 * Get the group of this recipe. Recipes with the same group may be grouped
                 * together when displayed in the client.
                 */
                public getGroup(): string;
                /**
                 * Set the group of this recipe. Recipes with the same group may be grouped
                 * together when displayed in the client.
                 */
                public setGroup(group: string): void;
            }
        }
    }
}
