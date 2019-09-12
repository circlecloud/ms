declare namespace org {
    namespace bukkit {
        namespace inventory {
            class ShapelessRecipe {
                constructor(result: org.bukkit.inventory.ItemStack)
                /**
                 * Create a shapeless recipe to craft the specified ItemStack. The
                 * constructor merely determines the result and type; to set the actual
                 * recipe, you'll need to call the appropriate methods.
                 */
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack)
                /**
                 * Adds the specified ingredient.
                 */
                public addIngredient(ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Adds the specified ingredient.
                 */
                public addIngredient(ingredient: org.bukkit.Material): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Adds the specified ingredient.
                 */
                public addIngredient(ingredient: org.bukkit.Material, rawdata: number): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Adds multiples of the specified ingredient.
                 */
                public addIngredient(count: number, ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Adds multiples of the specified ingredient.
                 */
                public addIngredient(count: number, ingredient: org.bukkit.Material): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Adds multiples of the specified ingredient.
                 */
                public addIngredient(count: number, ingredient: org.bukkit.Material, rawdata: number): org.bukkit.inventory.ShapelessRecipe;
                public addIngredient(ingredient: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Removes an ingredient from the list.
                 */
                public removeIngredient(ingredient: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Removes an ingredient from the list. If the ingredient occurs multiple
                 * times, only one instance of it is removed. Only removes exact matches,
                 * with a data value of 0.
                 */
                public removeIngredient(ingredient: org.bukkit.Material): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Removes an ingredient from the list. If the ingredient occurs multiple
                 * times, only one instance of it is removed. If the data value is -1,
                 * only ingredients with a -1 data value will be removed.
                 */
                public removeIngredient(ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Removes multiple instances of an ingredient from the list. If there are
                 * less instances then specified, all will be removed. Only removes exact
                 * matches, with a data value of 0.
                 */
                public removeIngredient(count: number, ingredient: org.bukkit.Material): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Removes multiple instances of an ingredient from the list. If there are
                 * less instances then specified, all will be removed. If the data value
                 * is -1, only ingredients with a -1 data value will be removed.
                 */
                public removeIngredient(count: number, ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Removes an ingredient from the list. If the ingredient occurs multiple
                 * times, only one instance of it is removed. If the data value is -1,
                 * only ingredients with a -1 data value will be removed.
                 */
                public removeIngredient(ingredient: org.bukkit.Material, rawdata: number): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Removes multiple instances of an ingredient from the list. If there are
                 * less instances then specified, all will be removed. If the data value
                 * is -1, only ingredients with a -1 data value will be removed.
                 */
                public removeIngredient(count: number, ingredient: org.bukkit.Material, rawdata: number): org.bukkit.inventory.ShapelessRecipe;
                /**
                 * Get the result of this recipe.
                 */
                public getResult(): org.bukkit.inventory.ItemStack;
                /**
                 * Get the list of ingredients used for this recipe.
                 */
                public getIngredientList(): any[] /*java.util.List*/;
                public getChoiceList(): any[] /*java.util.List*/;
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
