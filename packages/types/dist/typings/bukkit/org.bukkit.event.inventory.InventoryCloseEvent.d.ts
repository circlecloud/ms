// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryCloseEvent extends org.bukkit.event.inventory.InventoryEvent {
                    // @ts-ignore
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    /**
                     * Returns the player involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.HumanEntity;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
