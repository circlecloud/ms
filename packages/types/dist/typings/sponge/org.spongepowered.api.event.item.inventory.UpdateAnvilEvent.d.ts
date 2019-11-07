// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface UpdateAnvilEvent extends org.spongepowered.api.event.item.inventory.TargetInventoryEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Returns the new item name.
                             */
                            // @ts-ignore
                             getItemName(): string;
                            /**
                             * Returns the left input item.
                             */
                            // @ts-ignore
                             getLeft(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                            /**
                             * Returns the right input item.
                             */
                            // @ts-ignore
                             getRight(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                            /**
                             * Returns the transaction for the resulting item.
                             */
                            // @ts-ignore
                             getResult(): org.spongepowered.api.data.Transaction;
                            /**
                             * Returns the transaction for the repair costs.
                             */
                            // @ts-ignore
                             getCosts(): org.spongepowered.api.data.Transaction;
                        }
                    }
                }
            }
        }
    }
}
