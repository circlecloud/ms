declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface MerchantInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the index of the currently selected recipe.
                 */
                // @ts-ignore
                 getSelectedRecipeIndex(): number;
                /**
                 * Get the currently active recipe.
                 * <p>
                 * This will be <code>null</code> if the items provided by the player do
                 * not match the ingredients of the selected recipe. This does not
                 * necessarily match the recipe selected by the player: If the player has
                 * selected the first recipe, the merchant will search all of its offers
                 * for a matching recipe to activate.
                 */
                // @ts-ignore
                 getSelectedRecipe(): org.bukkit.inventory.MerchantRecipe;
                /**
                 * Gets the Merchant associated with this inventory.
                 */
                // @ts-ignore
                 getMerchant(): org.bukkit.inventory.Merchant;
            }
        }
    }
}
