declare namespace cn {
    namespace nukkit {
        namespace level {
            // @ts-ignore
            interface ChunkManager {
                // @ts-ignore
                 getBlockIdAt(x: number, y: number, z: number): number;
                // @ts-ignore
                 setBlockFullIdAt(x: number, y: number, z: number, fullId: number): void;
                // @ts-ignore
                 setBlockIdAt(x: number, y: number, z: number, id: number): void;
                // @ts-ignore
                 setBlockAt(x: number, y: number, z: number, id: number): void;
                // @ts-ignore
                 setBlockAt(x: number, y: number, z: number, id: number, data: number): void;
                // @ts-ignore
                 getBlockDataAt(x: number, y: number, z: number): number;
                // @ts-ignore
                 setBlockDataAt(x: number, y: number, z: number, data: number): void;
                // @ts-ignore
                 getChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.generic.BaseFullChunk;
                // @ts-ignore
                 setChunk(chunkX: number, chunkZ: number): void;
                // @ts-ignore
                 setChunk(chunkX: number, chunkZ: number, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void;
                // @ts-ignore
                 getSeed(): number;
            }
        }
    }
}
