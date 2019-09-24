declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class SpawnChangeEvent {
                    constructor(world: org.bukkit.World, previousLocation: org.bukkit.Location)
                    /**
                     * Gets the previous spawn location
                     */
                    public getPreviousLocation(): org.bukkit.Location;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
