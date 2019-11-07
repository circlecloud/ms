// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class URL extends java.lang.Object {
            /**
             * Creates a {@code URL} object from the specified
             * {@code protocol}, {@code host}, {@code port}
             * number, and {@code file}.<p>
             * {@code host} can be expressed as a host name or a literal
             * IP address. If IPv6 literal address is used, it should be
             * enclosed in square brackets ({@code '['} and {@code ']'}), as
             * specified by <a
             * href="http://www.ietf.org/rfc/rfc2732.txt">RFC&nbsp;2732</a>;
             * However, the literal IPv6 address format defined in <a
             * href="http://www.ietf.org/rfc/rfc2373.txt"><i>RFC&nbsp;2373: IP
             * Version 6 Addressing Architecture</i></a> is also accepted.<p>
             * Specifying a {@code port} number of {@code -1}
             * indicates that the URL should use the default port for the
             * protocol.<p>
             * If this is the first URL object being created with the specified
             * protocol, a <i>stream protocol handler</i> object, an instance of
             * class {@code URLStreamHandler}, is created for that protocol:
             * <ol>
             * <li>If the application has previously set up an instance of
             * {@code URLStreamHandlerFactory} as the stream handler factory,
             * then the {@code createURLStreamHandler} method of that instance
             * is called with the protocol string as an argument to create the
             * stream protocol handler.
             * <li>If no {@code URLStreamHandlerFactory} has yet been set up,
             * or if the factory's {@code createURLStreamHandler} method
             * returns {@code null}, then the constructor finds the
             * value of the system property:
             * <blockquote><pre>
             * java.protocol.handler.pkgs
             * </pre></blockquote>
             * If the value of that system property is not {@code null},
             * it is interpreted as a list of packages separated by a vertical
             * slash character '{@code |}'. The constructor tries to load
             * the class named:
             * <blockquote><pre>
             * &lt;<i>package</i>&gt;.&lt;<i>protocol</i>&gt;.Handler
             * </pre></blockquote>
             * where &lt;<i>package</i>&gt; is replaced by the name of the package
             * and &lt;<i>protocol</i>&gt; is replaced by the name of the protocol.
             * If this class does not exist, or if the class exists but it is not
             * a subclass of {@code URLStreamHandler}, then the next package
             * in the list is tried.
             * <li>If the previous step fails to find a protocol handler, then the
             * constructor tries to load from a system default package.
             * <blockquote><pre>
             * &lt;<i>system default package</i>&gt;.&lt;<i>protocol</i>&gt;.Handler
             * </pre></blockquote>
             * If this class does not exist, or if the class exists but it is not a
             * subclass of {@code URLStreamHandler}, then a
             * {@code MalformedURLException} is thrown.
             * </ol>
             * <p>Protocol handlers for the following protocols are guaranteed
             * to exist on the search path :-
             * <blockquote><pre>
             * http, https, file, and jar
             * </pre></blockquote>
             * Protocol handlers for additional protocols may also be
             * available.
             * <p>No validation of the inputs is performed by this constructor.
             */
            // @ts-ignore
            constructor(protocol: string, host: string, port: number, file: string)
            /**
             * Creates a URL from the specified {@code protocol}
             * name, {@code host} name, and {@code file} name. The
             * default port for the specified protocol is used.
             * <p>
             * This method is equivalent to calling the four-argument
             * constructor with the arguments being {@code protocol},
             * {@code host}, {@code -1}, and {@code file}.
             * No validation of the inputs is performed by this constructor.
             */
            // @ts-ignore
            constructor(protocol: string, host: string, file: string)
            /**
             * Creates a {@code URL} object from the specified
             * {@code protocol}, {@code host}, {@code port}
             * number, {@code file}, and {@code handler}. Specifying
             * a {@code port} number of {@code -1} indicates that
             * the URL should use the default port for the protocol. Specifying
             * a {@code handler} of {@code null} indicates that the URL
             * should use a default stream handler for the protocol, as outlined
             * for:
             * java.net.URL#URL(java.lang.String, java.lang.String, int,
             * java.lang.String)
             * <p>If the handler is not null and there is a security manager,
             * the security manager's {@code checkPermission}
             * method is called with a
             * {@code NetPermission("specifyStreamHandler")} permission.
             * This may result in a SecurityException.
             * No validation of the inputs is performed by this constructor.
             */
            // @ts-ignore
            constructor(protocol: string, host: string, port: number, file: string, handler: java.net.URLStreamHandler)
            /**
             * Creates a {@code URL} object from the {@code String}
             * representation.
             * <p>
             * This constructor is equivalent to a call to the two-argument
             * constructor with a {@code null} first argument.
             */
            // @ts-ignore
            constructor(spec: string)
            /**
             * Creates a URL by parsing the given spec within a specified context.
             * The new URL is created from the given context URL and the spec
             * argument as described in
             * RFC2396 &quot;Uniform Resource Identifiers : Generic * Syntax&quot; :
             * <blockquote><pre>
             * &lt;scheme&gt;://&lt;authority&gt;&lt;path&gt;?&lt;query&gt;#&lt;fragment&gt;
             * </pre></blockquote>
             * The reference is parsed into the scheme, authority, path, query and
             * fragment parts. If the path component is empty and the scheme,
             * authority, and query components are undefined, then the new URL is a
             * reference to the current document. Otherwise, the fragment and query
             * parts present in the spec are used in the new URL.
             * <p>
             * If the scheme component is defined in the given spec and does not match
             * the scheme of the context, then the new URL is created as an absolute
             * URL based on the spec alone. Otherwise the scheme component is inherited
             * from the context URL.
             * <p>
             * If the authority component is present in the spec then the spec is
             * treated as absolute and the spec authority and path will replace the
             * context authority and path. If the authority component is absent in the
             * spec then the authority of the new URL will be inherited from the
             * context.
             * <p>
             * If the spec's path component begins with a slash character
             * &quot;/&quot; then the
             * path is treated as absolute and the spec path replaces the context path.
             * <p>
             * Otherwise, the path is treated as a relative path and is appended to the
             * context path, as described in RFC2396. Also, in this case,
             * the path is canonicalized through the removal of directory
             * changes made by occurrences of &quot;..&quot; and &quot;.&quot;.
             * <p>
             * For a more detailed description of URL parsing, refer to RFC2396.
             */
            // @ts-ignore
            constructor(context: java.net.URL, spec: string)
            /**
             * Creates a URL by parsing the given spec with the specified handler
             * within a specified context. If the handler is null, the parsing
             * occurs as with the two argument constructor.
             */
            // @ts-ignore
            constructor(context: java.net.URL, spec: string, handler: java.net.URLStreamHandler)
            /**
             * Gets the query part of this {@code URL}.
             */
            // @ts-ignore
            public getQuery(): string;
            /**
             * Gets the path part of this {@code URL}.
             */
            // @ts-ignore
            public getPath(): string;
            /**
             * Gets the userInfo part of this {@code URL}.
             */
            // @ts-ignore
            public getUserInfo(): string;
            /**
             * Gets the authority part of this {@code URL}.
             */
            // @ts-ignore
            public getAuthority(): string;
            /**
             * Gets the port number of this {@code URL}.
             */
            // @ts-ignore
            public getPort(): number;
            /**
             * Gets the default port number of the protocol associated
             * with this {@code URL}. If the URL scheme or the URLStreamHandler
             * for the URL do not define a default port number,
             * then -1 is returned.
             */
            // @ts-ignore
            public getDefaultPort(): number;
            /**
             * Gets the protocol name of this {@code URL}.
             */
            // @ts-ignore
            public getProtocol(): string;
            /**
             * Gets the host name of this {@code URL}, if applicable.
             * The format of the host conforms to RFC 2732, i.e. for a
             * literal IPv6 address, this method will return the IPv6 address
             * enclosed in square brackets ({@code '['} and {@code ']'}).
             */
            // @ts-ignore
            public getHost(): string;
            /**
             * Gets the file name of this {@code URL}.
             * The returned file portion will be
             * the same as <CODE>getPath()</CODE>, plus the concatenation of
             * the value of <CODE>getQuery()</CODE>, if any. If there is
             * no query portion, this method and <CODE>getPath()</CODE> will
             * return identical results.
             */
            // @ts-ignore
            public getFile(): string;
            /**
             * Gets the anchor (also known as the "reference") of this
             * {@code URL}.
             */
            // @ts-ignore
            public getRef(): string;
            /**
             * Compares this URL for equality with another object.<p>
             * If the given object is not a URL then this method immediately returns
             * {@code false}.<p>
             * Two URL objects are equal if they have the same protocol, reference
             * equivalent hosts, have the same port number on the host, and the same
             * file and fragment of the file.<p>
             * Two hosts are considered equivalent if both host names can be resolved
             * into the same IP addresses; else if either host name can't be
             * resolved, the host names must be equal without regard to case; or both
             * host names equal to null.<p>
             * Since hosts comparison requires name resolution, this operation is a
             * blocking operation. <p>
             * Note: The defined behavior for {@code equals} is known to
             * be inconsistent with virtual hosting in HTTP.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Creates an integer suitable for hash table indexing.<p>
             * The hash code is based upon all the URL components relevant for URL
             * comparison. As such, this operation is a blocking operation.<p>
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares two URLs, excluding the fragment component.<p>
             * Returns {@code true} if this {@code URL} and the
             * {@code other} argument are equal without taking the
             * fragment component into consideration.
             */
            // @ts-ignore
            public sameFile(other: java.net.URL): boolean;
            /**
             * Constructs a string representation of this {@code URL}. The
             * string is created by calling the {@code toExternalForm}
             * method of the stream protocol handler for this object.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Constructs a string representation of this {@code URL}. The
             * string is created by calling the {@code toExternalForm}
             * method of the stream protocol handler for this object.
             */
            // @ts-ignore
            public toExternalForm(): string;
            /**
             * Returns a {@link java.net.URI} equivalent to this URL.
             * This method functions in the same way as {@code new URI (this.toString())}.
             * <p>Note, any URL instance that complies with RFC 2396 can be converted
             * to a URI. However, some URLs that are not strictly in compliance
             * can not be converted to a URI.
             */
            // @ts-ignore
            public toURI(): java.net.URI;
            /**
             * Returns a {@link java.net.URLConnection URLConnection} instance that
             * represents a connection to the remote object referred to by the
             * {@code URL}.
             * <P>A new instance of {@linkplain java.net.URLConnection URLConnection} is
             * created every time when invoking the
             * {@linkplain java.net.URLStreamHandler#openConnection(URL)
             * URLStreamHandler.openConnection(URL)} method of the protocol handler for
             * this URL.</P>
             * <P>It should be noted that a URLConnection instance does not establish
             * the actual network connection on creation. This will happen only when
             * calling {@linkplain java.net.URLConnection#connect() URLConnection.connect()}.</P>
             * <P>If for the URL's protocol (such as HTTP or JAR), there
             * exists a public, specialized URLConnection subclass belonging
             * to one of the following packages or one of their subpackages:
             * java.lang, java.io, java.util, java.net, the connection
             * returned will be of that subclass. For example, for HTTP an
             * HttpURLConnection will be returned, and for JAR a
             * JarURLConnection will be returned.</P>
             */
            // @ts-ignore
            public openConnection(): java.net.URLConnection;
            /**
             * Same as {@link #openConnection()}, except that the connection will be
             * made through the specified proxy; Protocol handlers that do not
             * support proxing will ignore the proxy parameter and make a
             * normal connection.
             * Invoking this method preempts the system's default ProxySelector
             * settings.
             */
            // @ts-ignore
            public openConnection(proxy: java.net.Proxy): java.net.URLConnection;
            /**
             * Opens a connection to this {@code URL} and returns an
             * {@code InputStream} for reading from that connection. This
             * method is a shorthand for:
             * <blockquote><pre>
             * openConnection().getInputStream()
             * </pre></blockquote>
             */
            // @ts-ignore
            public openStream(): java.io.InputStream;
            /**
             * Gets the contents of this URL. This method is a shorthand for:
             * <blockquote><pre>
             * openConnection().getContent()
             * </pre></blockquote>
             */
            // @ts-ignore
            public getContent(): java.lang.Object;
            /**
             * Gets the contents of this URL. This method is a shorthand for:
             * <blockquote><pre>
             * openConnection().getContent(Class[])
             * </pre></blockquote>
             */
            // @ts-ignore
            public getContent(classes: java.lang.Class): java.lang.Object;
            /**
             * Sets an application's {@code URLStreamHandlerFactory}.
             * This method can be called at most once in a given Java Virtual
             * Machine.
             * <p> The {@code URLStreamHandlerFactory} instance is used to
             * construct a stream protocol handler from a protocol name.
             * <p> If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            public static setURLStreamHandlerFactory(fac: java.net.URLStreamHandlerFactory): void;
        }
    }
}
