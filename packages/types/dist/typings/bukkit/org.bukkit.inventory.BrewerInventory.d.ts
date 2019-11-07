declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface BrewerInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the current ingredient for brewing.
                 */
                // @ts-ignore
                 getIngredient(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current ingredient for brewing.
                 */
                // @ts-ignore
                 setIngredient(ingredient: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the current fuel for brewing.
                 */
                // @ts-ignore
                 getFuel(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the current fuel for brewing. Generally only
                 * {@link Material#BLAZE_POWDER} will be of use.
                 */
                // @ts-ignore
                 setFuel(fuel: org.bukkit.inventory.ItemStack): void;
                // @ts-ignore
                 getHolder(): org.bukkit.block.BrewingStand;
            }
        }
    }
}
