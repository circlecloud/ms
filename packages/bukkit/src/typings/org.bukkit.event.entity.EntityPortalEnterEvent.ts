declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityPortalEnterEvent {
                    constructor(entity: org.bukkit.entity.Entity, location: org.bukkit.Location)
                    /**
                     * Gets the portal block the entity is touching
                     */
                    public getLocation(): org.bukkit.Location;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
