declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                class InventoryPickupItemEvent {
                    constructor(inventory: org.bukkit.inventory.Inventory, item: org.bukkit.entity.Item)
                    /**
                     * Gets the Inventory that picked up the item
                     */
                    public getInventory(): org.bukkit.inventory.Inventory;
                    /**
                     * Gets the Item entity that was picked up
                     */
                    public getItem(): org.bukkit.entity.Item;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
