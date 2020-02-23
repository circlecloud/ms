declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace mcregion {
                    // @ts-ignore
                     class RegionLoader extends cn.nukkit.level.format.generic.BaseRegionLoader {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, regionX: number, regionZ: number)
                        // @ts-ignore
                        protected isChunkGenerated(index: number): boolean;
                        // @ts-ignore
                        public readChunk(x: number, z: number): cn.nukkit.level.format.mcregion.Chunk;
                        // @ts-ignore
                        protected unserializeChunk(data: number): cn.nukkit.level.format.mcregion.Chunk;
                        // @ts-ignore
                        public chunkExists(x: number, z: number): boolean;
                        // @ts-ignore
                        protected saveChunk(x: number, z: number, chunkData: number): void;
                        // @ts-ignore
                        public removeChunk(x: number, z: number): void;
                        // @ts-ignore
                        public writeChunk(chunk: cn.nukkit.level.format.FullChunk): void;
                        // @ts-ignore
                        protected static getChunkOffset(x: number, z: number): number;
                        // @ts-ignore
                        public close(): void;
                        // @ts-ignore
                        public doSlowCleanUp(): number;
                        // @ts-ignore
                        protected loadLocationTable(): void;
                        // @ts-ignore
                        protected writeLocationIndex(index: number): void;
                        // @ts-ignore
                        protected createBlank(): void;
                        // @ts-ignore
                        public getX(): number;
                        // @ts-ignore
                        public getZ(): number;
                    }
                }
            }
        }
    }
}
