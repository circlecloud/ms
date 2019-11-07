declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class URLStreamHandler extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Opens a connection to the object referenced by the
             * {@code URL} argument.
             * This method should be overridden by a subclass.
             * <p>If for the handler's protocol (such as HTTP or JAR), there
             * exists a public, specialized URLConnection subclass belonging
             * to one of the following packages or one of their subpackages:
             * java.lang, java.io, java.util, java.net, the connection
             * returned will be of that subclass. For example, for HTTP an
             * HttpURLConnection will be returned, and for JAR a
             * JarURLConnection will be returned.
             */
            // @ts-ignore
            protected abstract openConnection(u: java.net.URL): java.net.URLConnection;
            /**
             * Same as openConnection(URL), except that the connection will be
             * made through the specified proxy; Protocol handlers that do not
             * support proxying will ignore the proxy parameter and make a
             * normal connection.
             * Calling this method preempts the system's default ProxySelector
             * settings.
             */
            // @ts-ignore
            protected openConnection(u: java.net.URL, p: java.net.Proxy): java.net.URLConnection;
            /**
             * Parses the string representation of a {@code URL} into a
             * {@code URL} object.
             * <p>
             * If there is any inherited context, then it has already been
             * copied into the {@code URL} argument.
             * <p>
             * The {@code parseURL} method of {@code URLStreamHandler}
             * parses the string representation as if it were an
             * {@code http} specification. Most URL protocol families have a
             * similar parsing. A stream protocol handler for a protocol that has
             * a different syntax must override this routine.
             */
            // @ts-ignore
            protected parseURL(u: java.net.URL, spec: string, start: number, limit: number): void;
            /**
             * Returns the default port for a URL parsed by this handler. This method
             * is meant to be overidden by handlers with default port numbers.
             */
            // @ts-ignore
            protected getDefaultPort(): number;
            /**
             * Provides the default equals calculation. May be overidden by handlers
             * for other protocols that have different requirements for equals().
             * This method requires that none of its arguments is null. This is
             * guaranteed by the fact that it is only called by java.net.URL class.
             */
            // @ts-ignore
            protected equals(u1: java.net.URL, u2: java.net.URL): boolean;
            /**
             * Provides the default hash calculation. May be overidden by handlers for
             * other protocols that have different requirements for hashCode
             * calculation.
             */
            // @ts-ignore
            protected hashCode(u: java.net.URL): number;
            /**
             * Compare two urls to see whether they refer to the same file,
             * i.e., having the same protocol, host, port, and path.
             * This method requires that none of its arguments is null. This is
             * guaranteed by the fact that it is only called indirectly
             * by java.net.URL class.
             */
            // @ts-ignore
            protected sameFile(u1: java.net.URL, u2: java.net.URL): boolean;
            /**
             * Get the IP address of our host. An empty host field or a DNS failure
             * will result in a null return.
             */
            // @ts-ignore
            protected getHostAddress(u: java.net.URL): java.net.InetAddress;
            /**
             * Compares the host components of two URLs.
             */
            // @ts-ignore
            protected hostsEqual(u1: java.net.URL, u2: java.net.URL): boolean;
            /**
             * Converts a {@code URL} of a specific protocol to a
             * {@code String}.
             */
            // @ts-ignore
            protected toExternalForm(u: java.net.URL): string;
            /**
             * Sets the fields of the {@code URL} argument to the indicated values.
             * Only classes derived from URLStreamHandler are able
             * to use this method to set the values of the URL fields.
             */
            // @ts-ignore
            protected setURL(u: java.net.URL, protocol: string, host: string, port: number, authority: string, userInfo: string, path: string, query: string, ref: string): void;
            /**
             * Sets the fields of the {@code URL} argument to the indicated values.
             * Only classes derived from URLStreamHandler are able
             * to use this method to set the values of the URL fields.
             */
            // @ts-ignore
            protected setURL(u: java.net.URL, protocol: string, host: string, port: number, file: string, ref: string): void;
        }
    }
}
