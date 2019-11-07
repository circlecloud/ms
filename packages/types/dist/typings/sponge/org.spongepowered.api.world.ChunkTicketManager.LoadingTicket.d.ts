// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    // @ts-ignore
                    interface LoadingTicket {
                        /**
                         * Sets the number of chunks this ticket will load at once.
                         */
                        // @ts-ignore
                         setNumChunks(numChunks: number): boolean;
                        /**
                         * Gets the number of chunks this ticket can load at once.
                         */
                        // @ts-ignore
                         getNumChunks(): number;
                        /**
                         * Gets the maximum limit on the number of concurrently loaded chunks
                         * this ticket can have.
                         */
                        // @ts-ignore
                         getMaxNumChunks(): number;
                        /**
                         * Gets the {@link World} passed when creating this ticket.
                         */
                        // @ts-ignore
                         getWorld(): org.spongepowered.api.world.World;
                        /**
                         * Gets the companion data stored in a {@link DataContainer}. Note that
                         * the provided {@link DataContainer} is modifiable, but a copy of the
                         * internal container, and as such may need to be
                         * {@link #setCompanionData(DataContainer)} before modifications can
                         * be handled.
                         * <p>The sort of data stored in the container is plugin/mod dependent
                         * and is based on the original creator of this {@link LoadingTicket}.
                         * As such, the structure and particular data stored in the container
                         * is not concrete or defined in any specific way.</p>
                         */
                        // @ts-ignore
                         getCompanionData(): org.spongepowered.api.data.DataContainer;
                        /**
                         * Sets the companion data for this loading ticket.
                         * <p>The sort of data stored in the container is plugin/mod dependent
                         * and is based on the original creator of this {@link LoadingTicket}.
                         * As such, the structure and particular data stored in the container
                         * is not concrete or defined in any specific way.</p>
                         */
                        // @ts-ignore
                         setCompanionData(container: org.spongepowered.api.data.DataContainer): void;
                        /**
                         * Gets the ID of the plugin that this ticket belongs to.
                         */
                        // @ts-ignore
                         getPlugin(): string;
                        /**
                         * Gets the set of chunks that are being force-loaded by this ticket.
                         */
                        // @ts-ignore
                         getChunkList(): any;
                        /**
                         * Force-loads a chunk using this ticket. If the configured concurrently
                         * loaded chunk limit is reached, the oldest loaded chunk will be
                         * removed.
                         * <p>This does not cause an immediate load of the chunk. Forced chunks
                         * will be loaded eventually, but may not be available for a few ticks.
                         * Forced chunk loading is equivalent to the loading caused by a
                         * player.</p>
                         */
                        // @ts-ignore
                         forceChunk(chunk: any /*Vector3i*/): void;
                        /**
                         * Removes a chunk from the force-loaded set of this ticket.
                         */
                        // @ts-ignore
                         unforceChunk(chunk: any /*Vector3i*/): void;
                        /**
                         * Reorders a chunk to count as the 'newest' loaded chunk, making it the
                         * last chunk to be removed when adding more chunks for force-loading.
                         */
                        // @ts-ignore
                         prioritizeChunk(chunk: any /*Vector3i*/): void;
                        /**
                         * Releases this ticket, removing all associated chunks and freeing up
                         * the ticket slot for later use by a new ticket.
                         * <p>After this operation the ticket is invalid and cannot be used to
                         * force-load chunks.</p>
                         */
                        // @ts-ignore
                         release(): void;
                    }
                }
            }
        }
    }
}
