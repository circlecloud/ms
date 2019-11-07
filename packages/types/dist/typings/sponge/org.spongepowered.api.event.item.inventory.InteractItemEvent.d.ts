// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface InteractItemEvent extends org.spongepowered.api.event.action.InteractEvent {
                            /**
                             * Gets the {@link ItemStackSnapshot} being interacted with.
                             */
                            // @ts-ignore
                             getItemStack(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                        }
                    }
                }
            }
        }
    }
}
