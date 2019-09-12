declare namespace org {
    namespace bukkit {
        class ChunkSnapshot {
            /**
             * Gets the X-coordinate of this chunk
             */
            public getX(): number;
            /**
             * Gets the Z-coordinate of this chunk
             */
            public getZ(): number;
            /**
             * Gets name of the world containing this chunk
             */
            public getWorldName(): string;
            /**
             * Get block type for block at corresponding coordinate in the chunk
             */
            public getBlockType(x: number, y: number, z: number): org.bukkit.Material;
            /**
             * Get block data for block at corresponding coordinate in the chunk
             */
            public getBlockData(x: number, y: number, z: number): org.bukkit.block.data.BlockData;
            /**
             * Get block data for block at corresponding coordinate in the chunk
             */
            public getData(x: number, y: number, z: number): number;
            /**
             * Get sky light level for block at corresponding coordinate in the chunk
             */
            public getBlockSkyLight(x: number, y: number, z: number): number;
            /**
             * Get light level emitted by block at corresponding coordinate in the
             * chunk
             */
            public getBlockEmittedLight(x: number, y: number, z: number): number;
            /**
             * Gets the highest non-air coordinate at the given coordinates
             */
            public getHighestBlockYAt(x: number, z: number): number;
            /**
             * Get biome at given coordinates
             */
            public getBiome(x: number, z: number): org.bukkit.block.Biome;
            /**
             * Get raw biome temperature (0.0-1.0) at given coordinate
             */
            public getRawBiomeTemperature(x: number, z: number): number;
            /**
             * Get world full time when chunk snapshot was captured
             */
            public getCaptureFullTime(): number;
            /**
             * Test if section is empty
             */
            public isSectionEmpty(sy: number): boolean;
        }
    }
}
