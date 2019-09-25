declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface World extends org.spongepowered.api.world.extent.Extent, org.spongepowered.api.world.weather.WeatherUniverse, org.spongepowered.api.effect.Viewer, org.spongepowered.api.service.context.ContextSource, org.spongepowered.api.text.channel.MessageReceiver, org.spongepowered.api.text.channel.ChatTypeMessageReceiver {
                    /**
                     * Gets an unmodifiable collection of {@link Player}s currently in this world.
                     */
                    // @ts-ignore
                     getPlayers(): any[] /*java.util.Collection*/;
                    // @ts-ignore
                     getLocation(position: any /*Vector3i*/): org.spongepowered.api.world.Location;
                    // @ts-ignore
                     getLocation(x: number, y: number, z: number): org.spongepowered.api.world.Location;
                    // @ts-ignore
                     getLocation(position: any /*Vector3d*/): org.spongepowered.api.world.Location;
                    // @ts-ignore
                     getLocation(x: number, y: number, z: number): org.spongepowered.api.world.Location;
                    /**
                     * Gets a {@link LocatableBlock} for the desired {@link Vector3i} position.
                     */
                    // @ts-ignore
                     getLocatableBlock(position: any /*Vector3i*/): org.spongepowered.api.world.LocatableBlock;
                    /**
                     * Gets a {@link LocatableBlock} for the desired {@code x, y, z} coordinates.
                     */
                    // @ts-ignore
                     getLocatableBlock(x: number, y: number, z: number): org.spongepowered.api.world.LocatableBlock;
                    /**
                     * Gets the loaded chunk at the given block coordinate position.
                     */
                    // @ts-ignore
                     getChunkAtBlock(blockPosition: any /*Vector3i*/): any;
                    /**
                     * Gets the loaded chunk at the given block coordinate position.
                     */
                    // @ts-ignore
                     getChunkAtBlock(bx: number, by: number, bz: number): any;
                    /**
                     * Gets the loaded chunk at the given chunk coordinate position.
                     */
                    // @ts-ignore
                     getChunk(chunkPosition: any /*Vector3i*/): any;
                    /**
                     * Gets the loaded chunk at the given chunk coordinate position.
                     * <p>In Vanilla, the y coordinate will always be 0.</p>
                     */
                    // @ts-ignore
                     getChunk(cx: number, cy: number, cz: number): any;
                    /**
                     * Gets the chunk at the given chunk coordinate position if it exists or if
                     * {@code shouldGenerate} is true and the chunk is generated.
                     */
                    // @ts-ignore
                     loadChunk(chunkPosition: any /*Vector3i*/, shouldGenerate: boolean): any;
                    /**
                     * Gets the chunk at the given chunk coordinate position if it exists or if
                     * {@code shouldGenerate} is true and the chunk is generated.
                     * <p>In Vanilla, the y coordinate will always be 0.</p>
                     */
                    // @ts-ignore
                     loadChunk(cx: number, cy: number, cz: number, shouldGenerate: boolean): any;
                    /**
                     * Gets the chunk at the given chunk coordinate position if it exists or if
                     * {@code shouldGenerate} is true and the chunk is generated.
                     * <p>Unlike {@link #loadChunk(Vector3i, boolean)} this method allows the
                     * implementation to load the chunk asynchronously without blocking the
                     * main server thread. The {@link Future} will be called with the chunk once
                     * the operation was completed.</p>
                     * <p><b>Note:</b> If asynchronous chunk loading is not supported by
                     * the implementation, the chunk will be loaded synchronously and the
                     * {@link Future} will be called immediately.</p>
                     */
                    // @ts-ignore
                     loadChunkAsync(chunkPosition: any /*Vector3i*/, shouldGenerate: boolean): any;
                    /**
                     * Gets the chunk at the given chunk coordinate position if it exists or if
                     * {@code shouldGenerate} is true and the chunk is generated.
                     * <p>Unlike {@link #loadChunk(Vector3i, boolean)} this method allows the
                     * implementation to load the chunk asynchronously without blocking the
                     * main server thread. The {@link Future} will be called with the chunk once
                     * the operation was completed.</p>
                     * <p><b>Note:</b> If asynchronous chunk loading is not supported by
                     * the implementation, the chunk will be loaded synchronously and the
                     * {@link Future} will be called immediately.</p>
                     */
                    // @ts-ignore
                     loadChunkAsync(cx: number, cy: number, cz: number, shouldGenerate: boolean): any;
                    /**
                     * Regenerates a chunk at the given chunk coordinate position.
                     */
                    // @ts-ignore
                     regenerateChunk(chunkPosition: any /*Vector3i*/): any;
                    /**
                     * Regenerates a chunk at the given chunk coordinates.
                     */
                    // @ts-ignore
                     regenerateChunk(cx: number, cy: number, cz: number): any;
                    /**
                     * Regenerates a chunk at the given chunk coordinate position.
                     */
                    // @ts-ignore
                     regenerateChunk(chunkPosition: any /*Vector3i*/, flag: org.spongepowered.api.world.ChunkRegenerateFlag): any;
                    /**
                     * Regenerates a chunk at the given chunk coordinates.
                     */
                    // @ts-ignore
                     regenerateChunk(cx: number, cy: number, cz: number, flag: org.spongepowered.api.world.ChunkRegenerateFlag): any;
                    /**
                     * Unloads the given chunk from the world. Returns a {@code boolean} flag
                     * for whether the operation was successful.
                     */
                    // @ts-ignore
                     unloadChunk(chunk: org.spongepowered.api.world.Chunk): boolean;
                    /**
                     * Returns a Collection of all actively loaded chunks in this world.
                     * <p>The ordering of the returned chunks is undefined.</p>
                     */
                    // @ts-ignore
                     getLoadedChunks(): any;
                    /**
                     * Gets the entity whose {@link UUID} matches the provided id, possibly
                     * returning no entity if the entity is not loaded or non-existent.
                     * <p>For world implementations, only some parts of the world is usually
                     * loaded, so this method may return no entity if the entity is not
                     * loaded.</p>
                     */
                    // @ts-ignore
                     getEntity(uuid: any): any;
                    /**
                     * Gets the world border for the world.
                     */
                    // @ts-ignore
                     getWorldBorder(): org.spongepowered.api.world.WorldBorder;
                    /**
                     * Returns a new builder for creating a task to pre-generate the chunks
                     * inside a square border with a given center and diameter.
                     */
                    // @ts-ignore
                     newChunkPreGenerate(center: any /*Vector3d*/, diameter: number): org.spongepowered.api.world.ChunkPreGenerate.Builder;
                    /**
                     * Returns the {@link Dimension} of this world.
                     */
                    // @ts-ignore
                     getDimension(): org.spongepowered.api.world.Dimension;
                    /**
                     * Gets the {@link WorldGenerator} for this world.
                     * <p>Any changes made to the world generator will only affect newly
                     * generated chunks.</p>
                     */
                    // @ts-ignore
                     getWorldGenerator(): org.spongepowered.api.world.gen.WorldGenerator;
                    /**
                     * Gets the properties for this world.
                     */
                    // @ts-ignore
                     getProperties(): org.spongepowered.api.world.storage.WorldProperties;
                    /**
                     * Gets the {@link Path} pointing to the root of where the world's data
                     * is being stored.
                     */
                    // @ts-ignore
                     getDirectory(): any;
                    /**
                     * Gets this {@link World}'s {@link UUID}.
                     */
                    // @ts-ignore
                     getUniqueId(): any;
                    /**
                     * Gets the name of this {@link World world}.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Gets the current {@link Difficulty}.
                     */
                    // @ts-ignore
                     getDifficulty(): org.spongepowered.api.world.difficulty.Difficulty;
                    /**
                     * Gets a set game rule's current value, if available and set.
                     */
                    // @ts-ignore
                     getGameRule(gameRule: string): any;
                    /**
                     * Gets the current {@link Map map} of game rules and their
                     * values. Most game rules can be found in {@link DefaultGameRules}.
                     */
                    // @ts-ignore
                     getGameRules(): Map<any, any> /*java.util.Map*/;
                    /**
                     * Gets whether the spawn chunks should remain loaded.
                     */
                    // @ts-ignore
                     doesKeepSpawnLoaded(): boolean;
                    /**
                     * Sets whether the spawn chunks should remain loaded.
                     */
                    // @ts-ignore
                     setKeepSpawnLoaded(keepLoaded: boolean): void;
                    /**
                     * Gets the {@link Location} of the spawn point.
                     */
                    // @ts-ignore
                     getSpawnLocation(): org.spongepowered.api.world.Location;
                    /**
                     * Gets the {@link SerializationBehavior} to use.
                     */
                    // @ts-ignore
                     getSerializationBehavior(): org.spongepowered.api.world.SerializationBehavior;
                    /**
                     * Sets the {@link SerializationBehavior} for use.
                     */
                    // @ts-ignore
                     setSerializationBehavior(behavior: org.spongepowered.api.world.SerializationBehavior): void;
                    /**
                     * Gets the associated {@link WorldStorage} persisting this world.
                     */
                    // @ts-ignore
                     getWorldStorage(): org.spongepowered.api.world.storage.WorldStorage;
                    /**
                     * Causes an {@link Explosion} in a world.
                     */
                    // @ts-ignore
                     triggerExplosion(explosion: org.spongepowered.api.world.explosion.Explosion): void;
                    /**
                     * Gets the portal agent, used for manipulating teleporters.
                     */
                    // @ts-ignore
                     getPortalAgent(): org.spongepowered.api.world.PortalAgent;
                    /**
                     * Gets the sea level of the world.
                     */
                    // @ts-ignore
                     getSeaLevel(): number;
                    // @ts-ignore
                     getBiomeWorker(): org.spongepowered.api.world.extent.worker.MutableBiomeVolumeWorker;
                    // @ts-ignore
                     getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker;
                    /**
                     * Instructs the world to save all data.
                     */
                    // @ts-ignore
                     save(): boolean;
                    /**
                     * Gets the view distance (in chunks) for this world.
                     */
                    // @ts-ignore
                     getViewDistance(): number;
                    /**
                     * Sets the view distance (in chunks) for this world.
                     * <p>The view distance must be greater than or equal to 3,
                     * and less than or equal to 32.</p>
                     */
                    // @ts-ignore
                     setViewDistance(viewDistance: number): void;
                    /**
                     * Resets the view distance to the default value for this world.
                     */
                    // @ts-ignore
                     resetViewDistance(): void;
                }
            }
        }
    }
}
