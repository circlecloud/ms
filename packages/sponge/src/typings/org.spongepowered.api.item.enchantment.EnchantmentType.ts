declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace enchantment {
                    // @ts-ignore
                    interface EnchantmentType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets the weight of this enchantment type.
                         * <p>Higher values are more common. This value is also used in the repair
                         * cost calculation.</p>
                         */
                        // @ts-ignore
                         getWeight(): number;
                        /**
                         * Gets the minimum level of this enchantment type allowed where
                         * it is present.
                         */
                        // @ts-ignore
                         getMinimumLevel(): number;
                        /**
                         * Gets the maximum level of this enchantment type normally allowed.
                         */
                        // @ts-ignore
                         getMaximumLevel(): number;
                        /**
                         * Gets the minimum item enchantability for this level to be normally added
                         * by enchanting tables.
                         */
                        // @ts-ignore
                         getMinimumEnchantabilityForLevel(level: number): number;
                        /**
                         * Gets the maximum item enchantability for this level to be normally added
                         * by enchanting tables.
                         */
                        // @ts-ignore
                         getMaximumEnchantabilityForLevel(level: number): number;
                        /**
                         * Test if this enchantment type can be applied to an {@link ItemStack}.
                         */
                        // @ts-ignore
                         canBeAppliedToStack(stack: org.spongepowered.api.item.inventory.ItemStack): boolean;
                        /**
                         * Test if this enchantment type can be applied to an {@link ItemStack} by
                         * the {@link EnchantmentTable}.
                         */
                        // @ts-ignore
                         canBeAppliedByTable(stack: org.spongepowered.api.item.inventory.ItemStack): boolean;
                        /**
                         * Test if this enchantment type can be applied along with
                         * another enchantment type.
                         */
                        // @ts-ignore
                         isCompatibleWith(enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType): boolean;
                        /**
                         * Gets whether or not this enchantment type is considered a "treasure"
                         * enchantment.
                         * <p>These do not occur naturally in enchantment tables.</p>
                         */
                        // @ts-ignore
                         isTreasure(): boolean;
                        /**
                         * Gets whether or not this enchantment type is considered a "curse"
                         * enchantment.
                         */
                        // @ts-ignore
                         isCurse(): boolean;
                    }
                }
            }
        }
    }
}
