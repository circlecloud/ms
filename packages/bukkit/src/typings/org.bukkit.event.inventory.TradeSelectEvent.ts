declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class TradeSelectEvent extends org.bukkit.event.inventory.InventoryInteractEvent {
                    constructor(transaction: org.bukkit.inventory.InventoryView, newIndex: number)
                    /**
                     * Used to get the index of the trade the player clicked on.
                     */
                    public getIndex(): number;
                    public getInventory(): org.bukkit.inventory.MerchantInventory;
                    /**
                     * Get the Merchant involved.
                     */
                    public getMerchant(): org.bukkit.inventory.Merchant;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
