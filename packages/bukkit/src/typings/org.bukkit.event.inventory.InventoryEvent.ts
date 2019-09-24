declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryEvent {
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    protected transaction: org.bukkit.inventory.InventoryView;
                    /**
                     * Gets the primary Inventory involved in this transaction
                     */
                    public getInventory(): org.bukkit.inventory.Inventory;
                    /**
                     * Gets the list of players viewing the primary (upper) inventory involved
                     * in this event
                     */
                    public getViewers(): any[] /*java.util.List*/;
                    /**
                     * Gets the view object itself
                     */
                    public getView(): org.bukkit.inventory.InventoryView;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
