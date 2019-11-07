declare namespace java {
    namespace util {
        namespace stream {
            namespace IntStream {
                // @ts-ignore
                interface Builder {
                    /**
                     * Adds an element to the stream being built.
                     */
                    // @ts-ignore
                     accept(t: number): void;
                    /**
                     * Adds an element to the stream being built.
                     */
                    // @ts-ignore
                     add(t: number): java.util.stream.IntStream.Builder;
                    /**
                     * Builds the stream, transitioning this builder to the built state.
                     * An {@code IllegalStateException} is thrown if there are further
                     * attempts to operate on the builder after it has entered the built
                     * state.
                     */
                    // @ts-ignore
                     build(): java.util.stream.IntStream;
                }
            }
        }
    }
}
