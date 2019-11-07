declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace item {
                        // @ts-ignore
                        interface ItemMergeItemEvent extends org.spongepowered.api.event.entity.item.TargetItemEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets a copy of the second item to be merged.
                             */
                            // @ts-ignore
                             getItemToMerge(): org.spongepowered.api.entity.Item;
                        }
                    }
                }
            }
        }
    }
}
