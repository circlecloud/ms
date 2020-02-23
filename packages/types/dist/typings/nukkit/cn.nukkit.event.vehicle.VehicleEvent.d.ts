declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                abstract class VehicleEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(vehicle: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public getVehicle(): cn.nukkit.entity.Entity;
                }
            }
        }
    }
}
