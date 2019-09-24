declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleDamageEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    constructor(vehicle: org.bukkit.entity.Vehicle, attacker: org.bukkit.entity.Entity, damage: number)
                    /**
                     * Gets the Entity that is attacking the vehicle
                     */
                    public getAttacker(): org.bukkit.entity.Entity;
                    /**
                     * Gets the damage done to the vehicle
                     */
                    public getDamage(): number;
                    /**
                     * Sets the damage done to the vehicle
                     */
                    public setDamage(damage: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
