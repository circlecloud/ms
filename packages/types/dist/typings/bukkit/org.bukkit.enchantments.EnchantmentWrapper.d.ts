declare namespace org {
    namespace bukkit {
        namespace enchantments {
            // @ts-ignore
             class EnchantmentWrapper extends org.bukkit.enchantments.Enchantment {
                // @ts-ignore
                constructor(name: string)
                /**
                 * Gets the enchantment bound to this wrapper
                 */
                // @ts-ignore
                public getEnchantment(): org.bukkit.enchantments.Enchantment;
                // @ts-ignore
                public getMaxLevel(): number;
                // @ts-ignore
                public getStartLevel(): number;
                // @ts-ignore
                public getItemTarget(): org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public canEnchantItem(item: org.bukkit.inventory.ItemStack): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public isTreasure(): boolean;
                // @ts-ignore
                public isCursed(): boolean;
                // @ts-ignore
                public conflictsWith(other: org.bukkit.enchantments.Enchantment): boolean;
            }
        }
    }
}
