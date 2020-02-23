declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityTeleportEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, from: cn.nukkit.level.Location, to: cn.nukkit.level.Location)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFrom(): cn.nukkit.level.Location;
                    // @ts-ignore
                    public setFrom(from: cn.nukkit.level.Location): void;
                    // @ts-ignore
                    public getTo(): cn.nukkit.level.Location;
                    // @ts-ignore
                    public setTo(to: cn.nukkit.level.Location): void;
                }
            }
        }
    }
}
