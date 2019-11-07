// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace enchantments {
            // @ts-ignore
             class EnchantmentOffer extends java.lang.Object {
                // @ts-ignore
                constructor(enchantment: org.bukkit.enchantments.Enchantment, enchantmentLevel: number, cost: number)
                /**
                 * Get the type of the enchantment.
                 */
                // @ts-ignore
                public getEnchantment(): org.bukkit.enchantments.Enchantment;
                /**
                 * Sets the type of the enchantment.
                 */
                // @ts-ignore
                public setEnchantment(enchantment: org.bukkit.enchantments.Enchantment): void;
                /**
                 * Gets the level of the enchantment.
                 */
                // @ts-ignore
                public getEnchantmentLevel(): number;
                /**
                 * Sets the level of the enchantment.
                 */
                // @ts-ignore
                public setEnchantmentLevel(enchantmentLevel: number): void;
                /**
                 * Gets the cost which is displayed as a number on the right hand side of
                 * the enchantment offer.
                 */
                // @ts-ignore
                public getCost(): number;
                /**
                 * Sets the the cost which is displayed as a number on the right hand side
                 * of the enchantment offer.
                 */
                // @ts-ignore
                public setCost(cost: number): void;
            }
        }
    }
}
