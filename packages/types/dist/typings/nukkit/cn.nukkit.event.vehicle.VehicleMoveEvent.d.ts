declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleMoveEvent extends cn.nukkit.event.vehicle.VehicleEvent {
                    // @ts-ignore
                    constructor(vehicle: cn.nukkit.entity.Entity, from: cn.nukkit.level.Location, to: cn.nukkit.level.Location)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFrom(): cn.nukkit.level.Location;
                    // @ts-ignore
                    public getTo(): cn.nukkit.level.Location;
                }
            }
        }
    }
}
