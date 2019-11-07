declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface EnchantmentStorageMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the existence of any stored enchantments.
                     */
                    // @ts-ignore
                     hasStoredEnchants(): boolean;
                    /**
                     * Checks for storage of the specified enchantment.
                     */
                    // @ts-ignore
                     hasStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks for the level of the stored enchantment.
                     */
                    // @ts-ignore
                     getStoredEnchantLevel(ench: org.bukkit.enchantments.Enchantment): number;
                    /**
                     * Gets a copy the stored enchantments in this ItemMeta.
                     */
                    // @ts-ignore
                     getStoredEnchants(): java.util.Map;
                    /**
                     * Stores the specified enchantment in this item meta.
                     */
                    // @ts-ignore
                     addStoredEnchant(ench: org.bukkit.enchantments.Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
                    /**
                     * Remove the specified stored enchantment from this item meta.
                     */
                    // @ts-ignore
                     removeStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks if the specified enchantment conflicts with any enchantments in
                     * this ItemMeta.
                     */
                    // @ts-ignore
                     hasConflictingStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.EnchantmentStorageMeta;
                }
            }
        }
    }
}
