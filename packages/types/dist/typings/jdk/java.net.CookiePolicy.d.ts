// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        interface CookiePolicy {
            // @ts-ignore
             ACCEPT_ALL: java.net.CookiePolicy;
            // @ts-ignore
             ACCEPT_NONE: java.net.CookiePolicy;
            // @ts-ignore
             ACCEPT_ORIGINAL_SERVER: java.net.CookiePolicy;
            /**
             * Will be called to see whether or not this cookie should be accepted.
             */
            // @ts-ignore
             shouldAccept(uri: java.net.URI, cookie: java.net.HttpCookie): boolean;
        }
    }
}
