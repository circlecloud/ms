// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace enchantment {
                    // @ts-ignore
                    interface Enchantment extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link Builder} to create an {@link Enchantment}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.item.enchantment.Enchantment.Builder;
                        // @ts-ignore
                         randomListBuilder(): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder;
                        /**
                         * Creates a new {@link Enchantment} with the provided
                         * {@link EnchantmentType} and level.
                         */
                        // @ts-ignore
                         of(enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType, level: number): org.spongepowered.api.item.enchantment.Enchantment;
                        /**
                         * Gets the {@link EnchantmentType} for this enchantment.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.item.enchantment.EnchantmentType;
                        /**
                         * Gets the level of this enchantment.
                         */
                        // @ts-ignore
                         getLevel(): number;
                    }
                }
            }
        }
    }
}
