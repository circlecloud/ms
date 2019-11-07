declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class SpawnChangeEvent extends org.bukkit.event.world.WorldEvent {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, previousLocation: org.bukkit.Location)
                    /**
                     * Gets the previous spawn location
                     */
                    // @ts-ignore
                    public getPreviousLocation(): org.bukkit.Location;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
