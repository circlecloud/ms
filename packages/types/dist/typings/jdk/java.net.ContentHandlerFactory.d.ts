declare namespace java {
    namespace net {
        // @ts-ignore
        interface ContentHandlerFactory {
            /**
             * Creates a new {@code ContentHandler} to read an object from
             * a {@code URLStreamHandler}.
             */
            // @ts-ignore
             createContentHandler(mimetype: string): java.net.ContentHandler;
        }
    }
}
