// @ts-nocheck
declare namespace java {
    namespace util {
        namespace stream {
            namespace Stream {
                // @ts-ignore
                interface Builder {
                    /**
                     * Adds an element to the stream being built.
                     */
                    // @ts-ignore
                     accept(t: java.lang.Object): void;
                    /**
                     * Adds an element to the stream being built.
                     */
                    // @ts-ignore
                     add(t: java.lang.Object): java.util.stream.Stream.Builder;
                    /**
                     * Builds the stream, transitioning this builder to the built state.
                     * An {@code IllegalStateException} is thrown if there are further attempts
                     * to operate on the builder after it has entered the built state.
                     */
                    // @ts-ignore
                     build(): java.util.stream.Stream;
                }
            }
        }
    }
}
