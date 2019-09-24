declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface Merchant {
                /**
                 * Get a list of trades currently available from this merchant.
                 */
                 getRecipes(): any[] /*java.util.List*/;
                /**
                 * Set the list of trades currently available from this merchant.
                 * <br>
                 * This will not change the selected trades of players currently trading
                 * with this merchant.
                 */
                 setRecipes(recipes: any[] /*java.util.List*/): void;
                /**
                 * Get the recipe at a certain index of this merchant's trade list.
                 */
                 getRecipe(i: number): org.bukkit.inventory.MerchantRecipe;
                /**
                 * Set the recipe at a certain index of this merchant's trade list.
                 */
                 setRecipe(i: number, recipe: org.bukkit.inventory.MerchantRecipe): void;
                /**
                 * Get the number of trades this merchant currently has available.
                 */
                 getRecipeCount(): number;
                /**
                 * Gets whether this merchant is currently trading.
                 */
                 isTrading(): boolean;
                /**
                 * Gets the player this merchant is trading with, or null if it is not
                 * currently trading.
                 */
                 getTrader(): org.bukkit.entity.HumanEntity;
            }
        }
    }
}
