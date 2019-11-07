// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleEntityCollisionEvent extends org.bukkit.event.vehicle.VehicleCollisionEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, entity: org.bukkit.entity.Entity)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Entity;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public isPickupCancelled(): boolean;
                    // @ts-ignore
                    public setPickupCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public isCollisionCancelled(): boolean;
                    // @ts-ignore
                    public setCollisionCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
