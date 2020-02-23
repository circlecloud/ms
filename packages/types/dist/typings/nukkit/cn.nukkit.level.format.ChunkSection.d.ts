declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                // @ts-ignore
                interface ChunkSection {
                    // @ts-ignore
                     getY(): number;
                    // @ts-ignore
                     getBlockId(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockId(x: number, y: number, z: number, id: number): void;
                    // @ts-ignore
                     getBlockData(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockData(x: number, y: number, z: number, data: number): void;
                    // @ts-ignore
                     getFullBlock(x: number, y: number, z: number): number;
                    // @ts-ignore
                     getAndSetBlock(x: number, y: number, z: number, block: cn.nukkit.block.Block): cn.nukkit.block.Block;
                    // @ts-ignore
                     setFullBlockId(x: number, y: number, z: number, fullId: number): boolean;
                    // @ts-ignore
                     setBlock(x: number, y: number, z: number, blockId: number): boolean;
                    // @ts-ignore
                     setBlock(x: number, y: number, z: number, blockId: number, meta: number): boolean;
                    // @ts-ignore
                     getBlockSkyLight(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockSkyLight(x: number, y: number, z: number, level: number): void;
                    // @ts-ignore
                     getBlockLight(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockLight(x: number, y: number, z: number, level: number): void;
                    // @ts-ignore
                     getIdArray(): number[];
                    // @ts-ignore
                     getDataArray(): number[];
                    // @ts-ignore
                     getSkyLightArray(): number[];
                    // @ts-ignore
                     getLightArray(): number[];
                    // @ts-ignore
                     isEmpty(): boolean;
                    // @ts-ignore
                     getBytes(): number[];
                    // @ts-ignore
                     copy(): cn.nukkit.level.format.ChunkSection;
                }
            }
        }
    }
}
