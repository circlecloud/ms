declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                class WorldLoadEvent {
                    constructor(world: org.bukkit.World)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
