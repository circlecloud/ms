declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace EnchantItemEvent {
                            // @ts-ignore
                            interface CalculateLevelRequirement extends org.spongepowered.api.event.item.inventory.EnchantItemEvent {
                                /**
                                 * The enchantment power based on bookshelves around the enchantment table.
                                 */
                                // @ts-ignore
                                 getPower(): number;
                                /**
                                 * The itemstack to enchant.
                                 */
                                // @ts-ignore
                                 getItem(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                                /**
                                 * Returns the original level requirement
                                 */
                                // @ts-ignore
                                 getOriginalLevelRequirement(): number;
                                /**
                                 * Returns the level requirement
                                 */
                                // @ts-ignore
                                 getLevelRequirement(): number;
                                /**
                                 * Sets the new level requirement
                                 * <p>In vanilla the maximum value is 30.</p>
                                 * <p>Returning a much higher level may result in no enchantments
                                 * because the existing enchantments are too weak.</p>
                                 */
                                // @ts-ignore
                                 setLevelRequirement(value: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
