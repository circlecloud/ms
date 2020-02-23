declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace generic {
                    // @ts-ignore
                     class EmptyChunkSection extends java.lang.Object implements cn.nukkit.level.format.ChunkSection {
                        // @ts-ignore
                        constructor(y: number)
                        // @ts-ignore
                        public static EMPTY: cn.nukkit.level.format.generic.EmptyChunkSection[];
                        // @ts-ignore
                        public static EMPTY_LIGHT_ARR: number[];
                        // @ts-ignore
                        public static EMPTY_SKY_LIGHT_ARR: number[];
                        // @ts-ignore
                        public getY(): number;
                        // @ts-ignore
                        public getBlockId(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public getFullBlock(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public getAndSetBlock(x: number, y: number, z: number, block: cn.nukkit.block.Block): cn.nukkit.block.Block;
                        // @ts-ignore
                        public setBlock(x: number, y: number, z: number, blockId: number): boolean;
                        // @ts-ignore
                        public setBlock(x: number, y: number, z: number, blockId: number, meta: number): boolean;
                        // @ts-ignore
                        public getIdArray(): number[];
                        // @ts-ignore
                        public getDataArray(): number[];
                        // @ts-ignore
                        public getSkyLightArray(): number[];
                        // @ts-ignore
                        public getLightArray(): number[];
                        // @ts-ignore
                        public setBlockId(x: number, y: number, z: number, id: number): void;
                        // @ts-ignore
                        public getBlockData(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockData(x: number, y: number, z: number, data: number): void;
                        // @ts-ignore
                        public setFullBlockId(x: number, y: number, z: number, fullId: number): boolean;
                        // @ts-ignore
                        public getBlockLight(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockLight(x: number, y: number, z: number, level: number): void;
                        // @ts-ignore
                        public getBlockSkyLight(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockSkyLight(x: number, y: number, z: number, level: number): void;
                        // @ts-ignore
                        public isEmpty(): boolean;
                        // @ts-ignore
                        public getBytes(): number[];
                        // @ts-ignore
                        public copy(): cn.nukkit.level.format.generic.EmptyChunkSection;
                    }
                }
            }
        }
    }
}
