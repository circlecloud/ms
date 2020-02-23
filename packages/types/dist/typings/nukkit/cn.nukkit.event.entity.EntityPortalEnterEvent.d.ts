declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityPortalEnterEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, type: cn.nukkit.event.entity.EntityPortalEnterEvent.PortalType)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPortalType(): cn.nukkit.event.entity.EntityPortalEnterEvent.PortalType;
                }
            }
        }
    }
}
