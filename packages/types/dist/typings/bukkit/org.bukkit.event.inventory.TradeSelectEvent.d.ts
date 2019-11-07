declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class TradeSelectEvent extends org.bukkit.event.inventory.InventoryInteractEvent {
                    // @ts-ignore
                    constructor(transaction: org.bukkit.inventory.InventoryView, newIndex: number)
                    /**
                     * Used to get the index of the trade the player clicked on.
                     */
                    // @ts-ignore
                    public getIndex(): number;
                    // @ts-ignore
                    public getInventory(): org.bukkit.inventory.MerchantInventory;
                    /**
                     * Get the Merchant involved.
                     */
                    // @ts-ignore
                    public getMerchant(): org.bukkit.inventory.Merchant;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
