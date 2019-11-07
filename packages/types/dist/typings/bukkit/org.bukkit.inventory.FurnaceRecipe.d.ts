declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
             class FurnaceRecipe extends org.bukkit.inventory.CookingRecipe {
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.material.MaterialData)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.material.MaterialData, experience: number)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, data: number)
                /**
                 * Create a furnace recipe to craft the specified ItemStack.
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, experience: number, cookingTime: number)
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, data: number, experience: number, cookingTime: number)
                /**
                 * Create a furnace recipe to craft the specified ItemStack.
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice, experience: number, cookingTime: number)
                /**
                 * Sets the input of this furnace recipe.
                 */
                // @ts-ignore
                public setInput(input: org.bukkit.material.MaterialData): org.bukkit.inventory.FurnaceRecipe;
                // @ts-ignore
                public setInput(input: org.bukkit.Material): org.bukkit.inventory.FurnaceRecipe;
                /**
                 * Sets the input of this furnace recipe.
                 */
                // @ts-ignore
                public setInput(input: org.bukkit.Material, data: number): org.bukkit.inventory.FurnaceRecipe;
                // @ts-ignore
                public setInputChoice(input: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.FurnaceRecipe;
            }
        }
    }
}
