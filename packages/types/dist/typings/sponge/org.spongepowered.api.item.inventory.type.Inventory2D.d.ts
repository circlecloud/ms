declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        // @ts-ignore
                        interface Inventory2D extends org.spongepowered.api.item.inventory.type.OrderedInventory {
                            /**
                             * Gets and remove the stack at the supplied position in this Inventory.
                             */
                            // @ts-ignore
                             poll(pos: org.spongepowered.api.item.inventory.property.SlotPos): java.util.Optional;
                            /**
                             * Gets and remove the stack at the supplied position in this Inventory.
                             */
                            // @ts-ignore
                             poll(pos: org.spongepowered.api.item.inventory.property.SlotPos, limit: number): java.util.Optional;
                            /**
                             * Gets without removing the stack at the supplied position in this
                             * Inventory.
                             */
                            // @ts-ignore
                             peek(pos: org.spongepowered.api.item.inventory.property.SlotPos): java.util.Optional;
                            /**
                             * Gets without removing the stack at the supplied position in this
                             * Inventory.
                             */
                            // @ts-ignore
                             peek(pos: org.spongepowered.api.item.inventory.property.SlotPos, limit: number): java.util.Optional;
                            /**
                             * Sets the item in the specified slot.
                             */
                            // @ts-ignore
                             set(pos: org.spongepowered.api.item.inventory.property.SlotPos, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult;
                            /**
                             * Gets the {@link Slot} at the specified position.
                             */
                            // @ts-ignore
                             getSlot(pos: org.spongepowered.api.item.inventory.property.SlotPos): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
