declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryMoveItemEvent extends org.bukkit.event.Event implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sourceInventory: org.bukkit.inventory.Inventory, itemStack: org.bukkit.inventory.ItemStack, destinationInventory: org.bukkit.inventory.Inventory, didSourceInitiate: boolean)
                    /**
                     * Gets the Inventory that the ItemStack is being taken from
                     */
                    // @ts-ignore
                    public getSource(): org.bukkit.inventory.Inventory;
                    /**
                     * Gets the ItemStack being moved; if modified, the original item will not
                     * be removed from the source inventory.
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Sets the ItemStack being moved; if this is different from the original
                     * ItemStack, the original item will not be removed from the source
                     * inventory.
                     */
                    // @ts-ignore
                    public setItem(itemStack: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets the Inventory that the ItemStack is being put into
                     */
                    // @ts-ignore
                    public getDestination(): org.bukkit.inventory.Inventory;
                    /**
                     * Gets the Inventory that initiated the transfer. This will always be
                     * either the destination or source Inventory.
                     */
                    // @ts-ignore
                    public getInitiator(): org.bukkit.inventory.Inventory;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
