declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace leveldb {
                    // @ts-ignore
                     class Chunk extends cn.nukkit.level.format.generic.BaseFullChunk {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, chunkX: number, chunkZ: number, terrain: number)
                        // @ts-ignore
                        constructor(providerClass: java.lang.Class, chunkX: number, chunkZ: number, terrain: number)
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, chunkX: number, chunkZ: number, terrain: number, entityData: java.util.List)
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, chunkX: number, chunkZ: number, terrain: number, entityData: java.util.List, tileData: java.util.List)
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, chunkX: number, chunkZ: number, terrain: number, entityData: java.util.List, tileData: java.util.List, extraData: java.util.Map)
                        // @ts-ignore
                        public static DATA_LENGTH: number;
                        // @ts-ignore
                        public getBlockId(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockId(x: number, y: number, z: number, id: number): void;
                        // @ts-ignore
                        public getBlockData(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockData(x: number, y: number, z: number, data: number): void;
                        // @ts-ignore
                        public getFullBlock(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public getAndSetBlock(x: number, y: number, z: number, block: cn.nukkit.block.Block): cn.nukkit.block.Block;
                        // @ts-ignore
                        public setBlock(x: number, y: number, z: number, blockId: number): boolean;
                        // @ts-ignore
                        public setBlock(x: number, y: number, z: number, blockId: number, meta: number): boolean;
                        // @ts-ignore
                        public getBlockSkyLight(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockSkyLight(x: number, y: number, z: number, level: number): void;
                        // @ts-ignore
                        public getBlockLight(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockLight(x: number, y: number, z: number, level: number): void;
                        // @ts-ignore
                        public isLightPopulated(): boolean;
                        // @ts-ignore
                        public setLightPopulated(): void;
                        // @ts-ignore
                        public setLightPopulated(value: boolean): void;
                        // @ts-ignore
                        public isPopulated(): boolean;
                        // @ts-ignore
                        public setPopulated(): void;
                        // @ts-ignore
                        public setPopulated(value: boolean): void;
                        // @ts-ignore
                        public isGenerated(): boolean;
                        // @ts-ignore
                        public setGenerated(): void;
                        // @ts-ignore
                        public setGenerated(value: boolean): void;
                        // @ts-ignore
                        public static fromBinary(data: number): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public static fromBinary(data: number, provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public static fromFastBinary(data: number): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public static fromFastBinary(data: number, provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public toFastBinary(): number[];
                        // @ts-ignore
                        public toBinary(): number[];
                        // @ts-ignore
                        public toBinary(saveExtra: boolean): number[];
                        // @ts-ignore
                        public static getEmptyChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.leveldb.Chunk;
                        // @ts-ignore
                        public static getEmptyChunk(chunkX: number, chunkZ: number, provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.leveldb.Chunk;
                    }
                }
            }
        }
    }
}
