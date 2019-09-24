declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityPortalEvent {
                    constructor(entity: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
