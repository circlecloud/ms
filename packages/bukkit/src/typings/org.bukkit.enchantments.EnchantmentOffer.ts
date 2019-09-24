declare namespace org {
    namespace bukkit {
        namespace enchantments {
            // @ts-ignore
             class EnchantmentOffer {
                constructor(enchantment: org.bukkit.enchantments.Enchantment, enchantmentLevel: number, cost: number)
                /**
                 * Get the type of the enchantment.
                 */
                public getEnchantment(): org.bukkit.enchantments.Enchantment;
                /**
                 * Sets the type of the enchantment.
                 */
                public setEnchantment(enchantment: org.bukkit.enchantments.Enchantment): void;
                /**
                 * Gets the level of the enchantment.
                 */
                public getEnchantmentLevel(): number;
                /**
                 * Sets the level of the enchantment.
                 */
                public setEnchantmentLevel(enchantmentLevel: number): void;
                /**
                 * Gets the cost which is displayed as a number on the right hand side of
                 * the enchantment offer.
                 */
                public getCost(): number;
                /**
                 * Sets the the cost which is displayed as a number on the right hand side
                 * of the enchantment offer.
                 */
                public setCost(cost: number): void;
            }
        }
    }
}
