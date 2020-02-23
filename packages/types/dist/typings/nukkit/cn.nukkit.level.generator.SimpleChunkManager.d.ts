declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                // @ts-ignore
                abstract class SimpleChunkManager extends java.lang.Object implements cn.nukkit.level.ChunkManager {
                    // @ts-ignore
                    constructor(seed: number)
                    // @ts-ignore
                    protected seed: number;
                    // @ts-ignore
                    public getBlockIdAt(x: number, y: number, z: number): number;
                    // @ts-ignore
                    public setBlockIdAt(x: number, y: number, z: number, id: number): void;
                    // @ts-ignore
                    public setBlockAt(x: number, y: number, z: number, id: number, data: number): void;
                    // @ts-ignore
                    public setBlockFullIdAt(x: number, y: number, z: number, fullId: number): void;
                    // @ts-ignore
                    public getBlockDataAt(x: number, y: number, z: number): number;
                    // @ts-ignore
                    public setBlockDataAt(x: number, y: number, z: number, data: number): void;
                    // @ts-ignore
                    public setChunk(chunkX: number, chunkZ: number): void;
                    // @ts-ignore
                    public getSeed(): number;
                    // @ts-ignore
                    public setSeed(seed: number): void;
                    // @ts-ignore
                    public cleanChunks(seed: number): void;
                }
            }
        }
    }
}
