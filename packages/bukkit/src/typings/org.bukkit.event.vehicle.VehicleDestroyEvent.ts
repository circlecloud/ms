declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleDestroyEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    constructor(vehicle: org.bukkit.entity.Vehicle, attacker: org.bukkit.entity.Entity)
                    /**
                     * Gets the Entity that has destroyed the vehicle, potentially null
                     */
                    public getAttacker(): org.bukkit.entity.Entity;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
