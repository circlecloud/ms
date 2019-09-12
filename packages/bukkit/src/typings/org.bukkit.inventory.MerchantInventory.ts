declare namespace org {
    namespace bukkit {
        namespace inventory {
            class MerchantInventory {
                /**
                 * Get the index of the currently selected recipe.
                 */
                public getSelectedRecipeIndex(): number;
                /**
                 * Get the currently active recipe.
                 * <p>
                 * This will be <code>null</code> if the items provided by the player do
                 * not match the ingredients of the selected recipe. This does not
                 * necessarily match the recipe selected by the player: If the player has
                 * selected the first recipe, the merchant will search all of its offers
                 * for a matching recipe to activate.
                 */
                public getSelectedRecipe(): org.bukkit.inventory.MerchantRecipe;
                /**
                 * Gets the Merchant associated with this inventory.
                 */
                public getMerchant(): org.bukkit.inventory.Merchant;
            }
        }
    }
}
