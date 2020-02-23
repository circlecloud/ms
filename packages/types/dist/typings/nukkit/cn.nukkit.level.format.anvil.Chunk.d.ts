declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    // @ts-ignore
                     class Chunk extends cn.nukkit.level.format.generic.BaseChunk {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider)
                        // @ts-ignore
                        constructor(providerClass: java.lang.Class)
                        // @ts-ignore
                        constructor(providerClass: java.lang.Class, nbt: cn.nukkit.nbt.tag.CompoundTag)
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, nbt: cn.nukkit.nbt.tag.CompoundTag)
                        // @ts-ignore
                        protected inhabitedTime: number;
                        // @ts-ignore
                        protected terrainPopulated: boolean;
                        // @ts-ignore
                        protected terrainGenerated: boolean;
                        // @ts-ignore
                        public clone(): cn.nukkit.level.format.anvil.Chunk;
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
                        public getNBT(): cn.nukkit.nbt.tag.CompoundTag;
                        // @ts-ignore
                        public static fromBinary(data: number): cn.nukkit.level.format.anvil.Chunk;
                        // @ts-ignore
                        public static fromBinary(data: number, provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.anvil.Chunk;
                        // @ts-ignore
                        public static fromFastBinary(data: number): cn.nukkit.level.format.anvil.Chunk;
                        // @ts-ignore
                        public static fromFastBinary(data: number, provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.anvil.Chunk;
                        // @ts-ignore
                        public toFastBinary(): number[];
                        // @ts-ignore
                        public toBinary(): number[];
                        // @ts-ignore
                        public getBlockSkyLight(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public getBlockLight(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public static getEmptyChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.anvil.Chunk;
                        // @ts-ignore
                        public static getEmptyChunk(chunkX: number, chunkZ: number, provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.anvil.Chunk;
                        // @ts-ignore
                        public compress(): boolean;
                    }
                }
            }
        }
    }
}
