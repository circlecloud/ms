declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class ChunkUnloadEvent extends org.bukkit.event.world.ChunkEvent {
                    constructor(chunk: org.bukkit.Chunk)
                    constructor(chunk: org.bukkit.Chunk, save: boolean)
                    /**
                     * Return whether this chunk will be saved to disk.
                     */
                    public isSaveChunk(): boolean;
                    /**
                     * Set whether this chunk will be saved to disk.
                     */
                    public setSaveChunk(saveChunk: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
