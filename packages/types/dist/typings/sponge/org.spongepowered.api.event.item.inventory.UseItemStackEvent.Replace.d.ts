// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace UseItemStackEvent {
                            // @ts-ignore
                            interface Replace extends org.spongepowered.api.event.item.inventory.UseItemStackEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the {@link ItemStack} that is placed in the player's
                                 * inventory in replacement of the stack that is currently being used.
                                 */
                                // @ts-ignore
                                 getItemStackResult(): org.spongepowered.api.data.Transaction;
                            }
                        }
                    }
                }
            }
        }
    }
}
