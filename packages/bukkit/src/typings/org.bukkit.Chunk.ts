declare namespace org {
    namespace bukkit {
        class Chunk {
            /**
             * Gets the X-coordinate of this chunk
             */
            public getX(): number;
            /**
             * Gets the Z-coordinate of this chunk
             */
            public getZ(): number;
            /**
             * Gets the world containing this chunk
             */
            public getWorld(): org.bukkit.World;
            /**
             * Gets a block from this chunk
             */
            public getBlock(x: number, y: number, z: number): org.bukkit.block.Block;
            /**
             * Capture thread-safe read-only snapshot of chunk data
             */
            public getChunkSnapshot(): org.bukkit.ChunkSnapshot;
            /**
             * Capture thread-safe read-only snapshot of chunk data
             */
            public getChunkSnapshot(includeMaxblocky: boolean, includeBiome: boolean, includeBiomeTempRain: boolean): org.bukkit.ChunkSnapshot;
            /**
             * Get a list of all entities in the chunk.
             */
            public getEntities(): org.bukkit.entity.Entity[];
            /**
             * Get a list of all tile entities in the chunk.
             */
            public getTileEntities(): org.bukkit.block.BlockState[];
            /**
             * Checks if the chunk is loaded.
             */
            public isLoaded(): boolean;
            /**
             * Loads the chunk.
             */
            public load(generate: boolean): boolean;
            /**
             * Loads the chunk.
             */
            public load(): boolean;
            /**
             * Unloads and optionally saves the Chunk
             */
            public unload(save: boolean): boolean;
            /**
             * Unloads and optionally saves the Chunk
             */
            public unload(): boolean;
            /**
             * Checks if this chunk can spawn slimes without being a swamp biome.
             */
            public isSlimeChunk(): boolean;
            /**
             * Gets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
            public isForceLoaded(): boolean;
            /**
             * Sets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             */
            public setForceLoaded(forced: boolean): void;
            /**
             * Adds a plugin ticket for this chunk, loading this chunk if it is not
             * already loaded.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            public addPluginChunkTicket(plugin: org.bukkit.plugin.Plugin): boolean;
            /**
             * Removes the specified plugin's ticket for this chunk
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             */
            public removePluginChunkTicket(plugin: org.bukkit.plugin.Plugin): boolean;
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
            public getPluginChunkTickets(): any[] /*java.util.Collection*/;
        }
    }
}
