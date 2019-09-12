declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                abstract class VehicleEvent {
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
