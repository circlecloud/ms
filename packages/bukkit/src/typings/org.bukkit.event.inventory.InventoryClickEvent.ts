declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryClickEvent {
                    constructor(view: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction)
                    constructor(view: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction, key: number)
                    /**
                     * Gets the type of slot that was clicked.
                     */
                    public getSlotType(): org.bukkit.event.inventory.InventoryType.SlotType;
                    /**
                     * Gets the current ItemStack on the cursor.
                     */
                    public getCursor(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the ItemStack currently in the clicked slot.
                     */
                    public getCurrentItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets whether or not the ClickType for this event represents a right
                     * click.
                     */
                    public isRightClick(): boolean;
                    /**
                     * Gets whether or not the ClickType for this event represents a left
                     * click.
                     */
                    public isLeftClick(): boolean;
                    /**
                     * Gets whether the ClickType for this event indicates that the key was
                     * pressed down when the click was made.
                     */
                    public isShiftClick(): boolean;
                    /**
                     * Sets the item on the cursor.
                     */
                    public setCursor(stack: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Sets the ItemStack currently in the clicked slot.
                     */
                    public setCurrentItem(stack: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets the inventory corresponding to the clicked slot.
                     */
                    public getClickedInventory(): org.bukkit.inventory.Inventory;
                    /**
                     * The slot number that was clicked, ready for passing to
                     * {@link Inventory#getItem(int)}. Note that there may be two slots with
                     * the same slot number, since a view links two different inventories.
                     */
                    public getSlot(): number;
                    /**
                     * The raw slot number clicked, ready for passing to {@link InventoryView
                     * #getItem(int)} This slot number is unique for the view.
                     */
                    public getRawSlot(): number;
                    /**
                     * If the ClickType is NUMBER_KEY, this method will return the index of
                     * the pressed key (0-8).
                     */
                    public getHotbarButton(): number;
                    /**
                     * Gets the InventoryAction that triggered this event.
                     * <p>
                     * This action cannot be changed, and represents what the normal outcome
                     * of the event will be. To change the behavior of this
                     * InventoryClickEvent, changes must be manually applied.
                     */
                    public getAction(): org.bukkit.event.inventory.InventoryAction;
                    /**
                     * Gets the ClickType for this event.
                     * <p>
                     * This is insulated against changes to the inventory by other plugins.
                     */
                    public getClick(): org.bukkit.event.inventory.ClickType;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
