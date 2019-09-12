declare namespace org {
    namespace bukkit {
        namespace block {
            class BlockState {
                /**
                 * Gets the block represented by this block state.
                 */
                public getBlock(): org.bukkit.block.Block;
                /**
                 * Gets the metadata for this block state.
                 */
                public getData(): org.bukkit.material.MaterialData;
                /**
                 * Gets the data for this block state.
                 */
                public getBlockData(): org.bukkit.block.data.BlockData;
                /**
                 * Gets the type of this block state.
                 */
                public getType(): org.bukkit.Material;
                /**
                 * Gets the current light level of the block represented by this block state.
                 */
                public getLightLevel(): number;
                /**
                 * Gets the world which contains the block represented by this block state.
                 */
                public getWorld(): org.bukkit.World;
                /**
                 * Gets the x-coordinate of this block state.
                 */
                public getX(): number;
                /**
                 * Gets the y-coordinate of this block state.
                 */
                public getY(): number;
                /**
                 * Gets the z-coordinate of this block state.
                 */
                public getZ(): number;
                /**
                 * Gets the location of this block state.
                 * <p>
                 * If this block state is not placed the location's world will be null!
                 */
                public getLocation(): org.bukkit.Location;
                /**
                 * Stores the location of this block state in the provided Location object.
                 * <p>
                 * If the provided Location is null this method does nothing and returns
                 * null.
                 * <p>
                 * If this block state is not placed the location's world will be null!
                 */
                public getLocation(loc: org.bukkit.Location): org.bukkit.Location;
                /**
                 * Gets the chunk which contains the block represented by this block state.
                 */
                public getChunk(): org.bukkit.Chunk;
                /**
                 * Sets the metadata for this block state.
                 */
                public setData(data: org.bukkit.material.MaterialData): void;
                /**
                 * Sets the data for this block state.
                 */
                public setBlockData(data: org.bukkit.block.data.BlockData): void;
                /**
                 * Sets the type of this block state.
                 */
                public setType(type: org.bukkit.Material): void;
                /**
                 * Attempts to update the block represented by this state, setting it to
                 * the new values as defined by this state.
                 * <p>
                 * This has the same effect as calling update(false). That is to say,
                 * this will not modify the state of a block if it is no longer the same
                 * type as it was when this state was taken. It will return false in this
                 * eventuality.
                 */
                public update(): boolean;
                /**
                 * Attempts to update the block represented by this state, setting it to
                 * the new values as defined by this state.
                 * <p>
                 * This has the same effect as calling update(force, true). That is to
                 * say, this will trigger a physics update to surrounding blocks.
                 */
                public update(force: boolean): boolean;
                /**
                 * Attempts to update the block represented by this state, setting it to
                 * the new values as defined by this state.
                 * <p>
                 * If this state is not placed, this will have no effect and return true.
                 * <p>
                 * Unless force is true, this will not modify the state of a block if it
                 * is no longer the same type as it was when this state was taken. It will
                 * return false in this eventuality.
                 * <p>
                 * If force is true, it will set the type of the block to match the new
                 * state, set the state data and then return true.
                 * <p>
                 * If applyPhysics is true, it will trigger a physics update on
                 * surrounding blocks which could cause them to update or disappear.
                 */
                public update(force: boolean, applyPhysics: boolean): boolean;
                public getRawData(): number;
                public setRawData(data: number): void;
                /**
                 * Returns whether this state is placed in the world.
                 * <p>
                 * Some methods will not work if the block state isn't
                 * placed in the world.
                 */
                public isPlaced(): boolean;
            }
        }
    }
}
