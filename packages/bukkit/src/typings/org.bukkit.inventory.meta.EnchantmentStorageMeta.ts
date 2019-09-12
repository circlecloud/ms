declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class EnchantmentStorageMeta {
                    /**
                     * Checks for the existence of any stored enchantments.
                     */
                    public hasStoredEnchants(): boolean;
                    /**
                     * Checks for storage of the specified enchantment.
                     */
                    public hasStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks for the level of the stored enchantment.
                     */
                    public getStoredEnchantLevel(ench: org.bukkit.enchantments.Enchantment): number;
                    /**
                     * Gets a copy the stored enchantments in this ItemMeta.
                     */
                    public getStoredEnchants(): Map<any, any> /*java.util.Map*/;
                    /**
                     * Stores the specified enchantment in this item meta.
                     */
                    public addStoredEnchant(ench: org.bukkit.enchantments.Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
                    /**
                     * Remove the specified stored enchantment from this item meta.
                     */
                    public removeStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks if the specified enchantment conflicts with any enchantments in
                     * this ItemMeta.
                     */
                    public hasConflictingStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    public clone(): org.bukkit.inventory.meta.EnchantmentStorageMeta;
                }
            }
        }
    }
}
