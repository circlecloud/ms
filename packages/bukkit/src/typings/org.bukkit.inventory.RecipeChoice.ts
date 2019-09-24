declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface RecipeChoice {
                /**
                 * Gets a single item stack representative of this stack choice.
                 */
                 getItemStack(): org.bukkit.inventory.ItemStack;
                 clone(): org.bukkit.inventory.RecipeChoice;
                 test(itemStack: org.bukkit.inventory.ItemStack): boolean;
            }
        }
    }
}
