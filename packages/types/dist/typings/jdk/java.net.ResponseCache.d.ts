declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class ResponseCache extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Gets the system-wide response cache.
             */
            // @ts-ignore
            public static getDefault(): java.net.ResponseCache;
            /**
             * Sets (or unsets) the system-wide cache.
             * Note: non-standard procotol handlers may ignore this setting.
             */
            // @ts-ignore
            public static setDefault(responseCache: java.net.ResponseCache): void;
            /**
             * Retrieve the cached response based on the requesting uri,
             * request method and request headers. Typically this method is
             * called by the protocol handler before it sends out the request
             * to get the network resource. If a cached response is returned,
             * that resource is used instead.
             */
            // @ts-ignore
            public abstract get(uri: java.net.URI, rqstMethod: string, rqstHeaders: java.util.Map): java.net.CacheResponse;
            /**
             * The protocol handler calls this method after a resource has
             * been retrieved, and the ResponseCache must decide whether or
             * not to store the resource in its cache. If the resource is to
             * be cached, then put() must return a CacheRequest object which
             * contains an OutputStream that the protocol handler will
             * use to write the resource into the cache. If the resource is
             * not to be cached, then put must return null.
             */
            // @ts-ignore
            public abstract put(uri: java.net.URI, conn: java.net.URLConnection): java.net.CacheRequest;
        }
    }
}
