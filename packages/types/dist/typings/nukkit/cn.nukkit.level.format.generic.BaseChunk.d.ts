declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace generic {
                    // @ts-ignore
                    abstract class BaseChunk extends cn.nukkit.level.format.generic.BaseFullChunk implements cn.nukkit.level.format.Chunk {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        protected sections: cn.nukkit.level.format.ChunkSection[];
                        // @ts-ignore
                        public clone(): cn.nukkit.level.format.generic.BaseChunk;
                        // @ts-ignore
                        public getFullBlock(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlock(x: number, y: number, z: number, blockId: number): boolean;
                        // @ts-ignore
                        public getAndSetBlock(x: number, y: number, z: number, block: cn.nukkit.block.Block): cn.nukkit.block.Block;
                        // @ts-ignore
                        public setFullBlockId(x: number, y: number, z: number, fullId: number): boolean;
                        // @ts-ignore
                        public setBlock(x: number, y: number, z: number, blockId: number, meta: number): boolean;
                        // @ts-ignore
                        public setBlockId(x: number, y: number, z: number, id: number): void;
                        // @ts-ignore
                        public getBlockId(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public getBlockData(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockData(x: number, y: number, z: number, data: number): void;
                        // @ts-ignore
                        public getBlockSkyLight(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockSkyLight(x: number, y: number, z: number, level: number): void;
                        // @ts-ignore
                        public getBlockLight(x: number, y: number, z: number): number;
                        // @ts-ignore
                        public setBlockLight(x: number, y: number, z: number, level: number): void;
                        // @ts-ignore
                        public isSectionEmpty(fY: number): boolean;
                        // @ts-ignore
                        public getSection(fY: number): cn.nukkit.level.format.ChunkSection;
                        // @ts-ignore
                        public setSection(fY: number, section: cn.nukkit.level.format.ChunkSection): boolean;
                        // @ts-ignore
                        public load(): boolean;
                        // @ts-ignore
                        public load(generate: boolean): boolean;
                        // @ts-ignore
                        public getBlockIdArray(): number[];
                        // @ts-ignore
                        public getBlockDataArray(): number[];
                        // @ts-ignore
                        public getBlockSkyLightArray(): number[];
                        // @ts-ignore
                        public getBlockLightArray(): number[];
                        // @ts-ignore
                        public getSections(): cn.nukkit.level.format.ChunkSection[];
                        // @ts-ignore
                        public getHeightMapArray(): number[];
                        // @ts-ignore
                        public getProvider(): cn.nukkit.level.format.LevelProvider;
                    }
                }
            }
        }
    }
}
