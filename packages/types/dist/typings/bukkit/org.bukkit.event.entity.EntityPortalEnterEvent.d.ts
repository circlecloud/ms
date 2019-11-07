// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityPortalEnterEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, location: org.bukkit.Location)
                    /**
                     * Gets the portal block the entity is touching
                     */
                    // @ts-ignore
                    public getLocation(): org.bukkit.Location;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
