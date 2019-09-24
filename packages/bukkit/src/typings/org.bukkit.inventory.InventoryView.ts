declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            abstract class InventoryView {
                constructor()
                public static OUTSIDE: number;
                /**
                 * Get the upper inventory involved in this transaction.
                 */
                public abstract getTopInventory(): org.bukkit.inventory.Inventory;
                /**
                 * Get the lower inventory involved in this transaction.
                 */
                public abstract getBottomInventory(): org.bukkit.inventory.Inventory;
                /**
                 * Get the player viewing.
                 */
                public abstract getPlayer(): org.bukkit.entity.HumanEntity;
                /**
                 * Determine the type of inventory involved in the transaction. This
                 * indicates the window style being shown. It will never return PLAYER,
                 * since that is common to all windows.
                 */
                public abstract getType(): org.bukkit.event.inventory.InventoryType;
                /**
                 * Sets one item in this inventory view by its raw slot ID.
                 * <p>
                 * Note: If slot ID -999 is chosen, it may be expected that the item is
                 * dropped on the ground. This is not required behaviour, however.
                 */
                public setItem(slot: number, item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets one item in this inventory view by its raw slot ID.
                 */
                public getItem(slot: number): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item on the cursor of one of the viewing players.
                 */
                public setCursor(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the item on the cursor of one of the viewing players.
                 */
                public getCursor(): org.bukkit.inventory.ItemStack;
                /**
                 * Gets the inventory corresponding to the given raw slot ID.
                 * If the slot ID is {@link #OUTSIDE} null will be returned, otherwise
                 * behaviour for illegal and negative slot IDs is undefined.
                 * May be used with {@link #convertSlot(int)} to directly index an
                 * underlying inventory.
                 */
                public getInventory(rawSlot: number): org.bukkit.inventory.Inventory;
                /**
                 * Converts a raw slot ID into its local slot ID into whichever of the two
                 * inventories the slot points to.
                 * <p>
                 * If the raw slot refers to the upper inventory, it will be returned
                 * unchanged and thus be suitable for getTopInventory().getItem(); if it
                 * refers to the lower inventory, the output will differ from the input
                 * and be suitable for getBottomInventory().getItem().
                 */
                public convertSlot(rawSlot: number): number;
                /**
                 * Determine the type of the slot by its raw slot ID.
                 * <p>
                 * If the type of the slot is unknown, then
                 * {@link InventoryType.SlotType#CONTAINER} will be returned.
                 */
                public getSlotType(slot: number): org.bukkit.event.inventory.InventoryType.SlotType;
                /**
                 * Closes the inventory view.
                 */
                public close(): void;
                /**
                 * Check the total number of slots in this view, combining the upper and
                 * lower inventories.
                 * <p>
                 * Note though that it's possible for this to be greater than the sum of
                 * the two inventories if for example some slots are not being used.
                 */
                public countSlots(): number;
                /**
                 * Sets an extra property of this inventory if supported by that
                 * inventory, for example the state of a progress bar.
                 */
                public setProperty(prop: org.bukkit.inventory.InventoryView.Property, value: number): boolean;
                /**
                 * Get the title of this inventory window.
                 */
                public abstract getTitle(): string;
            }
        }
    }
}
