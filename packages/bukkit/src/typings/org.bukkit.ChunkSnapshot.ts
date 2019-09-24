declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface ChunkSnapshot {
            /**
             * Gets the X-coordinate of this chunk
             */
             getX(): number;
            /**
             * Gets the Z-coordinate of this chunk
             */
             getZ(): number;
            /**
             * Gets name of the world containing this chunk
             */
             getWorldName(): string;
            /**
             * Get block type for block at corresponding coordinate in the chunk
             */
             getBlockType(x: number, y: number, z: number): org.bukkit.Material;
            /**
             * Get block data for block at corresponding coordinate in the chunk
             */
             getBlockData(x: number, y: number, z: number): org.bukkit.block.data.BlockData;
            /**
             * Get block data for block at corresponding coordinate in the chunk
             */
             getData(x: number, y: number, z: number): number;
            /**
             * Get sky light level for block at corresponding coordinate in the chunk
             */
             getBlockSkyLight(x: number, y: number, z: number): number;
            /**
             * Get light level emitted by block at corresponding coordinate in the
             * chunk
             */
             getBlockEmittedLight(x: number, y: number, z: number): number;
            /**
             * Gets the highest non-air coordinate at the given coordinates
             */
             getHighestBlockYAt(x: number, z: number): number;
            /**
             * Get biome at given coordinates
             */
             getBiome(x: number, z: number): org.bukkit.block.Biome;
            /**
             * Get raw biome temperature (0.0-1.0) at given coordinate
             */
             getRawBiomeTemperature(x: number, z: number): number;
            /**
             * Get world full time when chunk snapshot was captured
             */
             getCaptureFullTime(): number;
            /**
             * Test if section is empty
             */
             isSectionEmpty(sy: number): boolean;
        }
    }
}
