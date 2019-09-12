declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                class VehicleEntityCollisionEvent {
                    constructor(vehicle: org.bukkit.entity.Vehicle, entity: org.bukkit.entity.Entity)
                    public getEntity(): org.bukkit.entity.Entity;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public isPickupCancelled(): boolean;
                    public setPickupCancelled(cancel: boolean): void;
                    public isCollisionCancelled(): boolean;
                    public setCollisionCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
