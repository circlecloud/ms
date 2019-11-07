// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class URLConnection extends java.lang.Object {
            /**
             * Constructs a URL connection to the specified URL. A connection to
             * the object referenced by the URL is not created.
             */
            // @ts-ignore
            constructor(url: java.net.URL)
            // @ts-ignore
            protected url: java.net.URL;
            // @ts-ignore
            protected doInput: boolean;
            // @ts-ignore
            protected doOutput: boolean;
            // @ts-ignore
            protected allowUserInteraction: boolean;
            // @ts-ignore
            protected useCaches: boolean;
            // @ts-ignore
            protected ifModifiedSince: number;
            // @ts-ignore
            protected connected: boolean;
            /**
             * Loads filename map (a mimetable) from a data file. It will
             * first try to load the user-specific table, defined
             * by &quot;content.types.user.table&quot; property. If that fails,
             * it tries to load the default built-in table.
             */
            // @ts-ignore
            public static getFileNameMap(): java.net.FileNameMap;
            /**
             * Sets the FileNameMap.
             * <p>
             * If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            public static setFileNameMap(map: java.net.FileNameMap): void;
            /**
             * Opens a communications link to the resource referenced by this
             * URL, if such a connection has not already been established.
             * <p>
             * If the {@code connect} method is called when the connection
             * has already been opened (indicated by the {@code connected}
             * field having the value {@code true}), the call is ignored.
             * <p>
             * URLConnection objects go through two phases: first they are
             * created, then they are connected.  After being created, and
             * before being connected, various options can be specified
             * (e.g., doInput and UseCaches).  After connecting, it is an
             * error to try to set them.  Operations that depend on being
             * connected, like getContentLength, will implicitly perform the
             * connection, if necessary.
             */
            // @ts-ignore
            public abstract connect(): void;
            /**
             * Sets a specified timeout value, in milliseconds, to be used
             * when opening a communications link to the resource referenced
             * by this URLConnection.  If the timeout expires before the
             * connection can be established, a
             * java.net.SocketTimeoutException is raised. A timeout of zero is
             * interpreted as an infinite timeout.
             * <p> Some non-standard implementation of this method may ignore
             * the specified timeout. To see the connect timeout set, please
             * call getConnectTimeout().
             */
            // @ts-ignore
            public setConnectTimeout(timeout: number): void;
            /**
             * Returns setting for connect timeout.
             * <p>
             * 0 return implies that the option is disabled
             * (i.e., timeout of infinity).
             */
            // @ts-ignore
            public getConnectTimeout(): number;
            /**
             * Sets the read timeout to a specified timeout, in
             * milliseconds. A non-zero value specifies the timeout when
             * reading from Input stream when a connection is established to a
             * resource. If the timeout expires before there is data available
             * for read, a java.net.SocketTimeoutException is raised. A
             * timeout of zero is interpreted as an infinite timeout.
             * <p> Some non-standard implementation of this method ignores the
             * specified timeout. To see the read timeout set, please call
             * getReadTimeout().
             */
            // @ts-ignore
            public setReadTimeout(timeout: number): void;
            /**
             * Returns setting for read timeout. 0 return implies that the
             * option is disabled (i.e., timeout of infinity).
             */
            // @ts-ignore
            public getReadTimeout(): number;
            /**
             * Returns the value of this {@code URLConnection}'s {@code URL}
             * field.
             */
            // @ts-ignore
            public getURL(): java.net.URL;
            /**
             * Returns the value of the {@code content-length} header field.
             * <P>
             * <B>Note</B>: {@link #getContentLengthLong() getContentLengthLong()}
             * should be preferred over this method, since it returns a {@code long}
             * instead and is therefore more portable.</P>
             */
            // @ts-ignore
            public getContentLength(): number;
            /**
             * Returns the value of the {@code content-length} header field as a
             * long.
             */
            // @ts-ignore
            public getContentLengthLong(): number;
            /**
             * Returns the value of the {@code content-type} header field.
             */
            // @ts-ignore
            public getContentType(): string;
            /**
             * Returns the value of the {@code content-encoding} header field.
             */
            // @ts-ignore
            public getContentEncoding(): string;
            /**
             * Returns the value of the {@code expires} header field.
             */
            // @ts-ignore
            public getExpiration(): number;
            /**
             * Returns the value of the {@code date} header field.
             */
            // @ts-ignore
            public getDate(): number;
            /**
             * Returns the value of the {@code last-modified} header field.
             * The result is the number of milliseconds since January 1, 1970 GMT.
             */
            // @ts-ignore
            public getLastModified(): number;
            /**
             * Returns the value of the named header field.
             * <p>
             * If called on a connection that sets the same header multiple times
             * with possibly different values, only the last value is returned.
             */
            // @ts-ignore
            public getHeaderField(name: string): string;
            /**
             * Returns an unmodifiable Map of the header fields.
             * The Map keys are Strings that represent the
             * response-header field names. Each Map value is an
             * unmodifiable List of Strings that represents
             * the corresponding field values.
             */
            // @ts-ignore
            public getHeaderFields(): java.util.Map;
            /**
             * Returns the value of the named field parsed as a number.
             * <p>
             * This form of {@code getHeaderField} exists because some
             * connection types (e.g., {@code http-ng}) have pre-parsed
             * headers. Classes for that connection type can override this method
             * and short-circuit the parsing.
             */
            // @ts-ignore
            public getHeaderFieldInt(name: string, Default: number): number;
            /**
             * Returns the value of the named field parsed as a number.
             * <p>
             * This form of {@code getHeaderField} exists because some
             * connection types (e.g., {@code http-ng}) have pre-parsed
             * headers. Classes for that connection type can override this method
             * and short-circuit the parsing.
             */
            // @ts-ignore
            public getHeaderFieldLong(name: string, Default: number): number;
            /**
             * Returns the value of the named field parsed as date.
             * The result is the number of milliseconds since January 1, 1970 GMT
             * represented by the named field.
             * <p>
             * This form of {@code getHeaderField} exists because some
             * connection types (e.g., {@code http-ng}) have pre-parsed
             * headers. Classes for that connection type can override this method
             * and short-circuit the parsing.
             */
            // @ts-ignore
            public getHeaderFieldDate(name: string, Default: number): number;
            /**
             * Returns the key for the {@code n}<sup>th</sup> header field.
             * It returns {@code null} if there are fewer than {@code n+1} fields.
             */
            // @ts-ignore
            public getHeaderFieldKey(n: number): string;
            /**
             * Returns the value for the {@code n}<sup>th</sup> header field.
             * It returns {@code null} if there are fewer than
             * {@code n+1}fields.
             * <p>
             * This method can be used in conjunction with the
             * {@link #getHeaderFieldKey(int) getHeaderFieldKey} method to iterate through all
             * the headers in the message.
             */
            // @ts-ignore
            public getHeaderField(n: number): string;
            /**
             * Retrieves the contents of this URL connection.
             * <p>
             * This method first determines the content type of the object by
             * calling the {@code getContentType} method. If this is
             * the first time that the application has seen that specific content
             * type, a content handler for that content type is created:
             * <ol>
             * <li>If the application has set up a content handler factory instance
             * using the {@code setContentHandlerFactory} method, the
             * {@code createContentHandler} method of that instance is called
             * with the content type as an argument; the result is a content
             * handler for that content type.
             * <li>If no content handler factory has yet been set up, or if the
             * factory's {@code createContentHandler} method returns
             * {@code null}, then the application loads the class named:
             * <blockquote><pre>
             * sun.net.www.content.&lt;<i>contentType</i>&gt;
             * </pre></blockquote>
             * where &lt;<i>contentType</i>&gt; is formed by taking the
             * content-type string, replacing all slash characters with a
             * {@code period} ('.'), and all other non-alphanumeric characters
             * with the underscore character '{@code _}'. The alphanumeric
             * characters are specifically the 26 uppercase ASCII letters
             * '{@code A}' through '{@code Z}', the 26 lowercase ASCII
             * letters '{@code a}' through '{@code z}', and the 10 ASCII
             * digits '{@code 0}' through '{@code 9}'. If the specified
             * class does not exist, or is not a subclass of
             * {@code ContentHandler}, then an
             * {@code UnknownServiceException} is thrown.
             * </ol>
             */
            // @ts-ignore
            public getContent(): java.lang.Object;
            /**
             * Retrieves the contents of this URL connection.
             */
            // @ts-ignore
            public getContent(classes: java.lang.Class): java.lang.Object;
            /**
             * Returns a permission object representing the permission
             * necessary to make the connection represented by this
             * object. This method returns null if no permission is
             * required to make the connection. By default, this method
             * returns {@code java.security.AllPermission}. Subclasses
             * should override this method and return the permission
             * that best represents the permission required to make a
             * a connection to the URL. For example, a {@code URLConnection}
             * representing a {@code file:} URL would return a
             * {@code java.io.FilePermission} object.
             * <p>The permission returned may dependent upon the state of the
             * connection. For example, the permission before connecting may be
             * different from that after connecting. For example, an HTTP
             * sever, say foo.com, may redirect the connection to a different
             * host, say bar.com. Before connecting the permission returned by
             * the connection will represent the permission needed to connect
             * to foo.com, while the permission returned after connecting will
             * be to bar.com.
             * <p>Permissions are generally used for two purposes: to protect
             * caches of objects obtained through URLConnections, and to check
             * the right of a recipient to learn about a particular URL. In
             * the first case, the permission should be obtained
             * <em>after</em> the object has been obtained. For example, in an
             * HTTP connection, this will represent the permission to connect
             * to the host from which the data was ultimately fetched. In the
             * second case, the permission should be obtained and tested
             * <em>before</em> connecting.
             */
            // @ts-ignore
            public getPermission(): java.security.Permission;
            /**
             * Returns an input stream that reads from this open connection.
             * A SocketTimeoutException can be thrown when reading from the
             * returned input stream if the read timeout expires before data
             * is available for read.
             */
            // @ts-ignore
            public getInputStream(): java.io.InputStream;
            /**
             * Returns an output stream that writes to this connection.
             */
            // @ts-ignore
            public getOutputStream(): java.io.OutputStream;
            /**
             * Returns a {@code String} representation of this URL connection.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Sets the value of the {@code doInput} field for this
             * {@code URLConnection} to the specified value.
             * <p>
             * A URL connection can be used for input and/or output.  Set the DoInput
             * flag to true if you intend to use the URL connection for input,
             * false if not.  The default is true.
             */
            // @ts-ignore
            public setDoInput(doinput: boolean): void;
            /**
             * Returns the value of this {@code URLConnection}'s
             * {@code doInput} flag.
             */
            // @ts-ignore
            public getDoInput(): boolean;
            /**
             * Sets the value of the {@code doOutput} field for this
             * {@code URLConnection} to the specified value.
             * <p>
             * A URL connection can be used for input and/or output.  Set the DoOutput
             * flag to true if you intend to use the URL connection for output,
             * false if not.  The default is false.
             */
            // @ts-ignore
            public setDoOutput(dooutput: boolean): void;
            /**
             * Returns the value of this {@code URLConnection}'s
             * {@code doOutput} flag.
             */
            // @ts-ignore
            public getDoOutput(): boolean;
            /**
             * Set the value of the {@code allowUserInteraction} field of
             * this {@code URLConnection}.
             */
            // @ts-ignore
            public setAllowUserInteraction(allowuserinteraction: boolean): void;
            /**
             * Returns the value of the {@code allowUserInteraction} field for
             * this object.
             */
            // @ts-ignore
            public getAllowUserInteraction(): boolean;
            /**
             * Sets the default value of the
             * {@code allowUserInteraction} field for all future
             * {@code URLConnection} objects to the specified value.
             */
            // @ts-ignore
            public static setDefaultAllowUserInteraction(defaultallowuserinteraction: boolean): void;
            /**
             * Returns the default value of the {@code allowUserInteraction}
             * field.
             * <p>
             * Ths default is "sticky", being a part of the static state of all
             * URLConnections.  This flag applies to the next, and all following
             * URLConnections that are created.
             */
            // @ts-ignore
            public static getDefaultAllowUserInteraction(): boolean;
            /**
             * Sets the value of the {@code useCaches} field of this
             * {@code URLConnection} to the specified value.
             * <p>
             * Some protocols do caching of documents.  Occasionally, it is important
             * to be able to "tunnel through" and ignore the caches (e.g., the
             * "reload" button in a browser).  If the UseCaches flag on a connection
             * is true, the connection is allowed to use whatever caches it can.
             * If false, caches are to be ignored.
             * The default value comes from DefaultUseCaches, which defaults to
             * true.
             */
            // @ts-ignore
            public setUseCaches(usecaches: boolean): void;
            /**
             * Returns the value of this {@code URLConnection}'s
             * {@code useCaches} field.
             */
            // @ts-ignore
            public getUseCaches(): boolean;
            /**
             * Sets the value of the {@code ifModifiedSince} field of
             * this {@code URLConnection} to the specified value.
             */
            // @ts-ignore
            public setIfModifiedSince(ifmodifiedsince: number): void;
            /**
             * Returns the value of this object's {@code ifModifiedSince} field.
             */
            // @ts-ignore
            public getIfModifiedSince(): number;
            /**
             * Returns the default value of a {@code URLConnection}'s
             * {@code useCaches} flag.
             * <p>
             * Ths default is "sticky", being a part of the static state of all
             * URLConnections.  This flag applies to the next, and all following
             * URLConnections that are created.
             */
            // @ts-ignore
            public getDefaultUseCaches(): boolean;
            /**
             * Sets the default value of the {@code useCaches} field to the
             * specified value.
             */
            // @ts-ignore
            public setDefaultUseCaches(defaultusecaches: boolean): void;
            /**
             * Sets the general request property. If a property with the key already
             * exists, overwrite its value with the new value.
             * <p> NOTE: HTTP requires all request properties which can
             * legally have multiple instances with the same key
             * to use a comma-separated list syntax which enables multiple
             * properties to be appended into a single property.
             */
            // @ts-ignore
            public setRequestProperty(key: string, value: string): void;
            /**
             * Adds a general request property specified by a
             * key-value pair.  This method will not overwrite
             * existing values associated with the same key.
             */
            // @ts-ignore
            public addRequestProperty(key: string, value: string): void;
            /**
             * Returns the value of the named general request property for this
             * connection.
             */
            // @ts-ignore
            public getRequestProperty(key: string): string;
            /**
             * Returns an unmodifiable Map of general request
             * properties for this connection. The Map keys
             * are Strings that represent the request-header
             * field names. Each Map value is a unmodifiable List
             * of Strings that represents the corresponding
             * field values.
             */
            // @ts-ignore
            public getRequestProperties(): java.util.Map;
            /**
             * Sets the default value of a general request property. When a
             * {@code URLConnection} is created, it is initialized with
             * these properties.
             */
            // @ts-ignore
            public static setDefaultRequestProperty(key: string, value: string): void;
            /**
             * Returns the value of the default request property. Default request
             * properties are set for every connection.
             */
            // @ts-ignore
            public static getDefaultRequestProperty(key: string): string;
            /**
             * Sets the {@code ContentHandlerFactory} of an
             * application. It can be called at most once by an application.
             * <p>
             * The {@code ContentHandlerFactory} instance is used to
             * construct a content handler from a content type
             * <p>
             * If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            public static setContentHandlerFactory(fac: java.net.ContentHandlerFactory): void;
            /**
             * Tries to determine the content type of an object, based
             * on the specified "file" component of a URL.
             * This is a convenience method that can be used by
             * subclasses that override the {@code getContentType} method.
             */
            // @ts-ignore
            public static guessContentTypeFromName(fname: string): string;
            /**
             * Tries to determine the type of an input stream based on the
             * characters at the beginning of the input stream. This method can
             * be used by subclasses that override the
             * {@code getContentType} method.
             * <p>
             * Ideally, this routine would not be needed. But many
             * {@code http} servers return the incorrect content type; in
             * addition, there are many nonstandard extensions. Direct inspection
             * of the bytes to determine the content type is often more accurate
             * than believing the content type claimed by the {@code http} server.
             */
            // @ts-ignore
            public static guessContentTypeFromStream(is: java.io.InputStream): string;
        }
    }
}
