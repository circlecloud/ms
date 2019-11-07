declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface BlockChangeDelegate {
            /**
             * Set a block data at the specified coordinates.
             */
            // @ts-ignore
             setBlockData(x: number, y: number, z: number, blockData: org.bukkit.block.data.BlockData): boolean;
            /**
             * Get the block data at the location.
             */
            // @ts-ignore
             getBlockData(x: number, y: number, z: number): org.bukkit.block.data.BlockData;
            /**
             * Gets the height of the world.
             */
            // @ts-ignore
             getHeight(): number;
            /**
             * Checks if the specified block is empty (air) or not.
             */
            // @ts-ignore
             isEmpty(x: number, y: number, z: number): boolean;
        }
    }
}
