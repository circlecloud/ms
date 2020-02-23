declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace mcregion {
                    // @ts-ignore
                     class McRegion extends cn.nukkit.level.format.generic.BaseLevelProvider {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.Level, path: string)
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
                        public requestChunkTask(x: number, z: number): cn.nukkit.scheduler.AsyncTask;
                        // @ts-ignore
                        public loadChunk(index: number, chunkX: number, chunkZ: number, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public getEmptyChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.mcregion.Chunk;
                        // @ts-ignore
                        public saveChunk(x: number, z: number): void;
                        // @ts-ignore
                        public saveChunk(x: number, z: number, chunk: cn.nukkit.level.format.FullChunk): void;
                        // @ts-ignore
                        public static createChunkSection(y: number): cn.nukkit.level.format.ChunkSection;
                        // @ts-ignore
                        protected loadRegion(x: number, z: number): cn.nukkit.level.format.generic.BaseRegionLoader;
                    }
                }
            }
        }
    }
}
