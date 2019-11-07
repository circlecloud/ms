declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface TargetContainerEvent extends org.spongepowered.api.event.item.inventory.TargetInventoryEvent {
                            // @ts-ignore
                             getTargetInventory(): org.spongepowered.api.item.inventory.Container;
                        }
                    }
                }
            }
        }
    }
}
