declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
             class SmokingRecipe extends org.bukkit.inventory.CookingRecipe {
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, experience: number, cookingTime: number)
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice, experience: number, cookingTime: number)
            }
        }
    }
}
