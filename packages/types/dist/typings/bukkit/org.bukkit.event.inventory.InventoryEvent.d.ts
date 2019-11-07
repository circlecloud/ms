declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    // @ts-ignore
                    protected transaction: org.bukkit.inventory.InventoryView;
                    /**
                     * Gets the primary Inventory involved in this transaction
                     */
                    // @ts-ignore
                    public getInventory(): org.bukkit.inventory.Inventory;
                    /**
                     * Gets the list of players viewing the primary (upper) inventory involved
                     * in this event
                     */
                    // @ts-ignore
                    public getViewers(): java.util.List;
                    /**
                     * Gets the view object itself
                     */
                    // @ts-ignore
                    public getView(): org.bukkit.inventory.InventoryView;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
