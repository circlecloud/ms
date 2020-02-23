declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace generic {
                    // @ts-ignore
                    abstract class BaseLevelProvider extends java.lang.Object implements cn.nukkit.level.format.LevelProvider {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.Level, path: string)
                        // @ts-ignore
                        protected level: cn.nukkit.level.Level;
                        // @ts-ignore
                        protected path: string;
                        // @ts-ignore
                        protected levelData: cn.nukkit.nbt.tag.CompoundTag;
                        // @ts-ignore
                        protected lastRegion: java.util.concurrent.atomic.AtomicReference;
                        // @ts-ignore
                        protected regions: any;
                        // @ts-ignore
                        protected chunks: any;
                        // @ts-ignore
                        public abstract loadChunk(index: number, chunkX: number, chunkZ: number, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public size(): number;
                        // @ts-ignore
                        public unloadChunks(): void;
                        // @ts-ignore
                        public getGenerator(): string;
                        // @ts-ignore
                        public getGeneratorOptions(): java.util.Map;
                        // @ts-ignore
                        public getLoadedChunks(): java.util.Map;
                        // @ts-ignore
                        public isChunkLoaded(X: number, Z: number): boolean;
                        // @ts-ignore
                        public putChunk(index: number, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void;
                        // @ts-ignore
                        public isChunkLoaded(hash: number): boolean;
                        // @ts-ignore
                        public getRegion(x: number, z: number): cn.nukkit.level.format.generic.BaseRegionLoader;
                        // @ts-ignore
                        protected static getRegionIndexX(chunkX: number): number;
                        // @ts-ignore
                        protected static getRegionIndexZ(chunkZ: number): number;
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
                        public saveChunks(): void;
                        // @ts-ignore
                        public getLevelData(): cn.nukkit.nbt.tag.CompoundTag;
                        // @ts-ignore
                        public saveLevelData(): void;
                        // @ts-ignore
                        public updateLevelName(name: string): void;
                        // @ts-ignore
                        public loadChunk(chunkX: number, chunkZ: number): boolean;
                        // @ts-ignore
                        public loadChunk(chunkX: number, chunkZ: number, create: boolean): boolean;
                        // @ts-ignore
                        public unloadChunk(X: number, Z: number): boolean;
                        // @ts-ignore
                        public unloadChunk(X: number, Z: number, safe: boolean): boolean;
                        // @ts-ignore
                        public getChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public getLoadedChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public getLoadedChunk(hash: number): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public getChunk(chunkX: number, chunkZ: number, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public setChunk(chunkX: number, chunkZ: number, chunk: cn.nukkit.level.format.FullChunk): void;
                        // @ts-ignore
                        public isChunkPopulated(chunkX: number, chunkZ: number): boolean;
                        // @ts-ignore
                        public close(): void;
                        // @ts-ignore
                        public isChunkGenerated(chunkX: number, chunkZ: number): boolean;
                    }
                }
            }
        }
    }
}
