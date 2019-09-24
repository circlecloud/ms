declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDropItemEvent implements org.bukkit.event.Cancellable {
                    constructor(entity: org.bukkit.entity.Entity, drop: org.bukkit.entity.Item)
                    /**
                     * Gets the Item created by the entity
                     */
                    public getItemDrop(): org.bukkit.entity.Item;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
