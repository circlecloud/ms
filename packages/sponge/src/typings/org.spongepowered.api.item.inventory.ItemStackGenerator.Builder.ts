declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace ItemStackGenerator {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Adds a new biconsumer in the current order.
                             */
                            // @ts-ignore
                             add(consumer: any): org.spongepowered.api.item.inventory.ItemStackGenerator.Builder;
                            /**
                             * Adds all the provided biconsumers from the provided collection.
                             */
                            // @ts-ignore
                             addAll(collection: any[] /*java.util.Collection*/): org.spongepowered.api.item.inventory.ItemStackGenerator.Builder;
                            /**
                             * Sets the base {@link ItemType} for the {@link ItemStackGenerator}. A
                             * base type must be set to avoid issues.
                             */
                            // @ts-ignore
                             baseItem(itemType: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.inventory.ItemStackGenerator.Builder;
                            /**
                             * Creates a new {@link ItemStackGenerator} with all of the added
                             * {@link BiConsumer}s.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.item.inventory.ItemStackGenerator;
                        }
                    }
                }
            }
        }
    }
}
