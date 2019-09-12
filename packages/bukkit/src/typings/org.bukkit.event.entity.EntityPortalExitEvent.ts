declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityPortalExitEvent {
                    constructor(entity: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location, before: org.bukkit.util.Vector, after: org.bukkit.util.Vector)
                    /**
                     * Gets a copy of the velocity that the entity has before entering the
                     * portal.
                     */
                    public getBefore(): org.bukkit.util.Vector;
                    /**
                     * Gets a copy of the velocity that the entity will have after exiting the
                     * portal.
                     */
                    public getAfter(): org.bukkit.util.Vector;
                    /**
                     * Sets the velocity that the entity will have after exiting the portal.
                     */
                    public setAfter(after: org.bukkit.util.Vector): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
