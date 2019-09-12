declare namespace org {
    namespace bukkit {
        namespace inventory {
            class BrewerInventory {
                /**
                 * Get the current ingredient for brewing.
                 */
                public getIngredient(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current ingredient for brewing.
                 */
                public setIngredient(ingredient: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the current fuel for brewing.
                 */
                public getFuel(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current fuel for brewing. Generally only
                 * {@link Material#BLAZE_POWDER} will be of use.
                 */
                public setFuel(fuel: org.bukkit.inventory.ItemStack): void;
                public getHolder(): org.bukkit.block.BrewingStand;
            }
        }
    }
}
