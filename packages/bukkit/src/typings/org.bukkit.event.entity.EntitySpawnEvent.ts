declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntitySpawnEvent implements org.bukkit.event.Cancellable {
                    constructor(spawnee: org.bukkit.entity.Entity)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the location at which the entity is spawning.
                     */
                    public getLocation(): org.bukkit.Location;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
