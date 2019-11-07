declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface Chunk {
            /**
             * Gets the X-coordinate of this chunk
             */
            // @ts-ignore
             getX(): number;
            /**
             * Gets the Z-coordinate of this chunk
             */
            // @ts-ignore
             getZ(): number;
            /**
             * Gets the world containing this chunk
             */
            // @ts-ignore
             getWorld(): org.bukkit.World;
            /**
             * Gets a block from this chunk
             */
            // @ts-ignore
             getBlock(x: number, y: number, z: number): org.bukkit.block.Block;
            /**
             * Capture thread-safe read-only snapshot of chunk data
             */
            // @ts-ignore
             getChunkSnapshot(): org.bukkit.ChunkSnapshot;
            /**
             * Capture thread-safe read-only snapshot of chunk data
             */
            // @ts-ignore
             getChunkSnapshot(includeMaxblocky: boolean, includeBiome: boolean, includeBiomeTempRain: boolean): org.bukkit.ChunkSnapshot;
            /**
             * Get a list of all entities in the chunk.
             */
            // @ts-ignore
             getEntities(): org.bukkit.entity.Entity[];
            /**
             * Get a list of all tile entities in the chunk.
             */
            // @ts-ignore
             getTileEntities(): org.bukkit.block.BlockState[];
            /**
             * Checks if the chunk is loaded.
             */
            // @ts-ignore
             isLoaded(): boolean;
            /**
             * Loads the chunk.
             */
            // @ts-ignore
             load(generate: boolean): boolean;
            /**
             * Loads the chunk.
             */
            // @ts-ignore
             load(): boolean;
            /**
             * Unloads and optionally saves the Chunk
             */
            // @ts-ignore
             unload(save: boolean): boolean;
            /**
             * Unloads and optionally saves the Chunk
             */
            // @ts-ignore
             unload(): boolean;
            /**
             * Checks if this chunk can spawn slimes without being a swamp biome.
             */
            // @ts-ignore
             isSlimeChunk(): boolean;
            /**
             * Gets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
            // @ts-ignore
             isForceLoaded(): boolean;
            /**
             * Sets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
            // @ts-ignore
             setForceLoaded(forced: boolean): void;
            /**
             * Adds a plugin ticket for this chunk, loading this chunk if it is not
             * already loaded.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            // @ts-ignore
             addPluginChunkTicket(plugin: org.bukkit.plugin.Plugin): boolean;
            /**
             * Removes the specified plugin's ticket for this chunk
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            // @ts-ignore
             removePluginChunkTicket(plugin: org.bukkit.plugin.Plugin): boolean;
            /**
             * Retrieves a collection specifying which plugins have tickets for this
             * chunk. This collection is not updated when plugin tickets are added or
             * removed to this chunk.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            // @ts-ignore
             getPluginChunkTickets(): java.util.Collection;
        }
    }
}
