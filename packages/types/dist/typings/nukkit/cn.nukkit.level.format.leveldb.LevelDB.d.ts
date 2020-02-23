declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace leveldb {
                    // @ts-ignore
                     class LevelDB extends java.lang.Object implements cn.nukkit.level.format.LevelProvider {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.Level, path: string)
                        // @ts-ignore
                        protected chunks: java.util.Map;
                        // @ts-ignore
                        protected db: DB;
                        // @ts-ignore
                        protected level: cn.nukkit.level.Level;
                        // @ts-ignore
                        protected path: string;
                        // @ts-ignore
                        protected levelData: cn.nukkit.nbt.tag.CompoundTag;
                        // @ts-ignore
                        public static getProviderName(): string;
                        // @ts-ignore
                        public static getProviderOrder(): number;
                        // @ts-ignore
                        public static usesChunkSection(): boolean;
                        // @ts-ignore
                        public static isValid(path: string): boolean;
                        // @ts-ignore
                        public static generate(path: string, name: string, seed: number, generator: java.lang.Class): void;
                        // @ts-ignore
                        public static generate(path: string, name: string, seed: number, generator: java.lang.Class, options: java.util.Map): void;
                        // @ts-ignore
                        public saveLevelData(): void;
                        // @ts-ignore
                        public getEmptyChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public requestChunkTask(x: number, z: number): cn.nukkit.scheduler.AsyncTask;
                        // @ts-ignore
                        public unloadChunks(): void;
                        // @ts-ignore
                        public getGenerator(): string;
                        // @ts-ignore
                        public getGeneratorOptions(): java.util.Map;
                        // @ts-ignore
                        public getLoadedChunk(X: number, Z: number): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public getLoadedChunk(hash: number): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public getLoadedChunks(): java.util.Map;
                        // @ts-ignore
                        public isChunkLoaded(x: number, z: number): boolean;
                        // @ts-ignore
                        public isChunkLoaded(hash: number): boolean;
                        // @ts-ignore
                        public saveChunks(): void;
                        // @ts-ignore
                        public loadChunk(x: number, z: number): boolean;
                        // @ts-ignore
                        public loadChunk(x: number, z: number, create: boolean): boolean;
                        // @ts-ignore
                        public readChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public unloadChunk(x: number, z: number): boolean;
                        // @ts-ignore
                        public unloadChunk(x: number, z: number, safe: boolean): boolean;
                        // @ts-ignore
                        public saveChunk(x: number, z: number): void;
                        // @ts-ignore
                        public saveChunk(x: number, z: number, chunk: cn.nukkit.level.format.FullChunk): void;
                        // @ts-ignore
                        public getChunk(x: number, z: number): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public getChunk(x: number, z: number, create: boolean): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public getDatabase(): DB;
                        // @ts-ignore
                        public setChunk(chunkX: number, chunkZ: number, chunk: cn.nukkit.level.format.FullChunk): void;
                        // @ts-ignore
                        public static createChunkSection(y: number): cn.nukkit.level.format.ChunkSection;
                        // @ts-ignore
                        public isChunkGenerated(x: number, z: number): boolean;
                        // @ts-ignore
                        public isChunkPopulated(x: number, z: number): boolean;
                        // @ts-ignore
                        public close(): void;
                        // @ts-ignore
                        public getPath(): string;
                        // @ts-ignore
                        public getServer(): cn.nukkit.Server;
                        // @ts-ignore
                        public getLevel(): cn.nukkit.level.Level;
                        // @ts-ignore
                        public getName(): string;
                        // @ts-ignore
                        public isRaining(): boolean;
                        // @ts-ignore
                        public setRaining(raining: boolean): void;
                        // @ts-ignore
                        public getRainTime(): number;
                        // @ts-ignore
                        public setRainTime(rainTime: number): void;
                        // @ts-ignore
                        public isThundering(): boolean;
                        // @ts-ignore
                        public setThundering(thundering: boolean): void;
                        // @ts-ignore
                        public getThunderTime(): number;
                        // @ts-ignore
                        public setThunderTime(thunderTime: number): void;
                        // @ts-ignore
                        public getCurrentTick(): number;
                        // @ts-ignore
                        public setCurrentTick(currentTick: number): void;
                        // @ts-ignore
                        public getTime(): number;
                        // @ts-ignore
                        public setTime(value: number): void;
                        // @ts-ignore
                        public getSeed(): number;
                        // @ts-ignore
                        public setSeed(value: number): void;
                        // @ts-ignore
                        public getSpawn(): cn.nukkit.math.Vector3;
                        // @ts-ignore
                        public setSpawn(pos: cn.nukkit.math.Vector3): void;
                        // @ts-ignore
                        public getGamerules(): cn.nukkit.level.GameRules;
                        // @ts-ignore
                        public setGameRules(rules: cn.nukkit.level.GameRules): void;
                        // @ts-ignore
                        public doGarbageCollection(): void;
                        // @ts-ignore
                        public getLevelData(): cn.nukkit.nbt.tag.CompoundTag;
                        // @ts-ignore
                        public updateLevelName(name: string): void;
                        // @ts-ignore
                        public getTerrainKeys(): byte[][];
                    }
                }
            }
        }
    }
}
