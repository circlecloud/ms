declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
             class ShapedRecipe implements org.bukkit.inventory.Recipe, org.bukkit.Keyed {
                constructor(result: org.bukkit.inventory.ItemStack)
                /**
                 * Create a shaped recipe to craft the specified ItemStack. The
                 * constructor merely determines the result and type; to set the actual
                 * recipe, you'll need to call the appropriate methods.
                 */
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack)
                /**
                 * Set the shape of this recipe to the specified rows. Each character
                 * represents a different ingredient; exactly what each character
                 * represents is set separately. The first row supplied corresponds with
                 * the upper most part of the recipe on the workbench e.g. if all three
                 * rows are supplies the first string represents the top row on the
                 * workbench.
                 */
                public shape(shape: string): org.bukkit.inventory.ShapedRecipe;
                /**
                 * Sets the material that a character in the recipe shape refers to.
                 */
                public setIngredient(key: string, ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapedRecipe;
                /**
                 * Sets the material that a character in the recipe shape refers to.
                 */
                public setIngredient(key: string, ingredient: org.bukkit.Material): org.bukkit.inventory.ShapedRecipe;
                /**
                 * Sets the material that a character in the recipe shape refers to.
                 */
                public setIngredient(key: string, ingredient: org.bukkit.Material, raw: number): org.bukkit.inventory.ShapedRecipe;
                public setIngredient(key: string, ingredient: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.ShapedRecipe;
                /**
                 * Get a copy of the ingredients map.
                 */
                public getIngredientMap(): Map<any, any> /*java.util.Map*/;
                public getChoiceMap(): Map<any, any> /*java.util.Map*/;
                /**
                 * Get the shape.
                 */
                public getShape(): any;
                /**
                 * Get the result.
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
