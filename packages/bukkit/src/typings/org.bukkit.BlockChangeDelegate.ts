declare namespace org {
    namespace bukkit {
        class BlockChangeDelegate {
            /**
             * Set a block data at the specified coordinates.
             */
            public setBlockData(x: number, y: number, z: number, blockData: org.bukkit.block.data.BlockData): boolean;
            /**
             * Get the block data at the location.
             */
            public getBlockData(x: number, y: number, z: number): org.bukkit.block.data.BlockData;
            /**
             * Gets the height of the world.
             */
            public getHeight(): number;
            /**
             * Checks if the specified block is empty (air) or not.
             */
            public isEmpty(x: number, y: number, z: number): boolean;
        }
    }
}
