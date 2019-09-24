declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityUnleashEvent extends org.bukkit.event.entity.EntityEvent {
                    constructor(entity: org.bukkit.entity.Entity, reason: org.bukkit.event.entity.EntityUnleashEvent.UnleashReason)
                    /**
                     * Returns the reason for the unleashing.
                     */
                    public getReason(): org.bukkit.event.entity.EntityUnleashEvent.UnleashReason;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
