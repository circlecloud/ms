declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class CookieHandler extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Gets the system-wide cookie handler.
             */
            // @ts-ignore
            public static getDefault(): java.net.CookieHandler;
            /**
             * Sets (or unsets) the system-wide cookie handler.
             * Note: non-standard http protocol handlers may ignore this setting.
             */
            // @ts-ignore
            public static setDefault(cHandler: java.net.CookieHandler): void;
            /**
             * Gets all the applicable cookies from a cookie cache for the
             * specified uri in the request header.
             * <P>The {@code URI} passed as an argument specifies the intended use for
             * the cookies. In particular the scheme should reflect whether the cookies
             * will be sent over http, https or used in another context like javascript.
             * The host part should reflect either the destination of the cookies or
             * their origin in the case of javascript.</P>
             * <P>It is up to the implementation to take into account the {@code URI} and
             * the cookies attributes and security settings to determine which ones
             * should be returned.</P>
             * <P>HTTP protocol implementers should make sure that this method is
             * called after all request headers related to choosing cookies
             * are added, and before the request is sent.</P>
             */
            // @ts-ignore
            public abstract get(uri: java.net.URI, requestHeaders: java.util.Map): java.util.Map;
            /**
             * Sets all the applicable cookies, examples are response header
             * fields that are named Set-Cookie2, present in the response
             * headers into a cookie cache.
             */
            // @ts-ignore
            public abstract put(uri: java.net.URI, responseHeaders: java.util.Map): void;
        }
    }
}
