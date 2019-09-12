declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                class VehicleEnterEvent {
                    constructor(vehicle: org.bukkit.entity.Vehicle, entered: org.bukkit.entity.Entity)
                    /**
                     * Gets the Entity that entered the vehicle.
                     */
                    public getEntered(): org.bukkit.entity.Entity;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
