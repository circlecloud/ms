// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        // @ts-ignore
                        interface OrderedInventory extends org.spongepowered.api.item.inventory.Inventory {
                            /**
                             * Gets and remove the stack at the supplied index in this Inventory.
                             */
                            // @ts-ignore
                             poll(index: org.spongepowered.api.item.inventory.property.SlotIndex): java.util.Optional;
                            /**
                             * Gets and remove the stack at the supplied index in this Inventory.
                             */
                            // @ts-ignore
                             poll(index: org.spongepowered.api.item.inventory.property.SlotIndex, limit: number): java.util.Optional;
                            /**
                             * Gets without removing the stack at the supplied index in this Inventory.
                             */
                            // @ts-ignore
                             peek(index: org.spongepowered.api.item.inventory.property.SlotIndex): java.util.Optional;
                            /**
                             * Gets without removing the stack at the supplied index in this Inventory.
                             */
                            // @ts-ignore
                             peek(index: org.spongepowered.api.item.inventory.property.SlotIndex, limit: number): java.util.Optional;
                            /**
                             * Sets the item in the specified slot.
                             */
                            // @ts-ignore
                             set(index: org.spongepowered.api.item.inventory.property.SlotIndex, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult;
                            /**
                             * Gets the {@link Slot} at the specified position.
                             */
                            // @ts-ignore
                             getSlot(index: org.spongepowered.api.item.inventory.property.SlotIndex): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
