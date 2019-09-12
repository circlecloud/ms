declare namespace org {
    namespace bukkit {
        namespace inventory {
            class RecipeChoice {
                /**
                 * Gets a single item stack representative of this stack choice.
                 */
                public getItemStack(): org.bukkit.inventory.ItemStack;
                public clone(): org.bukkit.inventory.RecipeChoice;
                public test(itemStack: org.bukkit.inventory.ItemStack): boolean;
            }
        }
    }
}
