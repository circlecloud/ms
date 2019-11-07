// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        interface URLStreamHandlerFactory {
            /**
             * Creates a new {@code URLStreamHandler} instance with the specified
             * protocol.
             */
            // @ts-ignore
             createURLStreamHandler(protocol: string): java.net.URLStreamHandler;
        }
    }
}
