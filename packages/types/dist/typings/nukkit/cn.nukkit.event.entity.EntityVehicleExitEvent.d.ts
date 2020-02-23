declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityVehicleExitEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, vehicle: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getVehicle(): cn.nukkit.entity.Entity;
                }
            }
        }
    }
}
