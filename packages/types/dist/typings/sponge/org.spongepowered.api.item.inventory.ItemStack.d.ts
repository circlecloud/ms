// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface ItemStack extends org.spongepowered.api.data.DataHolder, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Creates a new {@link Builder} to build an {@link ItemStack}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.item.inventory.ItemStack.Builder;
                        /**
                         * Creates a new {@link ItemStack} of the provided {@link ItemType}
                         * and quantity.
                         */
                        // @ts-ignore
                         of(itemType: org.spongepowered.api.item.ItemType, quantity: number): org.spongepowered.api.item.inventory.ItemStack;
                        /**
                         * Creates a new {@link ItemStack} of the provided {@link ItemType} and quantity of 1
                         */
                        // @ts-ignore
                         of(itemType: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.inventory.ItemStack;
                        /**
                         * Returns an empty {@link ItemStack}.
                         */
                        // @ts-ignore
                         empty(): org.spongepowered.api.item.inventory.ItemStack;
                        /**
                         * Gets the {@link ItemType} of this {@link ItemStack}.
                         */
                        // @ts-ignore
                         getItem(): org.spongepowered.api.item.ItemType;
                        /**
                         * Gets the {@link ItemType} of this {@link ItemStack}.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.item.ItemType;
                        /**
                         * Gets the quantity of items in this stack. This may exceed the max stack
                         * size of the item, and if added to an inventory will then be divided by
                         * the max stack.
                         */
                        // @ts-ignore
                         getQuantity(): number;
                        /**
                         * Sets the quantity in this stack.
                         */
                        // @ts-ignore
                         setQuantity(quantity: number): void;
                        /**
                         * Gets the maximum quantity per stack. By default, returns
                         * {@link ItemType#getMaxStackQuantity()}, unless a
                         * different value has been set for this specific stack.
                         */
                        // @ts-ignore
                         getMaxStackQuantity(): number;
                        /**
                         * Gets the {@link ItemStackSnapshot} of this {@link ItemStack}. All known
                         * {@link DataManipulator}s existing on this {@link ItemStack} are added
                         * as copies to the {@link ItemStackSnapshot}.
                         */
                        // @ts-ignore
                         createSnapshot(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                        /**
                         * Returns true if the specified {@link ItemStack} has the same stack
                         * size, {@link ItemType}, and data. Note that this method is not an
                         * overrider of {@link Object#equals(Object)} in order to maintain
                         * compatibility with the base game. Therefore, ItemStacks may not behave
                         * as expected when using them in equality based constructs such as
                         * {@link Map}s or {@link Set}s.
                         */
                        // @ts-ignore
                         equalTo(that: org.spongepowered.api.item.inventory.ItemStack): boolean;
                        /**
                         * Returns true if {@link #getQuantity()} is zero and therefore this
                         * ItemStack is empty.
                         * <p>In Vanilla empty ItemStacks are not rendered by the client.</p>
                         */
                        // @ts-ignore
                         isEmpty(): boolean;
                        // @ts-ignore
                         copy(): org.spongepowered.api.item.inventory.ItemStack;
                    }
                }
            }
        }
    }
}
