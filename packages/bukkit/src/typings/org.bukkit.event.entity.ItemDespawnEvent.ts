declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ItemDespawnEvent implements org.bukkit.event.Cancellable {
                    constructor(despawnee: org.bukkit.entity.Item, loc: org.bukkit.Location)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Item;
                    /**
                     * Gets the location at which the item is despawning.
                     */
                    public getLocation(): org.bukkit.Location;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
