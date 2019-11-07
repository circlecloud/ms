// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace enchantment {
                    namespace Enchantment {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                            /**
                             * Sets the {@link EnchantmentType} for this enchantment.
                             */
                            // @ts-ignore
                             type(enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType): org.spongepowered.api.item.enchantment.Enchantment.Builder;
                            /**
                             * Sets the level for this enchantment.
                             * <p>This level must be between {@link Short#MIN_VALUE} and
                             * {@link Short#MAX_VALUE}, but there is no guarantee all levels will
                             * work properly without error. It is recommended for reliable results
                             * you stay between {@link EnchantmentType#getMinimumLevel()} and
                             * {@link EnchantmentType#getMaximumLevel()}, or at least larger
                             * than <code>0</code> and less than {@link Short#MAX_VALUE}.</p>
                             */
                            // @ts-ignore
                             level(level: number): org.spongepowered.api.item.enchantment.Enchantment.Builder;
                            /**
                             * Builds an instance of a {@link Enchantment} based on the entered
                             * information.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.item.enchantment.Enchantment;
                        }
                    }
                }
            }
        }
    }
}
