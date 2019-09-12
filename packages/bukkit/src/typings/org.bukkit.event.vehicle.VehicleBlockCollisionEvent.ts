declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                class VehicleBlockCollisionEvent {
                    constructor(vehicle: org.bukkit.entity.Vehicle, block: org.bukkit.block.Block)
                    /**
                     * Gets the block the vehicle collided with
                     */
                    public getBlock(): org.bukkit.block.Block;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
