declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace transaction {
                        // @ts-ignore
                         class SlotTransaction extends org.spongepowered.api.data.Transaction {
                            /**
                             * Creates a new {@link SlotTransaction} with the provided {@link Slot},
                             * {@link ItemStackSnapshot original snapshot}, and
                             * {@link ItemStackSnapshot replacement snapshot}.
                             */
                            constructor(slot: org.spongepowered.api.item.inventory.Slot, original: org.spongepowered.api.item.inventory.ItemStackSnapshot, defaultReplacement: org.spongepowered.api.item.inventory.ItemStackSnapshot)
                            /**
                             * Sets the custom {@link ItemStack} output of this
                             * {@link SlotTransaction}.
                             */
                            // @ts-ignore
                            public setCustom(stack: org.spongepowered.api.item.inventory.ItemStack): void;
                            /**
                             * Gets the {@link Slot} of this {@link SlotTransaction}.
                             */
                            // @ts-ignore
                            public getSlot(): org.spongepowered.api.item.inventory.Slot;
                            // @ts-ignore
                            public toString(): string;
                        }
                    }
                }
            }
        }
    }
}
