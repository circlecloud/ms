declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface BrewerInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the current ingredient for brewing.
                 */
                 getIngredient(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current ingredient for brewing.
                 */
                 setIngredient(ingredient: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the current fuel for brewing.
                 */
                 getFuel(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current fuel for brewing. Generally only
                 * {@link Material#BLAZE_POWDER} will be of use.
                 */
                 setFuel(fuel: org.bukkit.inventory.ItemStack): void;
                 getHolder(): org.bukkit.block.BrewingStand;
            }
        }
    }
}
