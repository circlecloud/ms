// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class ContentHandler extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Given a URL connect stream positioned at the beginning of the
             * representation of an object, this method reads that stream and
             * creates an object from it.
             */
            // @ts-ignore
            public abstract getContent(urlc: java.net.URLConnection): java.lang.Object;
            /**
             * Given a URL connect stream positioned at the beginning of the
             * representation of an object, this method reads that stream and
             * creates an object that matches one of the types specified.
             * The default implementation of this method should call getContent()
             * and screen the return type for a match of the suggested types.
             */
            // @ts-ignore
            public getContent(urlc: java.net.URLConnection, classes: java.lang.Class): java.lang.Object;
        }
    }
}
