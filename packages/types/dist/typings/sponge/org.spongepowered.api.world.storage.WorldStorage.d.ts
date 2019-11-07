declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace storage {
                    // @ts-ignore
                    interface WorldStorage {
                        /**
                         * Gets a {@link ChunkDataStream}.
                         * <p>Usage of a {@link ChunkDataStream} should be limited to asynchronous
                         * tasks to avoid hanging the main thread.</p>
                         */
                        // @ts-ignore
                         getGeneratedChunks(): org.spongepowered.api.world.storage.ChunkDataStream;
                        /**
                         * Checks if the given chunk coordinates represented by {@link Vector3i}
                         * exist in the world.
                         * <p>Note that this is an asynchronous check as the storage of chunks can
                         * not be guaranteed to remain in sync with the server, let alone on the
                         * server thread.</p>
                         * <p>It is imperative to understand that the {@link CompletableFuture} task
                         * is blocking, and should avoid using {@link CompletableFuture#get()} while
                         * on the main thread.</p>
                         */
                        // @ts-ignore
                         doesChunkExist(chunkCoords: any /*Vector3i*/): java.util.concurrent.CompletableFuture;
                        /**
                         * Gets a {@link DataContainer} including all data related to a
                         * {@link Chunk}.
                         * <p>The container is a read only instance of the data, and therefor should
                         * not be considered as mutable data. Changes are NOT saved, and the data
                         * may not be in sync with the server if the chunk is currently loaded.</p>
                         * <p>This may not return a {@link DataContainer} in the event there is no
                         * chunk data generated at the desired coordinates.</p>
                         * <p>It is imperative to understand that the {@link CompletableFuture} task
                         * is blocking, and should avoid using {@link CompletableFuture#get()} while
                         * on the main thread.</p>
                         */
                        // @ts-ignore
                         getChunkData(chunkCoords: any /*Vector3i*/): java.util.concurrent.CompletableFuture;
                        /**
                         * Gets the {@link WorldProperties} of this storage. In the vanilla storage
                         * medium this represents the data available in the level.dat file.
                         */
                        // @ts-ignore
                         getWorldProperties(): org.spongepowered.api.world.storage.WorldProperties;
                    }
                }
            }
        }
    }
}
