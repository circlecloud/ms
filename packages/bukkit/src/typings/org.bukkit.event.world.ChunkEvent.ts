declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                abstract class ChunkEvent extends org.bukkit.event.world.WorldEvent {
                    constructor(chunk: org.bukkit.Chunk)
                    protected chunk: org.bukkit.Chunk;
                    /**
                     * Gets the chunk being loaded/unloaded
                     */
                    public getChunk(): org.bukkit.Chunk;
                }
            }
        }
    }
}
