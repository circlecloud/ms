// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface ChunkSnapshot {
            /**
             * Gets the X-coordinate of this chunk
             */
            // @ts-ignore
             getX(): number;
            /**
             * Gets the Z-coordinate of this chunk
             */
            // @ts-ignore
             getZ(): number;
            /**
             * Gets name of the world containing this chunk
             */
            // @ts-ignore
             getWorldName(): string;
            /**
             * Get block type for block at corresponding coordinate in the chunk
             */
            // @ts-ignore
             getBlockType(x: number, y: number, z: number): org.bukkit.Material;
            /**
             * Get block data for block at corresponding coordinate in the chunk
             */
            // @ts-ignore
             getBlockData(x: number, y: number, z: number): org.bukkit.block.data.BlockData;
            /**
             * Get block data for block at corresponding coordinate in the chunk
             */
            // @ts-ignore
             getData(x: number, y: number, z: number): number;
            /**
             * Get sky light level for block at corresponding coordinate in the chunk
             */
            // @ts-ignore
             getBlockSkyLight(x: number, y: number, z: number): number;
            /**
             * Get light level emitted by block at corresponding coordinate in the
             * chunk
             */
            // @ts-ignore
             getBlockEmittedLight(x: number, y: number, z: number): number;
            /**
             * Gets the highest non-air coordinate at the given coordinates
             */
            // @ts-ignore
             getHighestBlockYAt(x: number, z: number): number;
            /**
             * Get biome at given coordinates
             */
            // @ts-ignore
             getBiome(x: number, z: number): org.bukkit.block.Biome;
            /**
             * Get raw biome temperature (0.0-1.0) at given coordinate
             */
            // @ts-ignore
             getRawBiomeTemperature(x: number, z: number): number;
            /**
             * Get world full time when chunk snapshot was captured
             */
            // @ts-ignore
             getCaptureFullTime(): number;
            /**
             * Test if section is empty
             */
            // @ts-ignore
             isSectionEmpty(sy: number): boolean;
        }
    }
}
