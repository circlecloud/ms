declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleDamageEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, attacker: org.bukkit.entity.Entity, damage: number)
                    /**
                     * Gets the Entity that is attacking the vehicle
                     */
                    // @ts-ignore
                    public getAttacker(): org.bukkit.entity.Entity;
                    /**
                     * Gets the damage done to the vehicle
                     */
                    // @ts-ignore
                    public getDamage(): number;
                    /**
                     * Sets the damage done to the vehicle
                     */
                    // @ts-ignore
                    public setDamage(damage: number): void;
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
