// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                abstract class VehicleEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle)
                    // @ts-ignore
                    protected vehicle: org.bukkit.entity.Vehicle;
                    /**
                     * Get the vehicle.
                     */
                    // @ts-ignore
                    public getVehicle(): org.bukkit.entity.Vehicle;
                }
            }
        }
    }
}
