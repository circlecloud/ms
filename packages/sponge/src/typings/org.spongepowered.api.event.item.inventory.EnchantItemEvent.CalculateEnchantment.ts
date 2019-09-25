declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace EnchantItemEvent {
                            // @ts-ignore
                            interface CalculateEnchantment extends org.spongepowered.api.event.item.inventory.EnchantItemEvent {
                                /**
                                 * The itemstack to enchant.
                                 */
                                // @ts-ignore
                                 getItem(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                                /**
                                 * The final level requirement from {@link CalculateLevelRequirement}.
                                 * <p>In vanilla the maximum value is 30.</p>
                                 */
                                // @ts-ignore
                                 getLevelRequirement(): number;
                                /**
                                 * Returns the original list of enchantments to apply to the item.
                                 * <p>The first item in the list is used for display when previewing the enchantments.</p>
                                 */
                                // @ts-ignore
                                 getOriginalEnchantments(): any[] /*java.util.List*/;
                                /**
                                 * Returns the list of enchantments to apply to the item.
                                 * <p>The first item in the list is used for display when previewing the enchantments.</p>
                                 */
                                // @ts-ignore
                                 getEnchantments(): any[] /*java.util.List*/;
                                /**
                                 * Sets the list of enchantments to apply to the item.
                                 * <p>The first item in the list is used for display when previewing the enchantments.</p>
                                 * <p>Note that when modifying the enchantment list you should
                                 * return the same enchantments for the same seed and option.</p>
                                 * <p>See {@link Enchantment#randomListBuilder()} to generate enchantment lists.</p>
                                 */
                                // @ts-ignore
                                 setEnchantments(enchantments: any[] /*java.util.List*/): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
