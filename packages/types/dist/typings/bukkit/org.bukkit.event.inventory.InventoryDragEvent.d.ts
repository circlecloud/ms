declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryDragEvent extends org.bukkit.event.inventory.InventoryInteractEvent {
                    // @ts-ignore
                    constructor(what: org.bukkit.inventory.InventoryView, newCursor: org.bukkit.inventory.ItemStack, oldCursor: org.bukkit.inventory.ItemStack, right: boolean, slots: java.util.Map)
                    /**
                     * Gets all items to be added to the inventory in this drag.
                     */
                    // @ts-ignore
                    public getNewItems(): java.util.Map;
                    /**
                     * Gets the raw slot ids to be changed in this drag.
                     */
                    // @ts-ignore
                    public getRawSlots(): java.util.Set;
                    /**
                     * Gets the slots to be changed in this drag.
                     */
                    // @ts-ignore
                    public getInventorySlots(): java.util.Set;
                    /**
                     * Gets the result cursor after the drag is done. The returned value is
                     * mutable.
                     */
                    // @ts-ignore
                    public getCursor(): org.bukkit.inventory.ItemStack;
                    /**
                     * Sets the result cursor after the drag is done.
                     * <p>
                     * Changing this item stack changes the cursor item. Note that changing
                     * the affected "dragged" slots does not change this ItemStack, nor does
                     * changing this ItemStack affect the "dragged" slots.
                     */
                    // @ts-ignore
                    public setCursor(newCursor: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets an ItemStack representing the cursor prior to any modifications
                     * as a result of this drag.
                     */
                    // @ts-ignore
                    public getOldCursor(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the DragType that describes the behavior of ItemStacks placed
                     * after this InventoryDragEvent.
                     * <p>
                     * The ItemStacks and the raw slots that they're being applied to can be
                     * found using {@link #getNewItems()}.
                     */
                    // @ts-ignore
                    public getType(): org.bukkit.event.inventory.DragType;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
