declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleMoveEvent extends org.bukkit.event.vehicle.VehicleEvent {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, from: org.bukkit.Location, to: org.bukkit.Location)
                    /**
                     * Get the previous position.
                     */
                    // @ts-ignore
                    public getFrom(): org.bukkit.Location;
                    /**
                     * Get the next position.
                     */
                    // @ts-ignore
                    public getTo(): org.bukkit.Location;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
