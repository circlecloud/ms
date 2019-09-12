declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityTeleportEvent {
                    constructor(what: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the location that this entity moved from
                     */
                    public getFrom(): org.bukkit.Location;
                    /**
                     * Sets the location that this entity moved from
                     */
                    public setFrom(from: org.bukkit.Location): void;
                    /**
                     * Gets the location that this entity moved to
                     */
                    public getTo(): org.bukkit.Location;
                    /**
                     * Sets the location that this entity moved to
                     */
                    public setTo(to: org.bukkit.Location): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
