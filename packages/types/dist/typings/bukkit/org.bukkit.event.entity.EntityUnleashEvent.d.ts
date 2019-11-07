// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityUnleashEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, reason: org.bukkit.event.entity.EntityUnleashEvent.UnleashReason)
                    /**
                     * Returns the reason for the unleashing.
                     */
                    // @ts-ignore
                    public getReason(): org.bukkit.event.entity.EntityUnleashEvent.UnleashReason;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
