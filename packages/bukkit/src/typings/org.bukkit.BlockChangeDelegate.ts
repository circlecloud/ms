declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface BlockChangeDelegate {
            /**
             * Set a block data at the specified coordinates.
             */
             setBlockData(x: number, y: number, z: number, blockData: org.bukkit.block.data.BlockData): boolean;
            /**
             * Get the block data at the location.
             */
             getBlockData(x: number, y: number, z: number): org.bukkit.block.data.BlockData;
            /**
             * Gets the height of the world.
             */
             getHeight(): number;
            /**
             * Checks if the specified block is empty (air) or not.
             */
             isEmpty(x: number, y: number, z: number): boolean;
        }
    }
}
