declare namespace org {
    namespace bukkit {
        namespace enchantments {
            class EnchantmentWrapper {
                constructor(name: string)
                /**
                 * Gets the enchantment bound to this wrapper
                 */
                public getEnchantment(): org.bukkit.enchantments.Enchantment;
                public getMaxLevel(): number;
                public getStartLevel(): number;
                public getItemTarget(): org.bukkit.enchantments.EnchantmentTarget;
                public canEnchantItem(item: org.bukkit.inventory.ItemStack): boolean;
                public getName(): string;
                public isTreasure(): boolean;
                public isCursed(): boolean;
                public conflictsWith(other: org.bukkit.enchantments.Enchantment): boolean;
            }
        }
    }
}
