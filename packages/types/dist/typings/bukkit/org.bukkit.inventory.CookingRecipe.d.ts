// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            abstract class CookingRecipe extends java.lang.Object implements org.bukkit.inventory.Recipe, org.bukkit.Keyed {
                /**
                 * Create a cooking recipe to craft the specified ItemStack.
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, experience: number, cookingTime: number)
                /**
                 * Create a cooking recipe to craft the specified ItemStack.
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice, experience: number, cookingTime: number)
                /**
                 * Sets the input of this cooking recipe.
                 */
                // @ts-ignore
                public setInput(input: org.bukkit.Material): org.bukkit.inventory.CookingRecipe;
                /**
                 * Get the input material.
                 */
                // @ts-ignore
                public getInput(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the input of this cooking recipe.
                 */
                // @ts-ignore
                public setInputChoice(input: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.CookingRecipe;
                /**
                 * Get the input choice.
                 */
                // @ts-ignore
                public getInputChoice(): org.bukkit.inventory.RecipeChoice;
                /**
                 * Get the result of this recipe.
                 */
                // @ts-ignore
                public getResult(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the experience given by this recipe.
                 */
                // @ts-ignore
                public setExperience(experience: number): void;
                /**
                 * Get the experience given by this recipe.
                 */
                // @ts-ignore
                public getExperience(): number;
                /**
                 * Set the cooking time for this recipe in ticks.
                 */
                // @ts-ignore
                public setCookingTime(cookingTime: number): void;
                /**
                 * Get the cooking time for this recipe in ticks.
                 */
                // @ts-ignore
                public getCookingTime(): number;
                // @ts-ignore
                public getKey(): org.bukkit.NamespacedKey;
                /**
                 * Get the group of this recipe. Recipes with the same group may be grouped
                 * together when displayed in the client.
                 */
                // @ts-ignore
                public getGroup(): string;
                /**
                 * Set the group of this recipe. Recipes with the same group may be grouped
                 * together when displayed in the client.
                 */
                // @ts-ignore
                public setGroup(group: string): void;
            }
        }
    }
}
