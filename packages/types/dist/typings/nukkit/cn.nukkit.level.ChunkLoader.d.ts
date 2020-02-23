declare namespace cn {
    namespace nukkit {
        namespace level {
            // @ts-ignore
            interface ChunkLoader {
                // @ts-ignore
                 getLoaderId(): number;
                // @ts-ignore
                 isLoaderActive(): boolean;
                // @ts-ignore
                 getPosition(): cn.nukkit.level.Position;
                // @ts-ignore
                 getX(): number;
                // @ts-ignore
                 getZ(): number;
                // @ts-ignore
                 getLevel(): cn.nukkit.level.Level;
                // @ts-ignore
                 onChunkChanged(chunk: cn.nukkit.level.format.FullChunk): void;
                // @ts-ignore
                 onChunkLoaded(chunk: cn.nukkit.level.format.FullChunk): void;
                // @ts-ignore
                 onChunkUnloaded(chunk: cn.nukkit.level.format.FullChunk): void;
                // @ts-ignore
                 onChunkPopulated(chunk: cn.nukkit.level.format.FullChunk): void;
                // @ts-ignore
                 onBlockChanged(block: cn.nukkit.math.Vector3): void;
            }
        }
    }
}
