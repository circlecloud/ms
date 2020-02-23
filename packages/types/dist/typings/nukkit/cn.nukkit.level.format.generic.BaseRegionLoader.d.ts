declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace generic {
                    // @ts-ignore
                    abstract class BaseRegionLoader extends java.lang.Object {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, regionX: number, regionZ: number, ext: string)
                        // @ts-ignore
                        public static VERSION: number;
                        // @ts-ignore
                        public static COMPRESSION_GZIP: number;
                        // @ts-ignore
                        public static COMPRESSION_ZLIB: number;
                        // @ts-ignore
                        public static MAX_SECTOR_LENGTH: number;
                        // @ts-ignore
                        public static COMPRESSION_LEVEL: number;
                        // @ts-ignore
                        protected x: number;
                        // @ts-ignore
                        protected z: number;
                        // @ts-ignore
                        protected lastSector: number;
                        // @ts-ignore
                        protected levelProvider: cn.nukkit.level.format.LevelProvider;
                        // @ts-ignore
                        protected locationTable: java.util.Map;
                        // @ts-ignore
                        public lastUsed: number;
                        // @ts-ignore
                        public compress(): void;
                        // @ts-ignore
                        public getRandomAccessFile(): java.io.RandomAccessFile;
                        // @ts-ignore
                        protected abstract isChunkGenerated(index: number): boolean;
                        // @ts-ignore
                        public abstract readChunk(x: number, z: number): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        protected abstract unserializeChunk(data: number): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public abstract chunkExists(x: number, z: number): boolean;
                        // @ts-ignore
                        protected abstract saveChunk(x: number, z: number, chunkData: number): void;
                        // @ts-ignore
                        public abstract removeChunk(x: number, z: number): void;
                        // @ts-ignore
                        public abstract writeChunk(chunk: cn.nukkit.level.format.FullChunk): void;
                        // @ts-ignore
                        public close(): void;
                        // @ts-ignore
                        protected abstract loadLocationTable(): void;
                        // @ts-ignore
                        public abstract doSlowCleanUp(): number;
                        // @ts-ignore
                        protected abstract writeLocationIndex(index: number): void;
                        // @ts-ignore
                        protected abstract createBlank(): void;
                        // @ts-ignore
                        public abstract getX(): number;
                        // @ts-ignore
                        public abstract getZ(): number;
                        // @ts-ignore
                        public getLocationIndexes(): java.lang.Integer[];
                    }
                }
            }
        }
    }
}
