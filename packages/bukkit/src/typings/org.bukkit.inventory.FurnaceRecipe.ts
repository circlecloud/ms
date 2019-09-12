declare namespace org {
    namespace bukkit {
        namespace inventory {
            class FurnaceRecipe {
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material)
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.material.MaterialData)
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.material.MaterialData, experience: number)
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, data: number)
                /**
                 * Create a furnace recipe to craft the specified ItemStack.
                 */
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, experience: number, cookingTime: number)
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, data: number, experience: number, cookingTime: number)
                /**
                 * Create a furnace recipe to craft the specified ItemStack.
                 */
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice, experience: number, cookingTime: number)
                /**
                 * Sets the input of this furnace recipe.
                 */
                public setInput(input: org.bukkit.material.MaterialData): org.bukkit.inventory.FurnaceRecipe;
                public setInput(input: org.bukkit.Material): org.bukkit.inventory.FurnaceRecipe;
                /**
                 * Sets the input of this furnace recipe.
                 */
                public setInput(input: org.bukkit.Material, data: number): org.bukkit.inventory.FurnaceRecipe;
                public setInputChoice(input: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.FurnaceRecipe;
            }
        }
    }
}
