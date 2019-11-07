declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class ProxySelector extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Gets the system-wide proxy selector.
             */
            // @ts-ignore
            public static getDefault(): java.net.ProxySelector;
            /**
             * Sets (or unsets) the system-wide proxy selector.
             * Note: non-standard protocol handlers may ignore this setting.
             */
            // @ts-ignore
            public static setDefault(ps: java.net.ProxySelector): void;
            /**
             * Selects all the applicable proxies based on the protocol to
             * access the resource with and a destination address to access
             * the resource at.
             * The format of the URI is defined as follow:
             * <UL>
             * <LI>http URI for http connections</LI>
             * <LI>https URI for https connections
             * <LI>{@code socket://host:port}<br>
             * for tcp client sockets connections</LI>
             * </UL>
             */
            // @ts-ignore
            public abstract select(uri: java.net.URI): java.util.List;
            /**
             * Called to indicate that a connection could not be established
             * to a proxy/socks server. An implementation of this method can
             * temporarily remove the proxies or reorder the sequence of
             * proxies returned by {@link #select(URI)}, using the address
             * and the IOException caught when trying to connect.
             */
            // @ts-ignore
            public abstract connectFailed(uri: java.net.URI, sa: java.net.SocketAddress, ioe: java.io.IOException): void;
        }
    }
}
