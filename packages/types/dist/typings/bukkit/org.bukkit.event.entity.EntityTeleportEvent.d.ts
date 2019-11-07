// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityTeleportEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the location that this entity moved from
                     */
                    // @ts-ignore
                    public getFrom(): org.bukkit.Location;
                    /**
                     * Sets the location that this entity moved from
                     */
                    // @ts-ignore
                    public setFrom(from: org.bukkit.Location): void;
                    /**
                     * Gets the location that this entity moved to
                     */
                    // @ts-ignore
                    public getTo(): org.bukkit.Location;
                    /**
                     * Sets the location that this entity moved to
                     */
                    // @ts-ignore
                    public setTo(to: org.bukkit.Location): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
