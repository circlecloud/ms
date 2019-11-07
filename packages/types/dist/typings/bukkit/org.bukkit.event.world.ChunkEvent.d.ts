declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                abstract class ChunkEvent extends org.bukkit.event.world.WorldEvent {
                    // @ts-ignore
                    constructor(chunk: org.bukkit.Chunk)
                    // @ts-ignore
                    protected chunk: org.bukkit.Chunk;
                    /**
                     * Gets the chunk being loaded/unloaded
                     */
                    // @ts-ignore
                    public getChunk(): org.bukkit.Chunk;
                }
            }
        }
    }
}
