declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                abstract class VehicleEvent extends org.bukkit.event.Event {
                    constructor(vehicle: org.bukkit.entity.Vehicle)
                    protected vehicle: org.bukkit.entity.Vehicle;
                    /**
                     * Get the vehicle.
                     */
                    public getVehicle(): org.bukkit.entity.Vehicle;
                }
            }
        }
    }
}
