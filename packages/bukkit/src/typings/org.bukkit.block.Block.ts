declare namespace org {
    namespace bukkit {
        namespace block {
            class Block {
                /**
                 * Gets the metadata for this block
                 */
                public getData(): number;
                /**
                 * Gets the complete block data for this block
                 */
                public getBlockData(): org.bukkit.block.data.BlockData;
                /**
                 * Gets the block at the given offsets
                 */
                public getRelative(modX: number, modY: number, modZ: number): org.bukkit.block.Block;
                /**
                 * Gets the block at the given face
                 * <p>
                 * This method is equal to getRelative(face, 1)
                 */
                public getRelative(face: org.bukkit.block.BlockFace): org.bukkit.block.Block;
                /**
                 * Gets the block at the given distance of the given face
                 * <p>
                 * For example, the following method places water at 100,102,100; two
                 * blocks above 100,100,100.
                 * <pre>
                 * Block block = world.getBlockAt(100, 100, 100);
                 * Block shower = block.getRelative(BlockFace.UP, 2);
                 * shower.setType(Material.WATER);
                 * </pre>
                 */
                public getRelative(face: org.bukkit.block.BlockFace, distance: number): org.bukkit.block.Block;
                /**
                 * Gets the type of this block
                 */
                public getType(): org.bukkit.Material;
                /**
                 * Gets the light level between 0-15
                 */
                public getLightLevel(): number;
                /**
                 * Get the amount of light at this block from the sky.
                 * <p>
                 * Any light given from other sources (such as blocks like torches) will
                 * be ignored.
                 */
                public getLightFromSky(): number;
                /**
                 * Get the amount of light at this block from nearby blocks.
                 * <p>
                 * Any light given from other sources (such as the sun) will be ignored.
                 */
                public getLightFromBlocks(): number;
                /**
                 * Gets the world which contains this Block
                 */
                public getWorld(): org.bukkit.World;
                /**
                 * Gets the x-coordinate of this block
                 */
                public getX(): number;
                /**
                 * Gets the y-coordinate of this block
                 */
                public getY(): number;
                /**
                 * Gets the z-coordinate of this block
                 */
                public getZ(): number;
                /**
                 * Gets the Location of the block
                 */
                public getLocation(): org.bukkit.Location;
                /**
                 * Stores the location of the block in the provided Location object.
                 * <p>
                 * If the provided Location is null this method does nothing and returns
                 * null.
                 */
                public getLocation(loc: org.bukkit.Location): org.bukkit.Location;
                /**
                 * Gets the chunk which contains this block
                 */
                public getChunk(): org.bukkit.Chunk;
                /**
                 * Sets the complete data for this block
                 */
                public setBlockData(data: org.bukkit.block.data.BlockData): void;
                /**
                 * Sets the complete data for this block
                 * <br>
                 * Note that applyPhysics = false is not in general safe. It should only be
                 * used when you need to avoid triggering a physics update of neighboring
                 * blocks, for example when creating a {@link Bisected} block. If you are
                 * using a custom populator, then this parameter may also be required to
                 * prevent triggering infinite chunk loads on border blocks. This method
                 * should NOT be used to "hack" physics by placing blocks in impossible
                 * locations. Such blocks are liable to be removed on various events such as
                 * world upgrades. Furthermore setting large amounts of such blocks in close
                 * proximity may overload the server physics engine if an update is
                 * triggered at a later point. If this occurs, the resulting behavior is
                 * undefined.
                 */
                public setBlockData(data: org.bukkit.block.data.BlockData, applyPhysics: boolean): void;
                /**
                 * Sets the type of this block
                 */
                public setType(type: org.bukkit.Material): void;
                /**
                 * Sets the type of this block
                 * <br>
                 * Note that applyPhysics = false is not in general safe. It should only be
                 * used when you need to avoid triggering a physics update of neighboring
                 * blocks, for example when creating a {@link Bisected} block. If you are
                 * using a custom populator, then this parameter may also be required to
                 * prevent triggering infinite chunk loads on border blocks. This method
                 * should NOT be used to "hack" physics by placing blocks in impossible
                 * locations. Such blocks are liable to be removed on various events such as
                 * world upgrades. Furthermore setting large amounts of such blocks in close
                 * proximity may overload the server physics engine if an update is
                 * triggered at a later point. If this occurs, the resulting behavior is
                 * undefined.
                 */
                public setType(type: org.bukkit.Material, applyPhysics: boolean): void;
                /**
                 * Gets the face relation of this block compared to the given block.
                 * <p>
                 * For example:
                 * <pre>{@code
                 * Block current = world.getBlockAt(100, 100, 100);
                 * Block target = world.getBlockAt(100, 101, 100);
                 * current.getFace(target) == BlockFace.Up;
                 * }</pre>
                 * <br>
                 * If the given block is not connected to this block, null may be returned
                 */
                public getFace(block: org.bukkit.block.Block): org.bukkit.block.BlockFace;
                /**
                 * Captures the current state of this block. You may then cast that state
                 * into any accepted type, such as Furnace or Sign.
                 * <p>
                 * The returned object will never be updated, and you are not guaranteed
                 * that (for example) a sign is still a sign after you capture its state.
                 */
                public getState(): org.bukkit.block.BlockState;
                /**
                 * Returns the biome that this block resides in
                 */
                public getBiome(): org.bukkit.block.Biome;
                /**
                 * Sets the biome that this block resides in
                 */
                public setBiome(bio: org.bukkit.block.Biome): void;
                /**
                 * Returns true if the block is being powered by Redstone.
                 */
                public isBlockPowered(): boolean;
                /**
                 * Returns true if the block is being indirectly powered by Redstone.
                 */
                public isBlockIndirectlyPowered(): boolean;
                /**
                 * Returns true if the block face is being powered by Redstone.
                 */
                public isBlockFacePowered(face: org.bukkit.block.BlockFace): boolean;
                /**
                 * Returns true if the block face is being indirectly powered by Redstone.
                 */
                public isBlockFaceIndirectlyPowered(face: org.bukkit.block.BlockFace): boolean;
                /**
                 * Returns the redstone power being provided to this block face
                 */
                public getBlockPower(face: org.bukkit.block.BlockFace): number;
                /**
                 * Returns the redstone power being provided to this block
                 */
                public getBlockPower(): number;
                /**
                 * Checks if this block is empty.
                 * <p>
                 * A block is considered empty when {@link #getType()} returns {@link
                 * Material#AIR}.
                 */
                public isEmpty(): boolean;
                /**
                 * Checks if this block is liquid.
                 * <p>
                 * A block is considered liquid when {@link #getType()} returns {@link
                 * Material#WATER} or {@link Material#LAVA}.
                 */
                public isLiquid(): boolean;
                /**
                 * Gets the temperature of this block.
                 * <p>
                 * If the raw biome temperature without adjusting for height effects is
                 * required then please use {@link World#getTemperature(int, int)}.
                 */
                public getTemperature(): number;
                /**
                 * Gets the humidity of the biome of this block
                 */
                public getHumidity(): number;
                /**
                 * Returns the reaction of the block when moved by a piston
                 */
                public getPistonMoveReaction(): org.bukkit.block.PistonMoveReaction;
                /**
                 * Breaks the block and spawns items as if a player had digged it
                 */
                public breakNaturally(): boolean;
                /**
                 * Breaks the block and spawns items as if a player had digged it with a
                 * specific tool
                 */
                public breakNaturally(tool: org.bukkit.inventory.ItemStack): boolean;
                /**
                 * Returns a list of items which would drop by destroying this block
                 */
                public getDrops(): any[] /*java.util.Collection*/;
                /**
                 * Returns a list of items which would drop by destroying this block with
                 * a specific tool
                 */
                public getDrops(tool: org.bukkit.inventory.ItemStack): any[] /*java.util.Collection*/;
                /**
                 * Checks if this block is passable.
                 * <p>
                 * A block is passable if it has no colliding parts that would prevent
                 * players from moving through it.
                 * <p>
                 * Examples: Tall grass, flowers, signs, etc. are passable, but open doors,
                 * fence gates, trap doors, etc. are not because they still have parts that
                 * can be collided with.
                 */
                public isPassable(): boolean;
                /**
                 * Performs a ray trace that checks for collision with this specific block
                 * in its current state using its precise collision shape.
                 */
                public rayTrace(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.util.RayTraceResult;
                /**
                 * Gets the approximate bounding box for this block.
                 * <p>
                 * This isn't exact as some blocks {@link org.bukkit.block.data.type.Stairs}
                 * contain many bounding boxes to establish their complete form.
                 * Also, the box may not be exactly the same as the collision shape (such as
                 * cactus, which is 16/16 of a block with 15/16 collisional bounds).
                 * This method will return an empty bounding box if the geometric shape of
                 * the block is empty (such as air blocks).
                 */
                public getBoundingBox(): org.bukkit.util.BoundingBox;
            }
        }
    }
}
