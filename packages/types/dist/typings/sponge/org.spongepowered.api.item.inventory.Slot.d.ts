// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface Slot extends org.spongepowered.api.item.inventory.Inventory {
                        /**
                         * Gets the size of the stack in this slot. Essentially the same as calling
                         * slot.peek().getQuantity(); but faster because it avoids the Optional
                         * boxing.
                         */
                        // @ts-ignore
                         getStackSize(): number;
                        /**
                         * Transforms this Slot into given Type.
                         * <dl>
                         * <dt>Example</dt>
                         * <dd>In a InventoryEvent with a Container to get the actual inventory
                         * from Slot, you may call this with {@link Type#INVENTORY}.</dd>
                         * </dl>
                         */
                        // @ts-ignore
                         transform(type: org.spongepowered.api.item.inventory.Slot.Type): org.spongepowered.api.item.inventory.Slot;
                        /**
                         * Transforms this Slot into the default Type.
                         */
                        // @ts-ignore
                         transform(): org.spongepowered.api.item.inventory.Slot;
                    }
                }
            }
        }
    }
}
