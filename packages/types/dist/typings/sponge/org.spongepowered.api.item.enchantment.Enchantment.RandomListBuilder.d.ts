// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace enchantment {
                    namespace Enchantment {
                        // @ts-ignore
                        interface RandomListBuilder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the random seed.
                             */
                            // @ts-ignore
                             seed(seed: number): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder;
                            /**
                             * Sets the enchanting option. (1-3 in vanilla)
                             */
                            // @ts-ignore
                             option(option: number): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder;
                            /**
                             * Sets the enchanting level. (max. 30 in vanilla)
                             */
                            // @ts-ignore
                             level(level: number): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder;
                            /**
                             * Sets whether to include treasure enchantments or not
                             */
                            // @ts-ignore
                             treasure(treasure: boolean): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder;
                            /**
                             * Sets a fixed pool for the random enchantments to pick from.
                             * <p>If empty a pool will be calculated based on the other values instead.</p>
                             */
                            // @ts-ignore
                             fixedPool(pool: java.util.List): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder;
                            /**
                             * Sets the item for which the enchantments are chosen
                             */
                            // @ts-ignore
                             item(item: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder;
                            /**
                             * Builds an instance of a {@link Enchantment} based on the entered
                             * information.
                             */
                            // @ts-ignore
                             build(): java.util.List;
                        }
                    }
                }
            }
        }
    }
}
