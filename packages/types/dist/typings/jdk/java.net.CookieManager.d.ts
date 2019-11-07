// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class CookieManager extends java.net.CookieHandler {
            /**
             * Create a new cookie manager.
             * <p>This constructor will create new cookie manager with default
             * cookie store and accept policy. The effect is same as
             * {@code CookieManager(null, null)}.
             */
            // @ts-ignore
            constructor()
            /**
             * Create a new cookie manager with specified cookie store and cookie policy.
             */
            // @ts-ignore
            constructor(store: java.net.CookieStore, cookiePolicy: java.net.CookiePolicy)
            /**
             * To set the cookie policy of this cookie manager.
             * <p> A instance of {@code CookieManager} will have
             * cookie policy ACCEPT_ORIGINAL_SERVER by default. Users always
             * can call this method to set another cookie policy.
             */
            // @ts-ignore
            public setCookiePolicy(cookiePolicy: java.net.CookiePolicy): void;
            /**
             * To retrieve current cookie store.
             */
            // @ts-ignore
            public getCookieStore(): java.net.CookieStore;
            // @ts-ignore
            public get(uri: java.net.URI, requestHeaders: java.util.Map): java.util.Map;
            // @ts-ignore
            public put(uri: java.net.URI, responseHeaders: java.util.Map): void;
        }
    }
}
