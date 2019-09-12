declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntitySpawnEvent {
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
