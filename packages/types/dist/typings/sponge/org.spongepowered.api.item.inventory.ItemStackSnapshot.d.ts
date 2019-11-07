declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface ItemStackSnapshot extends org.spongepowered.api.data.ImmutableDataHolder, org.spongepowered.api.text.translation.Translatable {
                        // @ts-ignore
                         NONE: org.spongepowered.api.item.inventory.ItemStackSnapshot;
                        /**
                         * Gets the {@link ItemType} of this {@link ItemStackSnapshot}. The
                         * {@link ItemType} is always available.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.item.ItemType;
                        /**
                         * Gets the current stack size count of the {@link ItemStack} this
                         * {@link ItemStackSnapshot} is representing.
                         */
                        // @ts-ignore
                         getCount(): number;
                        /**
                         * Gets the quantity of items in this the {@link ItemStack} this
                         * {@link ItemStackSnapshot} is representing.
                         */
                        // @ts-ignore
                         getQuantity(): number;
                        /**
                         * Returns true if {@link #getQuantity()} is zero and therefore this
                         * ItemStackSnapshot is empty.
                         */
                        // @ts-ignore
                         isEmpty(): boolean;
                        /**
                         * Creates a new {@link ItemStack} with all the data currently available
                         * on this {@link ItemStackSnapshot}.
                         */
                        // @ts-ignore
                         createStack(): org.spongepowered.api.item.inventory.ItemStack;
                        /**
                         * Creates a {@link org.spongepowered.api.GameDictionary.Entry} that
                         * compares stacks to this {@link ItemStackSnapshot}. Note that not all
                         * data stored in this {@link ItemStackSnapshot} may be stored in the
                         * returned entry.
                         */
                        // @ts-ignore
                         createGameDictionaryEntry(): org.spongepowered.api.GameDictionary.Entry;
                    }
                }
            }
        }
    }
}
