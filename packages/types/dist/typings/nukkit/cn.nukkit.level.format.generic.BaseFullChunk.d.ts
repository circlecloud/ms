declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace generic {
                    // @ts-ignore
                    abstract class BaseFullChunk extends java.lang.Object implements cn.nukkit.level.format.FullChunk, cn.nukkit.level.ChunkManager {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        protected entities: java.util.Map;
                        // @ts-ignore
                        protected tiles: java.util.Map;
                        // @ts-ignore
                        protected tileList: java.util.Map;
                        // @ts-ignore
                        protected biomes: number[];
                        // @ts-ignore
                        protected blocks: number[];
                        // @ts-ignore
                        protected data: number[];
                        // @ts-ignore
                        protected skyLight: number[];
                        // @ts-ignore
                        protected blockLight: number[];
                        // @ts-ignore
                        protected heightMap: number[];
                        // @ts-ignore
                        protected NBTtiles: java.util.List;
                        // @ts-ignore
                        protected NBTentities: java.util.List;
                        // @ts-ignore
                        protected extraData: java.util.Map;
                        // @ts-ignore
                        protected provider: cn.nukkit.level.format.LevelProvider;
                        // @ts-ignore
                        protected providerClass: java.lang.Class;
                        // @ts-ignore
                        protected changes: number;
                        // @ts-ignore
                        protected isInit: boolean;
                        // @ts-ignore
                        protected chunkPacket: cn.nukkit.network.protocol.BatchPacket;
                        // @ts-ignore
                        public clone(): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public setChunkPacket(packet: cn.nukkit.network.protocol.BatchPacket): void;
                        // @ts-ignore
                        public getChunkPacket(): cn.nukkit.network.protocol.BatchPacket;
                        // @ts-ignore
                        public initChunk(): void;
                        // @ts-ignore
                        public getIndex(): number;
                        // @ts-ignore
                        public getX(): number;
                        // @ts-ignore
                        public getZ(): number;
                        // @ts-ignore
                        public setPosition(x: number, z: number): void;
                        // @ts-ignore
                        public setX(x: number): void;
                        // @ts-ignore
                        public setZ(z: number): void;
                        // @ts-ignore
                        public getProvider(): cn.nukkit.level.format.LevelProvider;
                        // @ts-ignore
                        public setProvider(provider: cn.nukkit.level.format.LevelProvider): void;
                        // @ts-ignore
                        public getBiomeId(x: number, z: number): number;
                        // @ts-ignore
                        public setBiomeId(x: number, z: number, biomeId: number): void;
                        // @ts-ignore
                        public getHeightMap(x: number, z: number): number;
                        // @ts-ignore
                        public setHeightMap(x: number, z: number, value: number): void;
                        // @ts-ignore
                        public recalculateHeightMap(): void;
                        // @ts-ignore
                        public getBlockExtraData(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockExtraData(x: number, y: number, z: number, data: number): void;
                        // @ts-ignore
                        public populateSkyLight(): void;
                        // @ts-ignore
                        public getHighestBlockAt(x: number, z: number): number;
                        // @ts-ignore
                        public getHighestBlockAt(x: number, z: number, cache: boolean): number;
                        // @ts-ignore
                        public addEntity(entity: cn.nukkit.entity.Entity): void;
                        // @ts-ignore
                        public removeEntity(entity: cn.nukkit.entity.Entity): void;
                        // @ts-ignore
                        public addBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void;
                        // @ts-ignore
                        public removeBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void;
                        // @ts-ignore
                        public getEntities(): java.util.Map;
                        // @ts-ignore
                        public getBlockEntities(): java.util.Map;
                        // @ts-ignore
                        public getBlockExtraDataArray(): java.util.Map;
                        // @ts-ignore
                        public getTile(x: number, y: number, z: number): cn.nukkit.blockentity.BlockEntity;
                        // @ts-ignore
                        public isLoaded(): boolean;
                        // @ts-ignore
                        public load(): boolean;
                        // @ts-ignore
                        public load(generate: boolean): boolean;
                        // @ts-ignore
                        public unload(): boolean;
                        // @ts-ignore
                        public unload(save: boolean): boolean;
                        // @ts-ignore
                        public unload(save: boolean, safe: boolean): boolean;
                        // @ts-ignore
                        public getBlockIdArray(): number[];
                        // @ts-ignore
                        public getBlockDataArray(): number[];
                        // @ts-ignore
                        public getBlockSkyLightArray(): number[];
                        // @ts-ignore
                        public getBlockLightArray(): number[];
                        // @ts-ignore
                        public getBiomeIdArray(): number[];
                        // @ts-ignore
                        public getHeightMapArray(): number[];
                        // @ts-ignore
                        public getChanges(): number;
                        // @ts-ignore
                        public hasChanged(): boolean;
                        // @ts-ignore
                        public setChanged(): void;
                        // @ts-ignore
                        public setChanged(changed: boolean): void;
                        // @ts-ignore
                        public toFastBinary(): number[];
                        // @ts-ignore
                        public isLightPopulated(): boolean;
                        // @ts-ignore
                        public setLightPopulated(): void;
                        // @ts-ignore
                        public setLightPopulated(value: boolean): void;
                        // @ts-ignore
                        public getBlockIdAt(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockFullIdAt(x: number, y: number, z: number, fullId: number): void;
                        // @ts-ignore
                        public setBlockIdAt(x: number, y: number, z: number, id: number): void;
                        // @ts-ignore
                        public setBlockAt(x: number, y: number, z: number, id: number, data: number): void;
                        // @ts-ignore
                        public getBlockDataAt(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockDataAt(x: number, y: number, z: number, data: number): void;
                        // @ts-ignore
                        public getChunk(chunkX: number, chunkZ: number): cn.nukkit.level.format.generic.BaseFullChunk;
                        // @ts-ignore
                        public setChunk(chunkX: number, chunkZ: number): void;
                        // @ts-ignore
                        public setChunk(chunkX: number, chunkZ: number, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void;
                        // @ts-ignore
                        public getSeed(): number;
                        // @ts-ignore
                        public compress(): boolean;
                    }
                }
            }
        }
    }
}
