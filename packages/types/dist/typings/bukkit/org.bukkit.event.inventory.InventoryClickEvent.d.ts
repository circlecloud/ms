declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryClickEvent extends org.bukkit.event.inventory.InventoryInteractEvent {
                    // @ts-ignore
                    constructor(view: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction)
                    // @ts-ignore
                    constructor(view: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction, key: number)
                    /**
                     * Gets the type of slot that was clicked.
                     */
                    // @ts-ignore
                    public getSlotType(): org.bukkit.event.inventory.InventoryType.SlotType;
                    /**
                     * Gets the current ItemStack on the cursor.
                     */
                    // @ts-ignore
                    public getCursor(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the ItemStack currently in the clicked slot.
                     */
                    // @ts-ignore
                    public getCurrentItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets whether or not the ClickType for this event represents a right
                     * click.
                     */
                    // @ts-ignore
                    public isRightClick(): boolean;
                    /**
                     * Gets whether or not the ClickType for this event represents a left
                     * click.
                     */
                    // @ts-ignore
                    public isLeftClick(): boolean;
                    /**
                     * Gets whether the ClickType for this event indicates that the key was
                     * pressed down when the click was made.
                     */
                    // @ts-ignore
                    public isShiftClick(): boolean;
                    /**
                     * Sets the item on the cursor.
                     */
                    // @ts-ignore
                    public setCursor(stack: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Sets the ItemStack currently in the clicked slot.
                     */
                    // @ts-ignore
                    public setCurrentItem(stack: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets the inventory corresponding to the clicked slot.
                     */
                    // @ts-ignore
                    public getClickedInventory(): org.bukkit.inventory.Inventory;
                    /**
                     * The slot number that was clicked, ready for passing to
                     * {@link Inventory#getItem(int)}. Note that there may be two slots with
                     * the same slot number, since a view links two different inventories.
                     */
                    // @ts-ignore
                    public getSlot(): number;
                    /**
                     * The raw slot number clicked, ready for passing to {@link InventoryView
                     * #getItem(int)} This slot number is unique for the view.
                     */
                    // @ts-ignore
                    public getRawSlot(): number;
                    /**
                     * If the ClickType is NUMBER_KEY, this method will return the index of
                     * the pressed key (0-8).
                     */
                    // @ts-ignore
                    public getHotbarButton(): number;
                    /**
                     * Gets the InventoryAction that triggered this event.
                     * <p>
                     * This action cannot be changed, and represents what the normal outcome
                     * of the event will be. To change the behavior of this
                     * InventoryClickEvent, changes must be manually applied.
                     */
                    // @ts-ignore
                    public getAction(): org.bukkit.event.inventory.InventoryAction;
                    /**
                     * Gets the ClickType for this event.
                     * <p>
                     * This is insulated against changes to the inventory by other plugins.
                     */
                    // @ts-ignore
                    public getClick(): org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
