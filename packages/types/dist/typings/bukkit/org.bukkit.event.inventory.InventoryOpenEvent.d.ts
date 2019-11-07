// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryOpenEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    /**
                     * Returns the player involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.HumanEntity;
                    /**
                     * Gets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins.
                     * <p>
                     * If an inventory open event is cancelled, the inventory screen will not
                     * show.
                     */
                    // @ts-ignore
                    public isCancelled(): boolean;
                    /**
                     * Sets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins.
                     * <p>
                     * If an inventory open event is cancelled, the inventory screen will not
                     * show.
                     */
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
