declare namespace java {
    namespace io {
        // @ts-ignore
        interface Closeable {
            /**
             * Closes this stream and releases any system resources associated
             * with it. If the stream is already closed then invoking this
             * method has no effect.
             * <p> As noted in {@link AutoCloseable#close()}, cases where the
             * close may fail require careful attention. It is strongly advised
             * to relinquish the underlying resources and to internally
             * <em>mark</em> the {@code Closeable} as closed, prior to throwing
             * the {@code IOException}.
             */
            // @ts-ignore
             close(): void;
        }
    }
}
