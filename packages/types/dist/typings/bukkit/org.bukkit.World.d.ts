// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface World extends org.bukkit.plugin.messaging.PluginMessageRecipient, org.bukkit.metadata.Metadatable {
            /**
             * Gets the {@link Block} at the given coordinates
             */
            // @ts-ignore
             getBlockAt(x: number, y: number, z: number): org.bukkit.block.Block;
            /**
             * Gets the {@link Block} at the given {@link Location}
             */
            // @ts-ignore
             getBlockAt(location: org.bukkit.Location): org.bukkit.block.Block;
            /**
             * Gets the y coordinate of the lowest block at this position such that the
             * block and all blocks above it are transparent for lighting purposes.
             */
            // @ts-ignore
             getHighestBlockYAt(x: number, z: number): number;
            /**
             * Gets the y coordinate of the lowest block at the given {@link Location}
             * such that the block and all blocks above it are transparent for lighting
             * purposes.
             */
            // @ts-ignore
             getHighestBlockYAt(location: org.bukkit.Location): number;
            /**
             * Gets the lowest block at the given coordinates such that the block and
             * all blocks above it are transparent for lighting purposes.
             */
            // @ts-ignore
             getHighestBlockAt(x: number, z: number): org.bukkit.block.Block;
            /**
             * Gets the lowest block at the given {@link Location} such that the block
             * and all blocks above it are transparent for lighting purposes.
             */
            // @ts-ignore
             getHighestBlockAt(location: org.bukkit.Location): org.bukkit.block.Block;
            /**
             * Gets the {@link Chunk} at the given coordinates
             */
            // @ts-ignore
             getChunkAt(x: number, z: number): org.bukkit.Chunk;
            /**
             * Gets the {@link Chunk} at the given {@link Location}
             */
            // @ts-ignore
             getChunkAt(location: org.bukkit.Location): org.bukkit.Chunk;
            /**
             * Gets the {@link Chunk} that contains the given {@link Block}
             */
            // @ts-ignore
             getChunkAt(block: org.bukkit.block.Block): org.bukkit.Chunk;
            /**
             * Checks if the specified {@link Chunk} is loaded
             */
            // @ts-ignore
             isChunkLoaded(chunk: org.bukkit.Chunk): boolean;
            /**
             * Gets an array of all loaded {@link Chunk}s
             */
            // @ts-ignore
             getLoadedChunks(): org.bukkit.Chunk[];
            /**
             * Loads the specified {@link Chunk}.
             * <p>
             * <b>This method will keep the specified chunk loaded until one of the
             * unload methods is manually called. Callers are advised to instead use
             * getChunkAt which will only temporarily load the requested chunk.</b>
             */
            // @ts-ignore
             loadChunk(chunk: org.bukkit.Chunk): void;
            /**
             * Checks if the {@link Chunk} at the specified coordinates is loaded
             */
            // @ts-ignore
             isChunkLoaded(x: number, z: number): boolean;
            /**
             * Checks if the {@link Chunk} at the specified coordinates is generated
             */
            // @ts-ignore
             isChunkGenerated(x: number, z: number): boolean;
            /**
             * Checks if the {@link Chunk} at the specified coordinates is loaded and
             * in use by one or more players
             */
            // @ts-ignore
             isChunkInUse(x: number, z: number): boolean;
            /**
             * Loads the {@link Chunk} at the specified coordinates.
             * <p>
             * <b>This method will keep the specified chunk loaded until one of the
             * unload methods is manually called. Callers are advised to instead use
             * getChunkAt which will only temporarily load the requested chunk.</b>
             * <p>
             * If the chunk does not exist, it will be generated.
             * <p>
             * This method is analogous to {@link #loadChunk(int, int, boolean)} where
             * generate is true.
             */
            // @ts-ignore
             loadChunk(x: number, z: number): void;
            /**
             * Loads the {@link Chunk} at the specified coordinates.
             * <p>
             * <b>This method will keep the specified chunk loaded until one of the
             * unload methods is manually called. Callers are advised to instead use
             * getChunkAt which will only temporarily load the requested chunk.</b>
             */
            // @ts-ignore
             loadChunk(x: number, z: number, generate: boolean): boolean;
            /**
             * Safely unloads and saves the {@link Chunk} at the specified coordinates
             * <p>
             * This method is analogous to {@link #unloadChunk(int, int, boolean)}
             * where save is true.
             */
            // @ts-ignore
             unloadChunk(chunk: org.bukkit.Chunk): boolean;
            /**
             * Safely unloads and saves the {@link Chunk} at the specified coordinates
             * <p>
             * This method is analogous to {@link #unloadChunk(int, int, boolean)}
             * where save is true.
             */
            // @ts-ignore
             unloadChunk(x: number, z: number): boolean;
            /**
             * Safely unloads and optionally saves the {@link Chunk} at the specified
             * coordinates.
             */
            // @ts-ignore
             unloadChunk(x: number, z: number, save: boolean): boolean;
            /**
             * Safely queues the {@link Chunk} at the specified coordinates for
             * unloading.
             */
            // @ts-ignore
             unloadChunkRequest(x: number, z: number): boolean;
            /**
             * Regenerates the {@link Chunk} at the specified coordinates
             */
            // @ts-ignore
             regenerateChunk(x: number, z: number): boolean;
            /**
             * Resends the {@link Chunk} to all clients
             */
            // @ts-ignore
             refreshChunk(x: number, z: number): boolean;
            /**
             * Gets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
            // @ts-ignore
             isChunkForceLoaded(x: number, z: number): boolean;
            /**
             * Sets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
            // @ts-ignore
             setChunkForceLoaded(x: number, z: number, forced: boolean): void;
            /**
             * Returns all force loaded chunks in this world.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
            // @ts-ignore
             getForceLoadedChunks(): java.util.Collection;
            /**
             * Adds a plugin ticket for the specified chunk, loading the chunk if it is
             * not already loaded.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            // @ts-ignore
             addPluginChunkTicket(x: number, z: number, plugin: org.bukkit.plugin.Plugin): boolean;
            /**
             * Removes the specified plugin's ticket for the specified chunk
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            // @ts-ignore
             removePluginChunkTicket(x: number, z: number, plugin: org.bukkit.plugin.Plugin): boolean;
            /**
             * Removes all plugin tickets for the specified plugin
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            // @ts-ignore
             removePluginChunkTickets(plugin: org.bukkit.plugin.Plugin): void;
            /**
             * Retrieves a collection specifying which plugins have tickets for the
             * specified chunk. This collection is not updated when plugin tickets are
             * added or removed to the chunk.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            // @ts-ignore
             getPluginChunkTickets(x: number, z: number): java.util.Collection;
            /**
             * Returns a map of which plugins have tickets for what chunks. The returned
             * map is not updated when plugin tickets are added or removed to chunks. If
             * a plugin has no tickets, it will be absent from the map.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            // @ts-ignore
             getPluginChunkTickets(): java.util.Map;
            /**
             * Drops an item at the specified {@link Location}
             */
            // @ts-ignore
             dropItem(location: org.bukkit.Location, item: org.bukkit.inventory.ItemStack): org.bukkit.entity.Item;
            /**
             * Drops an item at the specified {@link Location} with a random offset
             */
            // @ts-ignore
             dropItemNaturally(location: org.bukkit.Location, item: org.bukkit.inventory.ItemStack): org.bukkit.entity.Item;
            /**
             * Creates an {@link Arrow} entity at the given {@link Location}
             */
            // @ts-ignore
             spawnArrow(location: org.bukkit.Location, direction: org.bukkit.util.Vector, speed: number, spread: number): org.bukkit.entity.Arrow;
            /**
             * Creates an arrow entity of the given class at the given {@link Location}
             */
            // @ts-ignore
             spawnArrow(location: org.bukkit.Location, direction: org.bukkit.util.Vector, speed: number, spread: number, clazz: java.lang.Class): org.bukkit.entity.AbstractArrow;
            /**
             * Creates a tree at the given {@link Location}
             */
            // @ts-ignore
             generateTree(location: org.bukkit.Location, type: org.bukkit.TreeType): boolean;
            /**
             * Creates a tree at the given {@link Location}
             */
            // @ts-ignore
             generateTree(loc: org.bukkit.Location, type: org.bukkit.TreeType, delegate: org.bukkit.BlockChangeDelegate): boolean;
            /**
             * Creates a entity at the given {@link Location}
             */
            // @ts-ignore
             spawnEntity(loc: org.bukkit.Location, type: org.bukkit.entity.EntityType): org.bukkit.entity.Entity;
            /**
             * Strikes lightning at the given {@link Location}
             */
            // @ts-ignore
             strikeLightning(loc: org.bukkit.Location): org.bukkit.entity.LightningStrike;
            /**
             * Strikes lightning at the given {@link Location} without doing damage
             */
            // @ts-ignore
             strikeLightningEffect(loc: org.bukkit.Location): org.bukkit.entity.LightningStrike;
            /**
             * Get a list of all entities in this World
             */
            // @ts-ignore
             getEntities(): java.util.List;
            /**
             * Get a list of all living entities in this World
             */
            // @ts-ignore
             getLivingEntities(): java.util.List;
            /**
             * Get a collection of all entities in this World matching the given
             * class/interface
             */
            // @ts-ignore
             getEntitiesByClass(classes: java.lang.Class): java.util.Collection;
            /**
             * Get a collection of all entities in this World matching the given
             * class/interface
             */
            // @ts-ignore
             getEntitiesByClass(cls: java.lang.Class): java.util.Collection;
            /**
             * Get a collection of all entities in this World matching any of the
             * given classes/interfaces
             */
            // @ts-ignore
             getEntitiesByClasses(classes: java.lang.Class): java.util.Collection;
            /**
             * Get a list of all players in this World
             */
            // @ts-ignore
             getPlayers(): java.util.List;
            /**
             * Returns a list of entities within a bounding box centered around a
             * Location.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             */
            // @ts-ignore
             getNearbyEntities(location: org.bukkit.Location, x: number, y: number, z: number): java.util.Collection;
            /**
             * Returns a list of entities within a bounding box centered around a
             * Location.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             */
            // @ts-ignore
             getNearbyEntities(location: org.bukkit.Location, x: number, y: number, z: number, filter: java.util.function$.Predicate): java.util.Collection;
            /**
             * Returns a list of entities within the given bounding box.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             */
            // @ts-ignore
             getNearbyEntities(boundingBox: org.bukkit.util.BoundingBox): java.util.Collection;
            /**
             * Returns a list of entities within the given bounding box.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             */
            // @ts-ignore
             getNearbyEntities(boundingBox: org.bukkit.util.BoundingBox, filter: java.util.function$.Predicate): java.util.Collection;
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             */
            // @ts-ignore
             rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             */
            // @ts-ignore
             rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, raySize: number): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             */
            // @ts-ignore
             rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, filter: java.util.function$.Predicate): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             */
            // @ts-ignore
             rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, raySize: number, filter: java.util.function$.Predicate): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for block collisions using the blocks'
             * precise collision shapes.
             * <p>
             * This takes collisions with passable blocks into account, but ignores
             * fluids.
             * <p>
             * This may cause loading of chunks! Some implementations may impose
             * artificial restrictions on the maximum distance.
             */
            // @ts-ignore
             rayTraceBlocks(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for block collisions using the blocks'
             * precise collision shapes.
             * <p>
             * This takes collisions with passable blocks into account.
             * <p>
             * This may cause loading of chunks! Some implementations may impose
             * artificial restrictions on the maximum distance.
             */
            // @ts-ignore
             rayTraceBlocks(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for block collisions using the blocks'
             * precise collision shapes.
             * <p>
             * If collisions with passable blocks are ignored, fluid collisions are
             * ignored as well regardless of the fluid collision mode.
             * <p>
             * Portal blocks are only considered passable if the ray starts within
             * them. Apart from that collisions with portal blocks will be considered
             * even if collisions with passable blocks are otherwise ignored.
             * <p>
             * This may cause loading of chunks! Some implementations may impose
             * artificial restrictions on the maximum distance.
             */
            // @ts-ignore
             rayTraceBlocks(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, fluidCollisionMode: org.bukkit.FluidCollisionMode, ignorePassableBlocks: boolean): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for both block and entity collisions.
             * <p>
             * Block collisions use the blocks' precise collision shapes. The
             * <code>raySize</code> parameter is only taken into account for entity
             * collision checks.
             * <p>
             * If collisions with passable blocks are ignored, fluid collisions are
             * ignored as well regardless of the fluid collision mode.
             * <p>
             * Portal blocks are only considered passable if the ray starts within them.
             * Apart from that collisions with portal blocks will be considered even if
             * collisions with passable blocks are otherwise ignored.
             * <p>
             * This may cause loading of chunks! Some implementations may impose
             * artificial restrictions on the maximum distance.
             */
            // @ts-ignore
             rayTrace(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, fluidCollisionMode: org.bukkit.FluidCollisionMode, ignorePassableBlocks: boolean, raySize: number, filter: java.util.function$.Predicate): org.bukkit.util.RayTraceResult;
            /**
             * Gets the unique name of this world
             */
            // @ts-ignore
             getName(): string;
            /**
             * Gets the Unique ID of this world
             */
            // @ts-ignore
             getUID(): java.util.UUID;
            /**
             * Gets the default spawn {@link Location} of this world
             */
            // @ts-ignore
             getSpawnLocation(): org.bukkit.Location;
            /**
             * Sets the spawn location of the world.
             * <br>
             * The location provided must be equal to this world.
             */
            // @ts-ignore
             setSpawnLocation(location: org.bukkit.Location): boolean;
            /**
             * Sets the spawn location of the world
             */
            // @ts-ignore
             setSpawnLocation(x: number, y: number, z: number): boolean;
            /**
             * Gets the relative in-game time of this world.
             * <p>
             * The relative time is analogous to hours * 1000
             */
            // @ts-ignore
             getTime(): number;
            /**
             * Sets the relative in-game time on the server.
             * <p>
             * The relative time is analogous to hours * 1000
             * <p>
             * Note that setting the relative time below the current relative time
             * will actually move the clock forward a day. If you require to rewind
             * time, please see {@link #setFullTime(long)}
             */
            // @ts-ignore
             setTime(time: number): void;
            /**
             * Gets the full in-game time on this world
             */
            // @ts-ignore
             getFullTime(): number;
            /**
             * Sets the in-game time on the server
             * <p>
             * Note that this sets the full time of the world, which may cause adverse
             * effects such as breaking redstone clocks and any scheduled events
             */
            // @ts-ignore
             setFullTime(time: number): void;
            /**
             * Returns whether the world has an ongoing storm.
             */
            // @ts-ignore
             hasStorm(): boolean;
            /**
             * Set whether there is a storm. A duration will be set for the new
             * current conditions.
             */
            // @ts-ignore
             setStorm(hasStorm: boolean): void;
            /**
             * Get the remaining time in ticks of the current conditions.
             */
            // @ts-ignore
             getWeatherDuration(): number;
            /**
             * Set the remaining time in ticks of the current conditions.
             */
            // @ts-ignore
             setWeatherDuration(duration: number): void;
            /**
             * Returns whether there is thunder.
             */
            // @ts-ignore
             isThundering(): boolean;
            /**
             * Set whether it is thundering.
             */
            // @ts-ignore
             setThundering(thundering: boolean): void;
            /**
             * Get the thundering duration.
             */
            // @ts-ignore
             getThunderDuration(): number;
            /**
             * Set the thundering duration.
             */
            // @ts-ignore
             setThunderDuration(duration: number): void;
            /**
             * Creates explosion at given coordinates with given power
             */
            // @ts-ignore
             createExplosion(x: number, y: number, z: number, power: number): boolean;
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire.
             */
            // @ts-ignore
             createExplosion(x: number, y: number, z: number, power: number, setFire: boolean): boolean;
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire or breaking blocks.
             */
            // @ts-ignore
             createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean): boolean;
            /**
             * Creates explosion at given coordinates with given power
             */
            // @ts-ignore
             createExplosion(loc: org.bukkit.Location, power: number): boolean;
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire.
             */
            // @ts-ignore
             createExplosion(loc: org.bukkit.Location, power: number, setFire: boolean): boolean;
            /**
             * Gets the {@link Environment} type of this world
             */
            // @ts-ignore
             getEnvironment(): org.bukkit.World.Environment;
            /**
             * Gets the Seed for this world.
             */
            // @ts-ignore
             getSeed(): number;
            /**
             * Gets the current PVP setting for this world.
             */
            // @ts-ignore
             getPVP(): boolean;
            /**
             * Sets the PVP setting for this world.
             */
            // @ts-ignore
             setPVP(pvp: boolean): void;
            /**
             * Gets the chunk generator for this world
             */
            // @ts-ignore
             getGenerator(): org.bukkit.generator.ChunkGenerator;
            /**
             * Saves world to disk
             */
            // @ts-ignore
             save(): void;
            /**
             * Gets a list of all applied {@link BlockPopulator}s for this World
             */
            // @ts-ignore
             getPopulators(): java.util.List;
            /**
             * Spawn an entity of a specific class at the given {@link Location}
             */
            // @ts-ignore
             spawn(location: org.bukkit.Location, clazz: java.lang.Class): org.bukkit.entity.Entity;
            /**
             * Spawn an entity of a specific class at the given {@link Location}, with
             * the supplied function run before the entity is added to the world.
             * <br>
             * Note that when the function is run, the entity will not be actually in
             * the world. Any operation involving such as teleporting the entity is undefined
             * until after this function returns.
             */
            // @ts-ignore
             spawn(location: org.bukkit.Location, clazz: java.lang.Class, func: org.bukkit.util.Consumer): org.bukkit.entity.Entity;
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of
             * the specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             */
            // @ts-ignore
             spawnFallingBlock(location: org.bukkit.Location, data: org.bukkit.material.MaterialData): org.bukkit.entity.FallingBlock;
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of
             * the specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             */
            // @ts-ignore
             spawnFallingBlock(location: org.bukkit.Location, data: org.bukkit.block.data.BlockData): org.bukkit.entity.FallingBlock;
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of the
             * specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             */
            // @ts-ignore
             spawnFallingBlock(location: org.bukkit.Location, material: org.bukkit.Material, data: number): org.bukkit.entity.FallingBlock;
            /**
             * Plays an effect to all players within a default radius around a given
             * location.
             */
            // @ts-ignore
             playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: number): void;
            /**
             * Plays an effect to all players within a given radius around a location.
             */
            // @ts-ignore
             playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: number, radius: number): void;
            /**
             * Plays an effect to all players within a default radius around a given
             * location.
             */
            // @ts-ignore
             playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: java.lang.Object): void;
            /**
             * Plays an effect to all players within a given radius around a location.
             */
            // @ts-ignore
             playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: java.lang.Object, radius: number): void;
            /**
             * Get empty chunk snapshot (equivalent to all air blocks), optionally
             * including valid biome data. Used for representing an ungenerated chunk,
             * or for fetching only biome data without loading a chunk.
             */
            // @ts-ignore
             getEmptyChunkSnapshot(x: number, z: number, includeBiome: boolean, includeBiomeTemp: boolean): org.bukkit.ChunkSnapshot;
            /**
             * Sets the spawn flags for this.
             */
            // @ts-ignore
             setSpawnFlags(allowMonsters: boolean, allowAnimals: boolean): void;
            /**
             * Gets whether animals can spawn in this world.
             */
            // @ts-ignore
             getAllowAnimals(): boolean;
            /**
             * Gets whether monsters can spawn in this world.
             */
            // @ts-ignore
             getAllowMonsters(): boolean;
            /**
             * Gets the biome for the given block coordinates.
             */
            // @ts-ignore
             getBiome(x: number, z: number): org.bukkit.block.Biome;
            /**
             * Sets the biome for the given block coordinates
             */
            // @ts-ignore
             setBiome(x: number, z: number, bio: org.bukkit.block.Biome): void;
            /**
             * Gets the temperature for the given block coordinates.
             * <p>
             * It is safe to run this method when the block does not exist, it will
             * not create the block.
             * <p>
             * This method will return the raw temperature without adjusting for block
             * height effects.
             */
            // @ts-ignore
             getTemperature(x: number, z: number): number;
            /**
             * Gets the humidity for the given block coordinates.
             * <p>
             * It is safe to run this method when the block does not exist, it will
             * not create the block.
             */
            // @ts-ignore
             getHumidity(x: number, z: number): number;
            /**
             * Gets the maximum height of this world.
             * <p>
             * If the max height is 100, there are only blocks from y=0 to y=99.
             */
            // @ts-ignore
             getMaxHeight(): number;
            /**
             * Gets the sea level for this world.
             * <p>
             * This is often half of {@link #getMaxHeight()}
             */
            // @ts-ignore
             getSeaLevel(): number;
            /**
             * Gets whether the world's spawn area should be kept loaded into memory
             * or not.
             */
            // @ts-ignore
             getKeepSpawnInMemory(): boolean;
            /**
             * Sets whether the world's spawn area should be kept loaded into memory
             * or not.
             */
            // @ts-ignore
             setKeepSpawnInMemory(keepLoaded: boolean): void;
            /**
             * Gets whether or not the world will automatically save
             */
            // @ts-ignore
             isAutoSave(): boolean;
            /**
             * Sets whether or not the world will automatically save
             */
            // @ts-ignore
             setAutoSave(value: boolean): void;
            /**
             * Sets the Difficulty of the world.
             */
            // @ts-ignore
             setDifficulty(difficulty: org.bukkit.Difficulty): void;
            /**
             * Gets the Difficulty of the world.
             */
            // @ts-ignore
             getDifficulty(): org.bukkit.Difficulty;
            /**
             * Gets the folder of this world on disk.
             */
            // @ts-ignore
             getWorldFolder(): java.io.File;
            /**
             * Gets the type of this world.
             */
            // @ts-ignore
             getWorldType(): org.bukkit.WorldType;
            /**
             * Gets whether or not structures are being generated.
             */
            // @ts-ignore
             canGenerateStructures(): boolean;
            /**
             * Gets the world's ticks per animal spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn animals.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn animals in
             * this world every tick.
             * <li>A value of 400 will mean the server will attempt to spawn animals
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, animal spawning will be disabled for this world. We
             * recommend using {@link #setSpawnFlags(boolean, boolean)} to control
             * this instead.
             * <p>
             * Minecraft default: 400.
             */
            // @ts-ignore
             getTicksPerAnimalSpawns(): number;
            /**
             * Sets the world's ticks per animal spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn animals.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn animals in
             * this world every tick.
             * <li>A value of 400 will mean the server will attempt to spawn animals
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, animal spawning will be disabled for this world. We
             * recommend using {@link #setSpawnFlags(boolean, boolean)} to control
             * this instead.
             * <p>
             * Minecraft default: 400.
             */
            // @ts-ignore
             setTicksPerAnimalSpawns(ticksPerAnimalSpawns: number): void;
            /**
             * Gets the world's ticks per monster spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn monsters.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn monsters in
             * this world every tick.
             * <li>A value of 400 will mean the server will attempt to spawn monsters
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, monsters spawning will be disabled for this world. We
             * recommend using {@link #setSpawnFlags(boolean, boolean)} to control
             * this instead.
             * <p>
             * Minecraft default: 1.
             */
            // @ts-ignore
             getTicksPerMonsterSpawns(): number;
            /**
             * Sets the world's ticks per monster spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn monsters.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn monsters in
             * this world on every tick.
             * <li>A value of 400 will mean the server will attempt to spawn monsters
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, monsters spawning will be disabled for this world. We
             * recommend using {@link #setSpawnFlags(boolean, boolean)} to control
             * this instead.
             * <p>
             * Minecraft default: 1.
             */
            // @ts-ignore
             setTicksPerMonsterSpawns(ticksPerMonsterSpawns: number): void;
            /**
             * Gets limit for number of monsters that can spawn in a chunk in this
             * world
             */
            // @ts-ignore
             getMonsterSpawnLimit(): number;
            /**
             * Sets the limit for number of monsters that can spawn in a chunk in this
             * world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             */
            // @ts-ignore
             setMonsterSpawnLimit(limit: number): void;
            /**
             * Gets the limit for number of animals that can spawn in a chunk in this
             * world
             */
            // @ts-ignore
             getAnimalSpawnLimit(): number;
            /**
             * Sets the limit for number of animals that can spawn in a chunk in this
             * world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             */
            // @ts-ignore
             setAnimalSpawnLimit(limit: number): void;
            /**
             * Gets the limit for number of water animals that can spawn in a chunk in
             * this world
             */
            // @ts-ignore
             getWaterAnimalSpawnLimit(): number;
            /**
             * Sets the limit for number of water animals that can spawn in a chunk in
             * this world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             */
            // @ts-ignore
             setWaterAnimalSpawnLimit(limit: number): void;
            /**
             * Gets the limit for number of ambient mobs that can spawn in a chunk in
             * this world
             */
            // @ts-ignore
             getAmbientSpawnLimit(): number;
            /**
             * Sets the limit for number of ambient mobs that can spawn in a chunk in
             * this world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             */
            // @ts-ignore
             setAmbientSpawnLimit(limit: number): void;
            /**
             * Play a Sound at the provided Location in the World
             * <p>
             * This function will fail silently if Location or Sound are null.
             */
            // @ts-ignore
             playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, volume: number, pitch: number): void;
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null. No
             * sound will be heard by the players if their clients do not have the
             * respective sound for the value passed.
             */
            // @ts-ignore
             playSound(location: org.bukkit.Location, sound: string, volume: number, pitch: number): void;
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null.
             */
            // @ts-ignore
             playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, category: org.bukkit.SoundCategory, volume: number, pitch: number): void;
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null. No sound
             * will be heard by the players if their clients do not have the respective
             * sound for the value passed.
             */
            // @ts-ignore
             playSound(location: org.bukkit.Location, sound: string, category: org.bukkit.SoundCategory, volume: number, pitch: number): void;
            /**
             * Get an array containing the names of all the {@link GameRule}s.
             */
            // @ts-ignore
             getGameRules(): java.lang.String[];
            /**
             * Gets the current state of the specified rule
             * <p>
             * Will return null if rule passed is null
             */
            // @ts-ignore
             getGameRuleValue(rule: string): string;
            /**
             * Set the specified gamerule to specified value.
             * <p>
             * The rule may attempt to validate the value passed, will return true if
             * value was set.
             * <p>
             * If rule is null, the function will return false.
             */
            // @ts-ignore
             setGameRuleValue(rule: string, value: string): boolean;
            /**
             * Checks if string is a valid game rule
             */
            // @ts-ignore
             isGameRule(rule: string): boolean;
            /**
             * Get the current value for a given {@link GameRule}.
             */
            // @ts-ignore
             getGameRuleValue(rule: org.bukkit.GameRule): java.lang.Object;
            /**
             * Get the default value for a given {@link GameRule}. This value is not
             * guaranteed to match the current value.
             */
            // @ts-ignore
             getGameRuleDefault(rule: org.bukkit.GameRule): java.lang.Object;
            /**
             * Set the given {@link GameRule}'s new value.
             */
            // @ts-ignore
             setGameRule(rule: org.bukkit.GameRule, newValue: java.lang.Object): boolean;
            /**
             * Gets the world border for this world.
             */
            // @ts-ignore
             getWorldBorder(): org.bukkit.WorldBorder;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, data: java.lang.Object): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, data: java.lang.Object): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: java.lang.Object): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: java.lang.Object): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: java.lang.Object): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: java.lang.Object): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: java.lang.Object, force: boolean): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
            // @ts-ignore
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: java.lang.Object, force: boolean): void;
            /**
             * Find the closest nearby structure of a given {@link StructureType}.
             * Finding unexplored structures can, and will, block if the world is
             * looking in chunks that gave not generated yet. This can lead to the world
             * temporarily freezing while locating an unexplored structure.
             * <p>
             * The {@code radius} is not a rigid square radius. Each structure may alter
             * how many chunks to check for each iteration. Do not assume that only a
             * radius x radius chunk area will be checked. For example,
             * {@link StructureType#WOODLAND_MANSION} can potentially check up to 20,000
             * blocks away (or more) regardless of the radius used.
             * <p>
             * This will <i>not</i> load or generate chunks. This can also lead to
             * instances where the server can hang if you are only looking for
             * unexplored structures. This is because it will keep looking further and
             * further out in order to find the structure.
             */
            // @ts-ignore
             locateNearestStructure(origin: org.bukkit.Location, structureType: org.bukkit.StructureType, radius: number, findUnexplored: boolean): org.bukkit.Location;
        }
    }
}
