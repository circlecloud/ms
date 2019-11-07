// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace storage {
                    // @ts-ignore
                    interface ChunkDataStream {
                        /**
                         * Gets the next {@link Chunk} represented by a read only
                         * {@link DataContainer}.
                         * <p>This method BLOCKS the thread until the next available data has been
                         * read.</p>
                         * <p>This may not return a {@link DataContainer} in the event there is no
                         * chunk data available to read.</p>
                         */
                        // @ts-ignore
                         next(): org.spongepowered.api.data.DataContainer;
                        /**
                         * Checks if there is an available chunk to represent.
                         */
                        // @ts-ignore
                         hasNext(): boolean;
                        /**
                         * Gets the number of chunks available to read as {@link DataContainer}s.
                         */
                        // @ts-ignore
                         available(): number;
                        /**
                         * Resets this stream to read from the beginning of the collection of
                         * chunks.
                         */
                        // @ts-ignore
                         reset(): void;
                    }
                }
            }
        }
    }
}
