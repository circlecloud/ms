declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                class ChunkPopulateEvent {
                    constructor(chunk: org.bukkit.Chunk)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
