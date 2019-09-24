declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface EnchantmentStorageMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the existence of any stored enchantments.
                     */
                     hasStoredEnchants(): boolean;
                    /**
                     * Checks for storage of the specified enchantment.
                     */
                     hasStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks for the level of the stored enchantment.
                     */
                     getStoredEnchantLevel(ench: org.bukkit.enchantments.Enchantment): number;
                    /**
                     * Gets a copy the stored enchantments in this ItemMeta.
                     */
                     getStoredEnchants(): Map<any, any> /*java.util.Map*/;
                    /**
                     * Stores the specified enchantment in this item meta.
                     */
                     addStoredEnchant(ench: org.bukkit.enchantments.Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
                    /**
                     * Remove the specified stored enchantment from this item meta.
                     */
                     removeStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks if the specified enchantment conflicts with any enchantments in
                     * this ItemMeta.
                     */
                     hasConflictingStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                     clone(): org.bukkit.inventory.meta.EnchantmentStorageMeta;
                }
            }
        }
    }
}
