// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityPortalEvent extends org.bukkit.event.entity.EntityTeleportEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
