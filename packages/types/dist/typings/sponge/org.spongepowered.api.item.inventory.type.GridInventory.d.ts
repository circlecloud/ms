// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        // @ts-ignore
                        interface GridInventory extends org.spongepowered.api.item.inventory.type.Inventory2D {
                            /**
                             * Gets the number of columns in the inventory.
                             */
                            // @ts-ignore
                             getColumns(): number;
                            /**
                             * Gets the number of rows in the inventory.
                             */
                            // @ts-ignore
                             getRows(): number;
                            /**
                             * Returns the dimensions of this GridInventory as a {@link Vector2i}.
                             */
                            // @ts-ignore
                             getDimensions(): any /*Vector2i*/;
                            /**
                             * Gets and remove the stack at the supplied position in this Inventory.
                             */
                            // @ts-ignore
                             poll(x: number, y: number): java.util.Optional;
                            /**
                             * Gets and remove the stack at the supplied position in this Inventory.
                             */
                            // @ts-ignore
                             poll(x: number, y: number, limit: number): java.util.Optional;
                            /**
                             * Gets without removing the stack at the supplied position in this
                             * Inventory.
                             */
                            // @ts-ignore
                             peek(x: number, y: number): java.util.Optional;
                            /**
                             * Gets without removing the stack at the supplied position in this
                             * Inventory.
                             */
                            // @ts-ignore
                             peek(x: number, y: number, limit: number): java.util.Optional;
                            /**
                             * Sets the item in the specified slot.
                             */
                            // @ts-ignore
                             set(x: number, y: number, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult;
                            /**
                             * Gets the {@link Slot} at the specified position.
                             */
                            // @ts-ignore
                             getSlot(x: number, y: number): java.util.Optional;
                            /**
                             * Gets the row at the specified index.
                             */
                            // @ts-ignore
                             getRow(y: number): java.util.Optional;
                            /**
                             * Gets the column at the specified index.
                             */
                            // @ts-ignore
                             getColumn(x: number): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
