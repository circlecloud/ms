// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class CacheResponse extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the response headers as a Map.
             */
            // @ts-ignore
            public abstract getHeaders(): java.util.Map;
            /**
             * Returns the response body as an InputStream.
             */
            // @ts-ignore
            public abstract getBody(): java.io.InputStream;
        }
    }
}
