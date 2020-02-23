declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                // @ts-ignore
                 class SingleChunkManager extends cn.nukkit.level.generator.SimpleChunkManager {
                    // @ts-ignore
                    constructor(seed: number)
                    // @ts-ignore
                    public getChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.generic.BaseFullChunk;
                    // @ts-ignore
                    public setChunk(chunkX: number, chunkZ: number, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void;
                    // @ts-ignore
                    public cleanChunks(seed: number): void;
                }
            }
        }
    }
}
