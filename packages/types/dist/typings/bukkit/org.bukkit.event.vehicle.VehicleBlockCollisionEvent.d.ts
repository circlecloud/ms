// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                // @ts-ignore
                 class VehicleBlockCollisionEvent extends org.bukkit.event.vehicle.VehicleCollisionEvent {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, block: org.bukkit.block.Block)
                    /**
                     * Gets the block the vehicle collided with
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
