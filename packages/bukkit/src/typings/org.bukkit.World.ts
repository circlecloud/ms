declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface World extends org.bukkit.plugin.messaging.PluginMessageRecipient, org.bukkit.metadata.Metadatable {
            /**
             * Gets the {@link Block} at the given coordinates
             */
             getBlockAt(x: number, y: number, z: number): org.bukkit.block.Block;
            /**
             * Gets the {@link Block} at the given {@link Location}
             */
             getBlockAt(location: org.bukkit.Location): org.bukkit.block.Block;
            /**
             * Gets the y coordinate of the lowest block at this position such that the
             * block and all blocks above it are transparent for lighting purposes.
             */
             getHighestBlockYAt(x: number, z: number): number;
            /**
             * Gets the y coordinate of the lowest block at the given {@link Location}
             * such that the block and all blocks above it are transparent for lighting
             * purposes.
             */
             getHighestBlockYAt(location: org.bukkit.Location): number;
            /**
             * Gets the lowest block at the given coordinates such that the block and
             * all blocks above it are transparent for lighting purposes.
             */
             getHighestBlockAt(x: number, z: number): org.bukkit.block.Block;
            /**
             * Gets the lowest block at the given {@link Location} such that the block
             * and all blocks above it are transparent for lighting purposes.
             */
             getHighestBlockAt(location: org.bukkit.Location): org.bukkit.block.Block;
            /**
             * Gets the {@link Chunk} at the given coordinates
             */
             getChunkAt(x: number, z: number): org.bukkit.Chunk;
            /**
             * Gets the {@link Chunk} at the given {@link Location}
             */
             getChunkAt(location: org.bukkit.Location): org.bukkit.Chunk;
            /**
             * Gets the {@link Chunk} that contains the given {@link Block}
             */
             getChunkAt(block: org.bukkit.block.Block): org.bukkit.Chunk;
            /**
             * Checks if the specified {@link Chunk} is loaded
             */
             isChunkLoaded(chunk: org.bukkit.Chunk): boolean;
            /**
             * Gets an array of all loaded {@link Chunk}s
             */
             getLoadedChunks(): org.bukkit.Chunk[];
            /**
             * Loads the specified {@link Chunk}.
             * <p>
             * <b>This method will keep the specified chunk loaded until one of the
             * unload methods is manually called. Callers are advised to instead use
             * getChunkAt which will only temporarily load the requested chunk.</b>
             */
             loadChunk(chunk: org.bukkit.Chunk): void;
            /**
             * Checks if the {@link Chunk} at the specified coordinates is loaded
             */
             isChunkLoaded(x: number, z: number): boolean;
            /**
             * Checks if the {@link Chunk} at the specified coordinates is generated
             */
             isChunkGenerated(x: number, z: number): boolean;
            /**
             * Checks if the {@link Chunk} at the specified coordinates is loaded and
             * in use by one or more players
             */
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
             loadChunk(x: number, z: number): void;
            /**
             * Loads the {@link Chunk} at the specified coordinates.
             * <p>
             * <b>This method will keep the specified chunk loaded until one of the
             * unload methods is manually called. Callers are advised to instead use
             * getChunkAt which will only temporarily load the requested chunk.</b>
             */
             loadChunk(x: number, z: number, generate: boolean): boolean;
            /**
             * Safely unloads and saves the {@link Chunk} at the specified coordinates
             * <p>
             * This method is analogous to {@link #unloadChunk(int, int, boolean)}
             * where save is true.
             */
             unloadChunk(chunk: org.bukkit.Chunk): boolean;
            /**
             * Safely unloads and saves the {@link Chunk} at the specified coordinates
             * <p>
             * This method is analogous to {@link #unloadChunk(int, int, boolean)}
             * where save is true.
             */
             unloadChunk(x: number, z: number): boolean;
            /**
             * Safely unloads and optionally saves the {@link Chunk} at the specified
             * coordinates.
             */
             unloadChunk(x: number, z: number, save: boolean): boolean;
            /**
             * Safely queues the {@link Chunk} at the specified coordinates for
             * unloading.
             */
             unloadChunkRequest(x: number, z: number): boolean;
            /**
             * Regenerates the {@link Chunk} at the specified coordinates
             */
             regenerateChunk(x: number, z: number): boolean;
            /**
             * Resends the {@link Chunk} to all clients
             */
             refreshChunk(x: number, z: number): boolean;
            /**
             * Gets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
             isChunkForceLoaded(x: number, z: number): boolean;
            /**
             * Sets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
             setChunkForceLoaded(x: number, z: number, forced: boolean): void;
            /**
             * Returns all force loaded chunks in this world.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
             getForceLoadedChunks(): any[] /*java.util.Collection*/;
            /**
             * Adds a plugin ticket for the specified chunk, loading the chunk if it is
             * not already loaded.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
             addPluginChunkTicket(x: number, z: number, plugin: org.bukkit.plugin.Plugin): boolean;
            /**
             * Removes the specified plugin's ticket for the specified chunk
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
             removePluginChunkTicket(x: number, z: number, plugin: org.bukkit.plugin.Plugin): boolean;
            /**
             * Removes all plugin tickets for the specified plugin
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
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
             getPluginChunkTickets(x: number, z: number): any[] /*java.util.Collection*/;
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
             getPluginChunkTickets(): Map<any, any> /*java.util.Map*/;
            /**
             * Drops an item at the specified {@link Location}
             */
             dropItem(location: org.bukkit.Location, item: org.bukkit.inventory.ItemStack): org.bukkit.entity.Item;
            /**
             * Drops an item at the specified {@link Location} with a random offset
             */
             dropItemNaturally(location: org.bukkit.Location, item: org.bukkit.inventory.ItemStack): org.bukkit.entity.Item;
            /**
             * Creates an {@link Arrow} entity at the given {@link Location}
             */
             spawnArrow(location: org.bukkit.Location, direction: org.bukkit.util.Vector, speed: number, spread: number): org.bukkit.entity.Arrow;
            /**
             * Creates an arrow entity of the given class at the given {@link Location}
             */
             spawnArrow(location: org.bukkit.Location, direction: org.bukkit.util.Vector, speed: number, spread: number, clazz: any): org.bukkit.entity.AbstractArrow;
            /**
             * Creates a tree at the given {@link Location}
             */
             generateTree(location: org.bukkit.Location, type: org.bukkit.TreeType): boolean;
            /**
             * Creates a tree at the given {@link Location}
             */
             generateTree(loc: org.bukkit.Location, type: org.bukkit.TreeType, delegate: org.bukkit.BlockChangeDelegate): boolean;
            /**
             * Creates a entity at the given {@link Location}
             */
             spawnEntity(loc: org.bukkit.Location, type: org.bukkit.entity.EntityType): org.bukkit.entity.Entity;
            /**
             * Strikes lightning at the given {@link Location}
             */
             strikeLightning(loc: org.bukkit.Location): org.bukkit.entity.LightningStrike;
            /**
             * Strikes lightning at the given {@link Location} without doing damage
             */
             strikeLightningEffect(loc: org.bukkit.Location): org.bukkit.entity.LightningStrike;
            /**
             * Get a list of all entities in this World
             */
             getEntities(): any[] /*java.util.List*/;
            /**
             * Get a list of all living entities in this World
             */
             getLivingEntities(): any[] /*java.util.List*/;
            /**
             * Get a collection of all entities in this World matching the given
             * class/interface
             */
             getEntitiesByClass(classes: any): any[] /*java.util.Collection*/;
            /**
             * Get a collection of all entities in this World matching the given
             * class/interface
             */
             getEntitiesByClass(cls: any): any[] /*java.util.Collection*/;
            /**
             * Get a collection of all entities in this World matching any of the
             * given classes/interfaces
             */
             getEntitiesByClasses(classes: any): any[] /*java.util.Collection*/;
            /**
             * Get a list of all players in this World
             */
             getPlayers(): any[] /*java.util.List*/;
            /**
             * Returns a list of entities within a bounding box centered around a
             * Location.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             */
             getNearbyEntities(location: org.bukkit.Location, x: number, y: number, z: number): any[] /*java.util.Collection*/;
            /**
             * Returns a list of entities within a bounding box centered around a
             * Location.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             */
             getNearbyEntities(location: org.bukkit.Location, x: number, y: number, z: number, filter: any): any[] /*java.util.Collection*/;
            /**
             * Returns a list of entities within the given bounding box.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             */
             getNearbyEntities(boundingBox: org.bukkit.util.BoundingBox): any[] /*java.util.Collection*/;
            /**
             * Returns a list of entities within the given bounding box.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             */
             getNearbyEntities(boundingBox: org.bukkit.util.BoundingBox, filter: any): any[] /*java.util.Collection*/;
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             */
             rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             */
             rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, raySize: number): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             */
             rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, filter: any): org.bukkit.util.RayTraceResult;
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             */
             rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, raySize: number, filter: any): org.bukkit.util.RayTraceResult;
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
             rayTrace(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number, fluidCollisionMode: org.bukkit.FluidCollisionMode, ignorePassableBlocks: boolean, raySize: number, filter: any): org.bukkit.util.RayTraceResult;
            /**
             * Gets the unique name of this world
             */
             getName(): string;
            /**
             * Gets the Unique ID of this world
             */
             getUID(): any;
            /**
             * Gets the default spawn {@link Location} of this world
             */
             getSpawnLocation(): org.bukkit.Location;
            /**
             * Sets the spawn location of the world.
             * <br>
             * The location provided must be equal to this world.
             */
             setSpawnLocation(location: org.bukkit.Location): boolean;
            /**
             * Sets the spawn location of the world
             */
             setSpawnLocation(x: number, y: number, z: number): boolean;
            /**
             * Gets the relative in-game time of this world.
             * <p>
             * The relative time is analogous to hours * 1000
             */
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
             setTime(time: number): void;
            /**
             * Gets the full in-game time on this world
             */
             getFullTime(): number;
            /**
             * Sets the in-game time on the server
             * <p>
             * Note that this sets the full time of the world, which may cause adverse
             * effects such as breaking redstone clocks and any scheduled events
             */
             setFullTime(time: number): void;
            /**
             * Returns whether the world has an ongoing storm.
             */
             hasStorm(): boolean;
            /**
             * Set whether there is a storm. A duration will be set for the new
             * current conditions.
             */
             setStorm(hasStorm: boolean): void;
            /**
             * Get the remaining time in ticks of the current conditions.
             */
             getWeatherDuration(): number;
            /**
             * Set the remaining time in ticks of the current conditions.
             */
             setWeatherDuration(duration: number): void;
            /**
             * Returns whether there is thunder.
             */
             isThundering(): boolean;
            /**
             * Set whether it is thundering.
             */
             setThundering(thundering: boolean): void;
            /**
             * Get the thundering duration.
             */
             getThunderDuration(): number;
            /**
             * Set the thundering duration.
             */
             setThunderDuration(duration: number): void;
            /**
             * Creates explosion at given coordinates with given power
             */
             createExplosion(x: number, y: number, z: number, power: number): boolean;
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire.
             */
             createExplosion(x: number, y: number, z: number, power: number, setFire: boolean): boolean;
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire or breaking blocks.
             */
             createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean): boolean;
            /**
             * Creates explosion at given coordinates with given power
             */
             createExplosion(loc: org.bukkit.Location, power: number): boolean;
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire.
             */
             createExplosion(loc: org.bukkit.Location, power: number, setFire: boolean): boolean;
            /**
             * Gets the {@link Environment} type of this world
             */
             getEnvironment(): org.bukkit.World.Environment;
            /**
             * Gets the Seed for this world.
             */
             getSeed(): number;
            /**
             * Gets the current PVP setting for this world.
             */
             getPVP(): boolean;
            /**
             * Sets the PVP setting for this world.
             */
             setPVP(pvp: boolean): void;
            /**
             * Gets the chunk generator for this world
             */
             getGenerator(): org.bukkit.generator.ChunkGenerator;
            /**
             * Saves world to disk
             */
             save(): void;
            /**
             * Gets a list of all applied {@link BlockPopulator}s for this World
             */
             getPopulators(): any[] /*java.util.List*/;
            /**
             * Spawn an entity of a specific class at the given {@link Location}
             */
             spawn(location: org.bukkit.Location, clazz: any): org.bukkit.entity.Entity;
            /**
             * Spawn an entity of a specific class at the given {@link Location}, with
             * the supplied function run before the entity is added to the world.
             * <br>
             * Note that when the function is run, the entity will not be actually in
             * the world. Any operation involving such as teleporting the entity is undefined
             * until after this function returns.
             */
             spawn(location: org.bukkit.Location, clazz: any, func: org.bukkit.util.Consumer): org.bukkit.entity.Entity;
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of
             * the specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             */
             spawnFallingBlock(location: org.bukkit.Location, data: org.bukkit.material.MaterialData): org.bukkit.entity.FallingBlock;
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of
             * the specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             */
             spawnFallingBlock(location: org.bukkit.Location, data: org.bukkit.block.data.BlockData): org.bukkit.entity.FallingBlock;
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of the
             * specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             */
             spawnFallingBlock(location: org.bukkit.Location, material: org.bukkit.Material, data: number): org.bukkit.entity.FallingBlock;
            /**
             * Plays an effect to all players within a default radius around a given
             * location.
             */
             playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: number): void;
            /**
             * Plays an effect to all players within a given radius around a location.
             */
             playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: number, radius: number): void;
            /**
             * Plays an effect to all players within a default radius around a given
             * location.
             */
             playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: any): void;
            /**
             * Plays an effect to all players within a given radius around a location.
             */
             playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: any, radius: number): void;
            /**
             * Get empty chunk snapshot (equivalent to all air blocks), optionally
             * including valid biome data. Used for representing an ungenerated chunk,
             * or for fetching only biome data without loading a chunk.
             */
             getEmptyChunkSnapshot(x: number, z: number, includeBiome: boolean, includeBiomeTemp: boolean): org.bukkit.ChunkSnapshot;
            /**
             * Sets the spawn flags for this.
             */
             setSpawnFlags(allowMonsters: boolean, allowAnimals: boolean): void;
            /**
             * Gets whether animals can spawn in this world.
             */
             getAllowAnimals(): boolean;
            /**
             * Gets whether monsters can spawn in this world.
             */
             getAllowMonsters(): boolean;
            /**
             * Gets the biome for the given block coordinates.
             */
             getBiome(x: number, z: number): org.bukkit.block.Biome;
            /**
             * Sets the biome for the given block coordinates
             */
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
             getTemperature(x: number, z: number): number;
            /**
             * Gets the humidity for the given block coordinates.
             * <p>
             * It is safe to run this method when the block does not exist, it will
             * not create the block.
             */
             getHumidity(x: number, z: number): number;
            /**
             * Gets the maximum height of this world.
             * <p>
             * If the max height is 100, there are only blocks from y=0 to y=99.
             */
             getMaxHeight(): number;
            /**
             * Gets the sea level for this world.
             * <p>
             * This is often half of {@link #getMaxHeight()}
             */
             getSeaLevel(): number;
            /**
             * Gets whether the world's spawn area should be kept loaded into memory
             * or not.
             */
             getKeepSpawnInMemory(): boolean;
            /**
             * Sets whether the world's spawn area should be kept loaded into memory
             * or not.
             */
             setKeepSpawnInMemory(keepLoaded: boolean): void;
            /**
             * Gets whether or not the world will automatically save
             */
             isAutoSave(): boolean;
            /**
             * Sets whether or not the world will automatically save
             */
             setAutoSave(value: boolean): void;
            /**
             * Sets the Difficulty of the world.
             */
             setDifficulty(difficulty: org.bukkit.Difficulty): void;
            /**
             * Gets the Difficulty of the world.
             */
             getDifficulty(): org.bukkit.Difficulty;
            /**
             * Gets the folder of this world on disk.
             */
             getWorldFolder(): any;
            /**
             * Gets the type of this world.
             */
             getWorldType(): org.bukkit.WorldType;
            /**
             * Gets whether or not structures are being generated.
             */
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
             setTicksPerMonsterSpawns(ticksPerMonsterSpawns: number): void;
            /**
             * Gets limit for number of monsters that can spawn in a chunk in this
             * world
             */
             getMonsterSpawnLimit(): number;
            /**
             * Sets the limit for number of monsters that can spawn in a chunk in this
             * world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             */
             setMonsterSpawnLimit(limit: number): void;
            /**
             * Gets the limit for number of animals that can spawn in a chunk in this
             * world
             */
             getAnimalSpawnLimit(): number;
            /**
             * Sets the limit for number of animals that can spawn in a chunk in this
             * world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             */
             setAnimalSpawnLimit(limit: number): void;
            /**
             * Gets the limit for number of water animals that can spawn in a chunk in
             * this world
             */
             getWaterAnimalSpawnLimit(): number;
            /**
             * Sets the limit for number of water animals that can spawn in a chunk in
             * this world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             */
             setWaterAnimalSpawnLimit(limit: number): void;
            /**
             * Gets the limit for number of ambient mobs that can spawn in a chunk in
             * this world
             */
             getAmbientSpawnLimit(): number;
            /**
             * Sets the limit for number of ambient mobs that can spawn in a chunk in
             * this world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             */
             setAmbientSpawnLimit(limit: number): void;
            /**
             * Play a Sound at the provided Location in the World
             * <p>
             * This function will fail silently if Location or Sound are null.
             */
             playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, volume: number, pitch: number): void;
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null. No
             * sound will be heard by the players if their clients do not have the
             * respective sound for the value passed.
             */
             playSound(location: org.bukkit.Location, sound: string, volume: number, pitch: number): void;
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null.
             */
             playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, category: org.bukkit.SoundCategory, volume: number, pitch: number): void;
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null. No sound
             * will be heard by the players if their clients do not have the respective
             * sound for the value passed.
             */
             playSound(location: org.bukkit.Location, sound: string, category: org.bukkit.SoundCategory, volume: number, pitch: number): void;
            /**
             * Get an array containing the names of all the {@link GameRule}s.
             */
             getGameRules(): any;
            /**
             * Gets the current state of the specified rule
             * <p>
             * Will return null if rule passed is null
             */
             getGameRuleValue(rule: string): string;
            /**
             * Set the specified gamerule to specified value.
             * <p>
             * The rule may attempt to validate the value passed, will return true if
             * value was set.
             * <p>
             * If rule is null, the function will return false.
             */
             setGameRuleValue(rule: string, value: string): boolean;
            /**
             * Checks if string is a valid game rule
             */
             isGameRule(rule: string): boolean;
            /**
             * Get the current value for a given {@link GameRule}.
             */
             getGameRuleValue(rule: org.bukkit.GameRule): any;
            /**
             * Get the default value for a given {@link GameRule}. This value is not
             * guaranteed to match the current value.
             */
             getGameRuleDefault(rule: org.bukkit.GameRule): any;
            /**
             * Set the given {@link GameRule}'s new value.
             */
             setGameRule(rule: org.bukkit.GameRule, newValue: any): boolean;
            /**
             * Gets the world border for this world.
             */
             getWorldBorder(): org.bukkit.WorldBorder;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             */
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             */
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             */
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, data: any): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             */
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, data: any): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             */
             spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
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
             locateNearestStructure(origin: org.bukkit.Location, structureType: org.bukkit.StructureType, radius: number, findUnexplored: boolean): org.bukkit.Location;
        }
    }
}
