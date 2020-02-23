declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                // @ts-ignore
                interface LevelProvider {
                    // @ts-ignore
                     ORDER_YZX: number;
                    // @ts-ignore
                     ORDER_ZXY: number;
                    // @ts-ignore
                     requestChunkTask(X: number, Z: number): cn.nukkit.scheduler.AsyncTask;
                    // @ts-ignore
                     getPath(): string;
                    // @ts-ignore
                     getGenerator(): string;
                    // @ts-ignore
                     getGeneratorOptions(): java.util.Map;
                    // @ts-ignore
                     getLoadedChunk(X: number, Z: number): cn.nukkit.level.format.generic.BaseFullChunk;
                    // @ts-ignore
                     getLoadedChunk(hash: number): cn.nukkit.level.format.generic.BaseFullChunk;
                    // @ts-ignore
                     getChunk(X: number, Z: number): cn.nukkit.level.format.generic.BaseFullChunk;
                    // @ts-ignore
                     getChunk(X: number, Z: number, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk;
                    // @ts-ignore
                     getEmptyChunk(x: number, z: number): cn.nukkit.level.format.generic.BaseFullChunk;
                    // @ts-ignore
                     saveChunks(): void;
                    // @ts-ignore
                     saveChunk(X: number, Z: number): void;
                    // @ts-ignore
                     saveChunk(X: number, Z: number, chunk: cn.nukkit.level.format.FullChunk): void;
                    // @ts-ignore
                     unloadChunks(): void;
                    // @ts-ignore
                     loadChunk(X: number, Z: number): boolean;
                    // @ts-ignore
                     loadChunk(X: number, Z: number, create: boolean): boolean;
                    // @ts-ignore
                     unloadChunk(X: number, Z: number): boolean;
                    // @ts-ignore
                     unloadChunk(X: number, Z: number, safe: boolean): boolean;
                    // @ts-ignore
                     isChunkGenerated(X: number, Z: number): boolean;
                    // @ts-ignore
                     isChunkPopulated(X: number, Z: number): boolean;
                    // @ts-ignore
                     isChunkLoaded(X: number, Z: number): boolean;
                    // @ts-ignore
                     isChunkLoaded(hash: number): boolean;
                    // @ts-ignore
                     setChunk(chunkX: number, chunkZ: number, chunk: cn.nukkit.level.format.FullChunk): void;
                    // @ts-ignore
                     getName(): string;
                    // @ts-ignore
                     isRaining(): boolean;
                    // @ts-ignore
                     setRaining(raining: boolean): void;
                    // @ts-ignore
                     getRainTime(): number;
                    // @ts-ignore
                     setRainTime(rainTime: number): void;
                    // @ts-ignore
                     isThundering(): boolean;
                    // @ts-ignore
                     setThundering(thundering: boolean): void;
                    // @ts-ignore
                     getThunderTime(): number;
                    // @ts-ignore
                     setThunderTime(thunderTime: number): void;
                    // @ts-ignore
                     getCurrentTick(): number;
                    // @ts-ignore
                     setCurrentTick(currentTick: number): void;
                    // @ts-ignore
                     getTime(): number;
                    // @ts-ignore
                     setTime(value: number): void;
                    // @ts-ignore
                     getSeed(): number;
                    // @ts-ignore
                     setSeed(value: number): void;
                    // @ts-ignore
                     getSpawn(): cn.nukkit.math.Vector3;
                    // @ts-ignore
                     setSpawn(pos: cn.nukkit.math.Vector3): void;
                    // @ts-ignore
                     getLoadedChunks(): java.util.Map;
                    // @ts-ignore
                     doGarbageCollection(): void;
                    // @ts-ignore
                     doGarbageCollection(time: number): void;
                    // @ts-ignore
                     getLevel(): cn.nukkit.level.Level;
                    // @ts-ignore
                     close(): void;
                    // @ts-ignore
                     saveLevelData(): void;
                    // @ts-ignore
                     updateLevelName(name: string): void;
                    // @ts-ignore
                     getGamerules(): cn.nukkit.level.GameRules;
                    // @ts-ignore
                     setGameRules(rules: cn.nukkit.level.GameRules): void;
                }
            }
        }
    }
}
