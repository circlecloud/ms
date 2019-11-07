// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ItemMergeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(item: org.bukkit.entity.Item, target: org.bukkit.entity.Item)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void;
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Item;
                    /**
                     * Gets the Item entity the main Item is being merged into.
                     */
                    // @ts-ignore
                    public getTarget(): org.bukkit.entity.Item;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
