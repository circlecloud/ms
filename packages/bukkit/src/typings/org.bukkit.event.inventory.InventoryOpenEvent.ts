declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryOpenEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    /**
                     * Returns the player involved in this event
                     */
                    public getPlayer(): org.bukkit.entity.HumanEntity;
                    /**
                     * Gets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins.
                     * <p>
                     * If an inventory open event is cancelled, the inventory screen will not
                     * show.
                     */
                    public isCancelled(): boolean;
                    /**
                     * Sets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins.
                     * <p>
                     * If an inventory open event is cancelled, the inventory screen will not
                     * show.
                     */
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
