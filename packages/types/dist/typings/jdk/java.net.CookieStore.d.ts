declare namespace java {
    namespace net {
        // @ts-ignore
        interface CookieStore {
            /**
             * Adds one HTTP cookie to the store. This is called for every
             * incoming HTTP response.
             * <p>A cookie to store may or may not be associated with an URI. If it
             * is not associated with an URI, the cookie's domain and path attribute
             * will indicate where it comes from. If it is associated with an URI and
             * its domain and path attribute are not specified, given URI will indicate
             * where this cookie comes from.
             * <p>If a cookie corresponding to the given URI already exists,
             * then it is replaced with the new one.
             */
            // @ts-ignore
             add(uri: java.net.URI, cookie: java.net.HttpCookie): void;
            /**
             * Retrieve cookies associated with given URI, or whose domain matches the
             * given URI. Only cookies that have not expired are returned.
             * This is called for every outgoing HTTP request.
             */
            // @ts-ignore
             get(uri: java.net.URI): java.util.List;
            /**
             * Get all not-expired cookies in cookie store.
             */
            // @ts-ignore
             getCookies(): java.util.List;
            /**
             * Get all URIs which identify the cookies in this cookie store.
             */
            // @ts-ignore
             getURIs(): java.util.List;
            /**
             * Remove a cookie from store.
             */
            // @ts-ignore
             remove(uri: java.net.URI, cookie: java.net.HttpCookie): boolean;
            /**
             * Remove all cookies in this cookie store.
             */
            // @ts-ignore
             removeAll(): boolean;
        }
    }
}
