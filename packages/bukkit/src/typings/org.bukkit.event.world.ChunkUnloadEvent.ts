declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                class ChunkUnloadEvent {
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
