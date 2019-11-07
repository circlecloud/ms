declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class CacheRequest extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns an OutputStream to which the response body can be
             * written.
             */
            // @ts-ignore
            public abstract getBody(): java.io.OutputStream;
            /**
             * Aborts the attempt to cache the response. If an IOException is
             * encountered while reading the response or writing to the cache,
             * the current cache store operation will be abandoned.
             */
            // @ts-ignore
            public abstract abort(): void;
        }
    }
}
