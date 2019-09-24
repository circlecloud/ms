declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ItemMergeEvent implements org.bukkit.event.Cancellable {
                    constructor(item: org.bukkit.entity.Item, target: org.bukkit.entity.Item)
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getEntity(): org.bukkit.entity.Item;
                    /**
                     * Gets the Item entity the main Item is being merged into.
                     */
                    public getTarget(): org.bukkit.entity.Item;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
