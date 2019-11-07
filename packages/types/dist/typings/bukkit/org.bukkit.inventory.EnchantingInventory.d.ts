declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface EnchantingInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Set the item being enchanted.
                 */
                // @ts-ignore
                 setItem(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the item being enchanted.
                 */
                // @ts-ignore
                 getItem(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the secondary item being used for the enchant.
                 */
                // @ts-ignore
                 setSecondary(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the secondary item being used for the enchant.
                 */
                // @ts-ignore
                 getSecondary(): org.bukkit.inventory.ItemStack;
            }
        }
    }
}
