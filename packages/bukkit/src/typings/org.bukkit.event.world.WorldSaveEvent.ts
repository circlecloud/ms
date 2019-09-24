declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class WorldSaveEvent extends org.bukkit.event.world.WorldEvent {
                    constructor(world: org.bukkit.World)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
