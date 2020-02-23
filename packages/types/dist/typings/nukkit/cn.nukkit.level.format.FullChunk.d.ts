declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                // @ts-ignore
                interface FullChunk {
                    // @ts-ignore
                     getX(): number;
                    // @ts-ignore
                     getZ(): number;
                    // @ts-ignore
                     setPosition(x: number, z: number): void;
                    // @ts-ignore
                     setX(x: number): void;
                    // @ts-ignore
                     setZ(z: number): void;
                    // @ts-ignore
                     getIndex(): number;
                    // @ts-ignore
                     getProvider(): cn.nukkit.level.format.LevelProvider;
                    // @ts-ignore
                     setProvider(provider: cn.nukkit.level.format.LevelProvider): void;
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
                     getBlockId(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockId(x: number, y: number, z: number, id: number): void;
                    // @ts-ignore
                     getBlockData(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockData(x: number, y: number, z: number, data: number): void;
                    // @ts-ignore
                     getBlockExtraData(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockExtraData(x: number, y: number, z: number, data: number): void;
                    // @ts-ignore
                     getBlockSkyLight(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockSkyLight(x: number, y: number, z: number, level: number): void;
                    // @ts-ignore
                     getBlockLight(x: number, y: number, z: number): number;
                    // @ts-ignore
                     setBlockLight(x: number, y: number, z: number, level: number): void;
                    // @ts-ignore
                     getHighestBlockAt(x: number, z: number): number;
                    // @ts-ignore
                     getHighestBlockAt(x: number, z: number, cache: boolean): number;
                    // @ts-ignore
                     getHeightMap(x: number, z: number): number;
                    // @ts-ignore
                     setHeightMap(x: number, z: number, value: number): void;
                    // @ts-ignore
                     recalculateHeightMap(): void;
                    // @ts-ignore
                     populateSkyLight(): void;
                    // @ts-ignore
                     getBiomeId(x: number, z: number): number;
                    // @ts-ignore
                     setBiomeId(x: number, z: number, biomeId: number): void;
                    // @ts-ignore
                     setBiomeId(x: number, z: number, biomeId: number): void;
                    // @ts-ignore
                     setBiome(x: number, z: number, biome: cn.nukkit.level.biome.Biome): void;
                    // @ts-ignore
                     isLightPopulated(): boolean;
                    // @ts-ignore
                     setLightPopulated(): void;
                    // @ts-ignore
                     setLightPopulated(value: boolean): void;
                    // @ts-ignore
                     isPopulated(): boolean;
                    // @ts-ignore
                     setPopulated(): void;
                    // @ts-ignore
                     setPopulated(value: boolean): void;
                    // @ts-ignore
                     isGenerated(): boolean;
                    // @ts-ignore
                     setGenerated(): void;
                    // @ts-ignore
                     setGenerated(value: boolean): void;
                    // @ts-ignore
                     addEntity(entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                     removeEntity(entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                     addBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void;
                    // @ts-ignore
                     removeBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void;
                    // @ts-ignore
                     getEntities(): java.util.Map;
                    // @ts-ignore
                     getBlockEntities(): java.util.Map;
                    // @ts-ignore
                     getTile(x: number, y: number, z: number): cn.nukkit.blockentity.BlockEntity;
                    // @ts-ignore
                     isLoaded(): boolean;
                    // @ts-ignore
                     load(): boolean;
                    // @ts-ignore
                     load(generate: boolean): boolean;
                    // @ts-ignore
                     unload(): boolean;
                    // @ts-ignore
                     unload(save: boolean): boolean;
                    // @ts-ignore
                     unload(save: boolean, safe: boolean): boolean;
                    // @ts-ignore
                     initChunk(): void;
                    // @ts-ignore
                     getBiomeIdArray(): number[];
                    // @ts-ignore
                     getHeightMapArray(): number[];
                    // @ts-ignore
                     getBlockIdArray(): number[];
                    // @ts-ignore
                     getBlockDataArray(): number[];
                    // @ts-ignore
                     getBlockExtraDataArray(): java.util.Map;
                    // @ts-ignore
                     getBlockSkyLightArray(): number[];
                    // @ts-ignore
                     getBlockLightArray(): number[];
                    // @ts-ignore
                     toBinary(): number[];
                    // @ts-ignore
                     toFastBinary(): number[];
                    // @ts-ignore
                     hasChanged(): boolean;
                    // @ts-ignore
                     setChanged(): void;
                    // @ts-ignore
                     setChanged(changed: boolean): void;
                }
            }
        }
    }
}
