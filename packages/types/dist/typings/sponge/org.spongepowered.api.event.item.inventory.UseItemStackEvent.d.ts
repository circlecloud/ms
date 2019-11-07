// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface UseItemStackEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the original remaining duration of {@link ItemStack} in use.
                             */
                            // @ts-ignore
                             getOriginalRemainingDuration(): number;
                            /**
                             * Gets the remaining duration of {@link ItemStack} in use.
                             */
                            // @ts-ignore
                             getRemainingDuration(): number;
                            /**
                             * Sets the remaining duration of {@link ItemStack} in use.
                             */
                            // @ts-ignore
                             setRemainingDuration(duration: number): void;
                            /**
                             * Gets the {@link ItemStack} being consumed.
                             */
                            // @ts-ignore
                             getItemStackInUse(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                        }
                    }
                }
            }
        }
    }
}
