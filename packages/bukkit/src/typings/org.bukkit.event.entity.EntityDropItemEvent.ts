declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityDropItemEvent {
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
