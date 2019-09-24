declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleExitEvent implements org.bukkit.event.Cancellable {
                    constructor(vehicle: org.bukkit.entity.Vehicle, exited: org.bukkit.entity.LivingEntity)
                    /**
                     * Get the living entity that exited the vehicle.
                     */
                    public getExited(): org.bukkit.entity.LivingEntity;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
