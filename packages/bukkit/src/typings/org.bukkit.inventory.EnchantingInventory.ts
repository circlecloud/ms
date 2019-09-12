declare namespace org {
    namespace bukkit {
        namespace inventory {
            class EnchantingInventory {
                /**
                 * Set the item being enchanted.
                 */
                public setItem(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the item being enchanted.
                 */
                public getItem(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the secondary item being used for the enchant.
                 */
                public setSecondary(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the secondary item being used for the enchant.
                 */
                public getSecondary(): org.bukkit.inventory.ItemStack;
            }
        }
    }
}
