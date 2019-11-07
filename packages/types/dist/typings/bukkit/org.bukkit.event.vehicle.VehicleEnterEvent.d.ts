// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleEnterEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, entered: org.bukkit.entity.Entity)
                    /**
                     * Gets the Entity that entered the vehicle.
                     */
                    // @ts-ignore
                    public getEntered(): org.bukkit.entity.Entity;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
