declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        // @ts-ignore
                        interface CooldownTracker {
                            /**
                             * Checks if the specified {@link ItemType} is currently on cooldown
                             * for the player.
                             */
                            // @ts-ignore
                             hasCooldown(type: org.spongepowered.api.item.ItemType): boolean;
                            /**
                             * Gets the cooldown of the specified {@link ItemType} in ticks for the
                             * player, or empty if the the item type is currently not on cooldown.
                             */
                            // @ts-ignore
                             getCooldown(type: org.spongepowered.api.item.ItemType): java.util.OptionalInt;
                            /**
                             * Sets the cooldown for the specified {@link ItemType} for the
                             * specified amount of ticks.
                             */
                            // @ts-ignore
                             setCooldown(type: org.spongepowered.api.item.ItemType, ticks: number): boolean;
                            /**
                             * Resets the cooldown of the specified {@link ItemType} for the
                             * player.
                             */
                            // @ts-ignore
                             resetCooldown(type: org.spongepowered.api.item.ItemType): boolean;
                            /**
                             * Gets the fraction of the specified {@link ItemType}'s cooldown that
                             * is remaining for the player, or empty if the the item type
                             * is currently not on cooldown.
                             * <p>If present, this value will be between 0.0 and 1.0.</p>
                             */
                            // @ts-ignore
                             getFractionRemaining(type: org.spongepowered.api.item.ItemType): java.util.OptionalDouble;
                        }
                    }
                }
            }
        }
    }
}
