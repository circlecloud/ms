declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                class InventoryMoveItemEvent {
                    constructor(sourceInventory: org.bukkit.inventory.Inventory, itemStack: org.bukkit.inventory.ItemStack, destinationInventory: org.bukkit.inventory.Inventory, didSourceInitiate: boolean)
                    /**
                     * Gets the Inventory that the ItemStack is being taken from
                     */
                    public getSource(): org.bukkit.inventory.Inventory;
                    /**
                     * Gets the ItemStack being moved; if modified, the original item will not
                     * be removed from the source inventory.
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Sets the ItemStack being moved; if this is different from the original
                     * ItemStack, the original item will not be removed from the source
                     * inventory.
                     */
                    public setItem(itemStack: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets the Inventory that the ItemStack is being put into
                     */
                    public getDestination(): org.bukkit.inventory.Inventory;
                    /**
                     * Gets the Inventory that initiated the transfer. This will always be
                     * either the destination or source Inventory.
                     */
                    public getInitiator(): org.bukkit.inventory.Inventory;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
