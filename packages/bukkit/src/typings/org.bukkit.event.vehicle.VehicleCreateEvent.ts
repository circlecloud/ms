declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                class VehicleCreateEvent {
                    constructor(vehicle: org.bukkit.entity.Vehicle)
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
