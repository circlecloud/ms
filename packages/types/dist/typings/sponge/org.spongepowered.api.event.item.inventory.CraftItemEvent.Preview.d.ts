declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace CraftItemEvent {
                            // @ts-ignore
                            interface Preview extends org.spongepowered.api.event.item.inventory.CraftItemEvent {
                                /**
                                 * The SlotTransaction on the output slot.
                                 * <p>Setting a custom Item here changes the result of the recipe replacing the default result</p>
                                 */
                                // @ts-ignore
                                 getPreview(): org.spongepowered.api.item.inventory.transaction.SlotTransaction;
                            }
                        }
                    }
                }
            }
        }
    }
}
