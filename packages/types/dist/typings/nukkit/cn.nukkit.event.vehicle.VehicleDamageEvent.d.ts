declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleDamageEvent extends cn.nukkit.event.vehicle.VehicleEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: cn.nukkit.entity.Entity, attacker: cn.nukkit.entity.Entity, damage: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getAttacker(): cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public getDamage(): number;
                    // @ts-ignore
                    public setDamage(damage: number): void;
                }
            }
        }
    }
}
