// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface RecipeChoice {
                /**
                 * Gets a single item stack representative of this stack choice.
                 */
                // @ts-ignore
                 getItemStack(): org.bukkit.inventory.ItemStack;
                // @ts-ignore
                 clone(): org.bukkit.inventory.RecipeChoice;
                // @ts-ignore
                 test(itemStack: org.bukkit.inventory.ItemStack): boolean;
            }
        }
    }
}
