declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleUpdateEvent {
                    constructor(vehicle: org.bukkit.entity.Vehicle)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
