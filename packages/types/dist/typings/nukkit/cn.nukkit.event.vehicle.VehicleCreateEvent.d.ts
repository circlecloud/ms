declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleCreateEvent extends cn.nukkit.event.vehicle.VehicleEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
