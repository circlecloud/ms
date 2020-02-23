declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class EntityExitVehicleEvent extends cn.nukkit.event.vehicle.VehicleEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(riding: cn.nukkit.entity.Entity, vehicle: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public isPlayer(): boolean;
                }
            }
        }
    }
}
