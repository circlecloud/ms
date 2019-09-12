declare namespace org {
    namespace bukkit {
        namespace generator {
            namespace ChunkGenerator {
                class ChunkData {
                    /**
                     * Get the maximum height for the chunk.
                     * Setting blocks at or above this height will do nothing.
                     */
                    public getMaxHeight(): number;
                    /**
                     * Set the block at x,y,z in the chunk data to material.
                     * Note: setting blocks outside the chunk's bounds does nothing.
                     */
                    public setBlock(x: number, y: number, z: number, material: org.bukkit.Material): void;
                    /**
                     * Set the block at x,y,z in the chunk data to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     */
                    public setBlock(x: number, y: number, z: number, material: org.bukkit.material.MaterialData): void;
                    /**
                     * Set the block at x,y,z in the chunk data to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     */
                    public setBlock(x: number, y: number, z: number, blockData: org.bukkit.block.data.BlockData): void;
                    /**
                     * Set a region of this chunk from xMin, yMin, zMin (inclusive)
                     * to xMax, yMax, zMax (exclusive) to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     */
                    public setRegion(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, material: org.bukkit.Material): void;
                    /**
                     * Set a region of this chunk from xMin, yMin, zMin (inclusive)
                     * to xMax, yMax, zMax (exclusive) to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     */
                    public setRegion(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, material: org.bukkit.material.MaterialData): void;
                    /**
                     * Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax,
                     * yMax, zMax (exclusive) to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     */
                    public setRegion(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, blockData: org.bukkit.block.data.BlockData): void;
                    /**
                     * Get the type of the block at x, y, z.
                     * Getting blocks outside the chunk's bounds returns air.
                     */
                    public getType(x: number, y: number, z: number): org.bukkit.Material;
                    /**
                     * Get the type and data of the block at x, y, z.
                     * Getting blocks outside the chunk's bounds returns air.
                     */
                    public getTypeAndData(x: number, y: number, z: number): org.bukkit.material.MaterialData;
                    /**
                     * Get the type and data of the block at x, y, z.
                     * Getting blocks outside the chunk's bounds returns air.
                     */
                    public getBlockData(x: number, y: number, z: number): org.bukkit.block.data.BlockData;
                    /**
                     * Get the block data at x,y,z in the chunk data.
                     * Getting blocks outside the chunk's bounds returns 0.
                     */
                    public getData(x: number, y: number, z: number): number;
                }
            }
        }
    }
}
