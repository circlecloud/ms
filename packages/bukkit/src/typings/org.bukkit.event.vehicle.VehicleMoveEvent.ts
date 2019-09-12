declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                class VehicleMoveEvent {
                    constructor(vehicle: org.bukkit.entity.Vehicle, from: org.bukkit.Location, to: org.bukkit.Location)
                    /**
                     * Get the previous position.
                     */
                    public getFrom(): org.bukkit.Location;
                    /**
                     * Get the next position.
                     */
                    public getTo(): org.bukkit.Location;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
