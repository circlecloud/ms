declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class ChunkPopulateEvent extends org.bukkit.event.world.ChunkEvent {
                    constructor(chunk: org.bukkit.Chunk)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
