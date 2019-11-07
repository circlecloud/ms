declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class ChunkLoadEvent extends org.bukkit.event.world.ChunkEvent {
                    // @ts-ignore
                    constructor(chunk: org.bukkit.Chunk, newChunk: boolean)
                    /**
                     * Gets if this chunk was newly created or not.
                     * <p>
                     * Note that if this chunk is new, it will not be populated at this time.
                     */
                    // @ts-ignore
                    public isNewChunk(): boolean;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
