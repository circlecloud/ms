// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                 class Location extends java.lang.Object implements org.spongepowered.api.data.DataHolder {
                    /**
                     * Create a new instance.
                     */
                    // @ts-ignore
                    constructor(extent: org.spongepowered.api.world.extent.Extent, position: any /*Vector3d*/)
                    /**
                     * Create a new instance.
                     */
                    // @ts-ignore
                    constructor(extent: org.spongepowered.api.world.extent.Extent, x: number, y: number, z: number)
                    /**
                     * Create a new instance.
                     */
                    // @ts-ignore
                    constructor(extent: org.spongepowered.api.world.extent.Extent, blockPosition: any /*Vector3i*/)
                    /**
                     * Create a new instance.
                     */
                    // @ts-ignore
                    constructor(extent: org.spongepowered.api.world.extent.Extent, x: number, y: number, z: number)
                    /**
                     * Gets the underlying extent.
                     * <p>Note: This can be null if the {@link Extent} is unloaded and garbage
                     * collected.</p>
                     */
                    // @ts-ignore
                    public getExtent(): org.spongepowered.api.world.extent.Extent;
                    /**
                     * Gets the underlying position.
                     */
                    // @ts-ignore
                    public getPosition(): any /*Vector3d*/;
                    /**
                     * Gets the underlying block position.
                     */
                    // @ts-ignore
                    public getBlockPosition(): any /*Vector3i*/;
                    /**
                     * Gets the underlying chunk position.
                     */
                    // @ts-ignore
                    public getChunkPosition(): any /*Vector3i*/;
                    /**
                     * Gets the underlying biome position.
                     */
                    // @ts-ignore
                    public getBiomePosition(): any /*Vector3i*/;
                    /**
                     * Gets the X component of this instance's position.
                     */
                    // @ts-ignore
                    public getX(): number;
                    /**
                     * Gets the Y component of this instance's position.
                     */
                    // @ts-ignore
                    public getY(): number;
                    /**
                     * Gets the Z component of this instance's position.
                     */
                    // @ts-ignore
                    public getZ(): number;
                    /**
                     * Gets the floored X component of this instance's position.
                     */
                    // @ts-ignore
                    public getBlockX(): number;
                    /**
                     * Gets the floored Y component of this instance's position.
                     */
                    // @ts-ignore
                    public getBlockY(): number;
                    /**
                     * Gets the floored Z component of this instance's position.
                     */
                    // @ts-ignore
                    public getBlockZ(): number;
                    /**
                     * Returns true if this location is in the given extent. This is implemented
                     * as an {@link Object#equals(Object)} check.
                     */
                    // @ts-ignore
                    public inExtent(extent: org.spongepowered.api.world.extent.Extent): boolean;
                    /**
                     * Returns true if this location has a biome at its
                     * {@link #getBiomePosition()}.
                     */
                    // @ts-ignore
                    public hasBiome(): boolean;
                    /**
                     * Returns true if this location has a block at its
                     * {@link #getBlockPosition()} ()}.
                     */
                    // @ts-ignore
                    public hasBlock(): boolean;
                    /**
                     * Gets a {@link LocatableBlock} if the parent {@link Extent} of this
                     * {@link Location} is a {@link World}.
                     */
                    // @ts-ignore
                    public getLocatableBlock(): java.util.Optional;
                    /**
                     * Create a new instance with a new extent.
                     */
                    // @ts-ignore
                    public setExtent(extent: org.spongepowered.api.world.extent.Extent): org.spongepowered.api.world.Location;
                    /**
                     * Create a new instance with a new position.
                     */
                    // @ts-ignore
                    public setPosition(position: any /*Vector3d*/): org.spongepowered.api.world.Location;
                    /**
                     * Create a new instance with a new block position.
                     */
                    // @ts-ignore
                    public setBlockPosition(position: any /*Vector3i*/): org.spongepowered.api.world.Location;
                    /**
                     * Subtract another Vector3d to the position on this instance, returning
                     * a new Location instance.
                     */
                    // @ts-ignore
                    public sub(v: any /*Vector3d*/): org.spongepowered.api.world.Location;
                    /**
                     * Subtract another Vector3i to the position on this instance, returning
                     * a new Location instance.
                     */
                    // @ts-ignore
                    public sub(v: any /*Vector3i*/): org.spongepowered.api.world.Location;
                    /**
                     * Subtract vector components to the position on this instance, returning a
                     * new Location instance.
                     */
                    // @ts-ignore
                    public sub(x: number, y: number, z: number): org.spongepowered.api.world.Location;
                    /**
                     * Add another Vector3d to the position on this instance, returning a new
                     * Location instance.
                     */
                    // @ts-ignore
                    public add(v: any /*Vector3d*/): org.spongepowered.api.world.Location;
                    /**
                     * Add another Vector3i to the position on this instance, returning a new
                     * Location instance.
                     */
                    // @ts-ignore
                    public add(v: any /*Vector3i*/): org.spongepowered.api.world.Location;
                    /**
                     * Add vector components to the position on this instance, returning a new
                     * Location instance.
                     */
                    // @ts-ignore
                    public add(x: number, y: number, z: number): org.spongepowered.api.world.Location;
                    /**
                     * Calls the mapper function on the extent and position.
                     */
                    // @ts-ignore
                    public map(mapper: java.util.function$.BiFunction): java.lang.Object;
                    /**
                     * Calls the mapper function on the extent and block position.
                     */
                    // @ts-ignore
                    public mapBlock(mapper: java.util.function$.BiFunction): java.lang.Object;
                    /**
                     * Calls the mapper function on the extent and chunk position.
                     */
                    // @ts-ignore
                    public mapChunk(mapper: java.util.function$.BiFunction): java.lang.Object;
                    /**
                     * Calls the mapper function on the extent and biome position.
                     */
                    // @ts-ignore
                    public mapBiome(mapper: java.util.function$.BiFunction): java.lang.Object;
                    /**
                     * Gets the location next to this one in the given direction.
                     * Always moves by a unit amount, even diagonally.
                     */
                    // @ts-ignore
                    public getRelative(direction: org.spongepowered.api.util.Direction): org.spongepowered.api.world.Location;
                    /**
                     * Gets the location next to this one in the given direction.
                     * Always moves by a block amount, even diagonally.
                     * <p>{@link org.spongepowered.api.util.Direction.Division#SECONDARY_ORDINAL}
                     * directions are not a valid argument. These will throw an exception.
                     * </p>
                     */
                    // @ts-ignore
                    public getBlockRelative(direction: org.spongepowered.api.util.Direction): org.spongepowered.api.world.Location;
                    /**
                     * Gets the block at this location.
                     */
                    // @ts-ignore
                    public getBiome(): org.spongepowered.api.world.biome.BiomeType;
                    /**
                     * Gets the base type of block.
                     * <p>The type does not include block data such as the contents of
                     * inventories.</p>
                     */
                    // @ts-ignore
                    public getBlockType(): org.spongepowered.api.block.BlockType;
                    /**
                     * Gets the {@link BlockState} for this position.
                     */
                    // @ts-ignore
                    public getBlock(): org.spongepowered.api.block.BlockState;
                    /**
                     * Checks for whether the block at this position contains tile entity data.
                     */
                    // @ts-ignore
                    public hasTileEntity(): boolean;
                    /**
                     * Gets the associated {@link TileEntity} on this block.
                     */
                    // @ts-ignore
                    public getTileEntity(): java.util.Optional;
                    /**
                     * Replace the block at this position with a new state.
                     * <p>This will remove any extended block data at the given position.</p>
                     */
                    // @ts-ignore
                    public setBlock(state: org.spongepowered.api.block.BlockState): boolean;
                    /**
                     * Replace the block at this position with a new state.
                     * <p>This will remove any extended block data at the given position.</p>
                     */
                    // @ts-ignore
                    public setBlock(state: org.spongepowered.api.block.BlockState, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                    /**
                     * Replace the block type at this position by a new type.
                     * <p>This will remove any extended block data at the given position.</p>
                     */
                    // @ts-ignore
                    public setBlockType(type: org.spongepowered.api.block.BlockType): boolean;
                    /**
                     * Replace the block type at this position by a new type.
                     * <p>This will remove any extended block data at the given position.</p>
                     */
                    // @ts-ignore
                    public setBlockType(type: org.spongepowered.api.block.BlockType, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                    /**
                     * Replace the block at this position with a copy of the given snapshot.
                     * <p>Changing the snapshot afterwards will not affect the block that has
                     * been placed at this location.</p>
                     */
                    // @ts-ignore
                    public restoreSnapshot(snapshot: org.spongepowered.api.block.BlockSnapshot, force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                    /**
                     * Remove the block at this position by replacing it with
                     * {@link BlockTypes#AIR}.
                     * <p>This will remove any extended block data at the given position.</p>
                     */
                    // @ts-ignore
                    public removeBlock(): boolean;
                    /**
                     * Create an entity instance at the given position.
                     * <p>Creating an entity does not spawn the entity into the world. An entity
                     * created means the entity can be spawned at the given location. If
                     * {@link Optional#empty()} was returned, the entity is not able to spawn at
                     * the given location. Furthermore, this allows for the {@link Entity} to be
                     * customized further prior to traditional "ticking" and processing by core
                     * systems.</p>
                     */
                    // @ts-ignore
                    public createEntity(type: org.spongepowered.api.entity.EntityType): org.spongepowered.api.entity.Entity;
                    /**
                     * Spawns an {@link Entity} using the already set properties (extent,
                     * position, rotation) and applicable {@link DataManipulator}s with the
                     * specified {@link Cause} for spawning the entity.
                     * <p>Note that for the {@link Cause} to be useful in the expected
                     * {@link SpawnEntityEvent}, a {@link SpawnType} should be provided in the
                     * {@link EventContext} for other plugins to understand and have finer
                     * control over the event.</p>
                     * <p>The requirements involve that all necessary setup of states and data
                     * is already preformed on the entity retrieved from the various
                     * {@link EntityUniverse#createEntity(EntityType,Vector3d)} methods. Calling
                     * this will make the now-spawned entity able to be processed by various
                     * systems.</p>
                     * <p>If the entity was unable to spawn, the entity is not removed, but it
                     * should be taken note that there can be many reasons for a failure.</p>
                     */
                    // @ts-ignore
                    public spawnEntity(entity: org.spongepowered.api.entity.Entity): boolean;
                    /**
                     * Similar to {@link #spawnEntity(Entity)} except where multiple
                     * entities can be attempted to be spawned with a customary {@link Cause}.
                     * The recommended use is to easily process the entity spawns without
                     * interference with the cause tracking system.
                     */
                    // @ts-ignore
                    public spawnEntities(entities: java.lang.Iterable): java.util.Collection;
                    /**
                     * Gets the highest {@link Location} at this location.
                     */
                    // @ts-ignore
                    public asHighestLocation(): org.spongepowered.api.world.Location;
                    // @ts-ignore
                    public remove(containerClass: java.lang.Class): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public remove(value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public remove(key: org.spongepowered.api.data.key.Key): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Gets a snapshot of this block at the current point in time.
                     * <p>A snapshot is disconnected from the {@link Extent} that it was taken
                     * from so changes to the original block do not affect the snapshot.</p>
                     */
                    // @ts-ignore
                    public createSnapshot(): org.spongepowered.api.block.BlockSnapshot;
                    /**
                     * Gets a list of {@link ScheduledBlockUpdate}s on this block.
                     */
                    // @ts-ignore
                    public getScheduledUpdates(): java.util.Collection;
                    /**
                     * Adds a new {@link ScheduledBlockUpdate} to this block.
                     */
                    // @ts-ignore
                    public addScheduledUpdate(priority: number, ticks: number): org.spongepowered.api.block.ScheduledBlockUpdate;
                    /**
                     * Removes a {@link ScheduledBlockUpdate} from this block.
                     */
                    // @ts-ignore
                    public removeScheduledUpdate(update: org.spongepowered.api.block.ScheduledBlockUpdate): void;
                    // @ts-ignore
                    public getProperty(propertyClass: java.lang.Class): java.util.Optional;
                    // @ts-ignore
                    public getApplicableProperties(): java.util.Collection;
                    // @ts-ignore
                    public validateRawData(container: org.spongepowered.api.data.DataView): boolean;
                    // @ts-ignore
                    public setRawData(container: org.spongepowered.api.data.DataView): void;
                    // @ts-ignore
                    public getContentVersion(): number;
                    // @ts-ignore
                    public toContainer(): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public get(containerClass: java.lang.Class): java.util.Optional;
                    // @ts-ignore
                    public get(key: org.spongepowered.api.data.key.Key): java.util.Optional;
                    // @ts-ignore
                    public getOrCreate(containerClass: java.lang.Class): java.util.Optional;
                    // @ts-ignore
                    public offer(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public offer(valueHolders: java.lang.Iterable): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public offer(values: java.lang.Iterable, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public offer(value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public offer(valueContainer: org.spongepowered.api.data.manipulator.DataManipulator): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public offer(valueContainer: org.spongepowered.api.data.manipulator.DataManipulator, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public undo(result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public supports(holderClass: java.lang.Class): boolean;
                    // @ts-ignore
                    public supports(key: org.spongepowered.api.data.key.Key): boolean;
                    // @ts-ignore
                    public transform(key: org.spongepowered.api.data.key.Key, func: java.util.function$.Function): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public copyFrom(that: org.spongepowered.api.data.DataHolder): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public copyFrom(that: org.spongepowered.api.data.DataHolder, strategy: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                    // @ts-ignore
                    public getContainers(): java.util.Collection;
                    // @ts-ignore
                    public getValue(key: org.spongepowered.api.data.key.Key): java.util.Optional;
                    // @ts-ignore
                    public copy(): org.spongepowered.api.world.Location;
                    // @ts-ignore
                    public getKeys(): java.util.Set;
                    // @ts-ignore
                    public getValues(): java.util.Set;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(other: java.lang.Object): boolean;
                }
            }
        }
    }
}
