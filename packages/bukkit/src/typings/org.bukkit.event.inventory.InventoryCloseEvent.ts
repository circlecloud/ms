declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                class InventoryCloseEvent {
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    /**
                     * Returns the player involved in this event
                     */
                    public getPlayer(): org.bukkit.entity.HumanEntity;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
