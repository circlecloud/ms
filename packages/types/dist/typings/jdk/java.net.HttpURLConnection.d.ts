// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class HttpURLConnection extends java.net.URLConnection {
            /**
             * Constructor for the HttpURLConnection.
             */
            // @ts-ignore
            constructor(u: java.net.URL)
            // @ts-ignore
            protected method: string;
            // @ts-ignore
            protected chunkLength: number;
            // @ts-ignore
            protected fixedContentLength: number;
            // @ts-ignore
            protected fixedContentLengthLong: number;
            // @ts-ignore
            protected responseCode: number;
            // @ts-ignore
            protected responseMessage: string;
            // @ts-ignore
            protected instanceFollowRedirects: boolean;
            // @ts-ignore
            public static HTTP_OK: number;
            // @ts-ignore
            public static HTTP_CREATED: number;
            // @ts-ignore
            public static HTTP_ACCEPTED: number;
            // @ts-ignore
            public static HTTP_NOT_AUTHORITATIVE: number;
            // @ts-ignore
            public static HTTP_NO_CONTENT: number;
            // @ts-ignore
            public static HTTP_RESET: number;
            // @ts-ignore
            public static HTTP_PARTIAL: number;
            // @ts-ignore
            public static HTTP_MULT_CHOICE: number;
            // @ts-ignore
            public static HTTP_MOVED_PERM: number;
            // @ts-ignore
            public static HTTP_MOVED_TEMP: number;
            // @ts-ignore
            public static HTTP_SEE_OTHER: number;
            // @ts-ignore
            public static HTTP_NOT_MODIFIED: number;
            // @ts-ignore
            public static HTTP_USE_PROXY: number;
            // @ts-ignore
            public static HTTP_BAD_REQUEST: number;
            // @ts-ignore
            public static HTTP_UNAUTHORIZED: number;
            // @ts-ignore
            public static HTTP_PAYMENT_REQUIRED: number;
            // @ts-ignore
            public static HTTP_FORBIDDEN: number;
            // @ts-ignore
            public static HTTP_NOT_FOUND: number;
            // @ts-ignore
            public static HTTP_BAD_METHOD: number;
            // @ts-ignore
            public static HTTP_NOT_ACCEPTABLE: number;
            // @ts-ignore
            public static HTTP_PROXY_AUTH: number;
            // @ts-ignore
            public static HTTP_CLIENT_TIMEOUT: number;
            // @ts-ignore
            public static HTTP_CONFLICT: number;
            // @ts-ignore
            public static HTTP_GONE: number;
            // @ts-ignore
            public static HTTP_LENGTH_REQUIRED: number;
            // @ts-ignore
            public static HTTP_PRECON_FAILED: number;
            // @ts-ignore
            public static HTTP_ENTITY_TOO_LARGE: number;
            // @ts-ignore
            public static HTTP_REQ_TOO_LONG: number;
            // @ts-ignore
            public static HTTP_UNSUPPORTED_TYPE: number;
            // @ts-ignore
            public static HTTP_SERVER_ERROR: number;
            // @ts-ignore
            public static HTTP_INTERNAL_ERROR: number;
            // @ts-ignore
            public static HTTP_NOT_IMPLEMENTED: number;
            // @ts-ignore
            public static HTTP_BAD_GATEWAY: number;
            // @ts-ignore
            public static HTTP_UNAVAILABLE: number;
            // @ts-ignore
            public static HTTP_GATEWAY_TIMEOUT: number;
            // @ts-ignore
            public static HTTP_VERSION: number;
            /**
             * Returns the key for the {@code n}<sup>th</sup> header field.
             * Some implementations may treat the {@code 0}<sup>th</sup>
             * header field as special, i.e. as the status line returned by the HTTP
             * server. In this case, {@link #getHeaderField(int) getHeaderField(0)} returns the status
             * line, but {@code getHeaderFieldKey(0)} returns null.
             */
            // @ts-ignore
            public getHeaderFieldKey(n: number): string;
            /**
             * This method is used to enable streaming of a HTTP request body
             * without internal buffering, when the content length is known in
             * advance.
             * <p>
             * An exception will be thrown if the application
             * attempts to write more data than the indicated
             * content-length, or if the application closes the OutputStream
             * before writing the indicated amount.
             * <p>
             * When output streaming is enabled, authentication
             * and redirection cannot be handled automatically.
             * A HttpRetryException will be thrown when reading
             * the response if authentication or redirection are required.
             * This exception can be queried for the details of the error.
             * <p>
             * This method must be called before the URLConnection is connected.
             * <p>
             * <B>NOTE:</B> {@link #setFixedLengthStreamingMode(long)} is recommended
             * instead of this method as it allows larger content lengths to be set.
             */
            // @ts-ignore
            public setFixedLengthStreamingMode(contentLength: number): void;
            /**
             * This method is used to enable streaming of a HTTP request body
             * without internal buffering, when the content length is known in
             * advance.
             * <P> An exception will be thrown if the application attempts to write
             * more data than the indicated content-length, or if the application
             * closes the OutputStream before writing the indicated amount.
             * <P> When output streaming is enabled, authentication and redirection
             * cannot be handled automatically. A {@linkplain HttpRetryException} will
             * be thrown when reading the response if authentication or redirection
             * are required. This exception can be queried for the details of the
             * error.
             * <P> This method must be called before the URLConnection is connected.
             * <P> The content length set by invoking this method takes precedence
             * over any value set by {@link #setFixedLengthStreamingMode(int)}.
             */
            // @ts-ignore
            public setFixedLengthStreamingMode(contentLength: number): void;
            /**
             * This method is used to enable streaming of a HTTP request body
             * without internal buffering, when the content length is <b>not</b>
             * known in advance. In this mode, chunked transfer encoding
             * is used to send the request body. Note, not all HTTP servers
             * support this mode.
             * <p>
             * When output streaming is enabled, authentication
             * and redirection cannot be handled automatically.
             * A HttpRetryException will be thrown when reading
             * the response if authentication or redirection are required.
             * This exception can be queried for the details of the error.
             * <p>
             * This method must be called before the URLConnection is connected.
             */
            // @ts-ignore
            public setChunkedStreamingMode(chunklen: number): void;
            /**
             * Returns the value for the {@code n}<sup>th</sup> header field.
             * Some implementations may treat the {@code 0}<sup>th</sup>
             * header field as special, i.e. as the status line returned by the HTTP
             * server.
             * <p>
             * This method can be used in conjunction with the
             * {@link #getHeaderFieldKey getHeaderFieldKey} method to iterate through all
             * the headers in the message.
             */
            // @ts-ignore
            public getHeaderField(n: number): string;
            /**
             * Sets whether HTTP redirects  (requests with response code 3xx) should
             * be automatically followed by this class.  True by default.  Applets
             * cannot change this variable.
             * <p>
             * If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            public static setFollowRedirects(set: boolean): void;
            /**
             * Returns a {@code boolean} indicating
             * whether or not HTTP redirects (3xx) should
             * be automatically followed.
             */
            // @ts-ignore
            public static getFollowRedirects(): boolean;
            /**
             * Sets whether HTTP redirects (requests with response code 3xx) should
             * be automatically followed by this {@code HttpURLConnection}
             * instance.
             * <p>
             * The default value comes from followRedirects, which defaults to
             * true.
             */
            // @ts-ignore
            public setInstanceFollowRedirects(followRedirects: boolean): void;
            /**
             * Returns the value of this {@code HttpURLConnection}'s
             * {@code instanceFollowRedirects} field.
             */
            // @ts-ignore
            public getInstanceFollowRedirects(): boolean;
            /**
             * Set the method for the URL request, one of:
             * <UL>
             * <LI>GET
             * <LI>POST
             * <LI>HEAD
             * <LI>OPTIONS
             * <LI>PUT
             * <LI>DELETE
             * <LI>TRACE
             * </UL> are legal, subject to protocol restrictions.  The default
             * method is GET.
             */
            // @ts-ignore
            public setRequestMethod(method: string): void;
            /**
             * Get the request method.
             */
            // @ts-ignore
            public getRequestMethod(): string;
            /**
             * Gets the status code from an HTTP response message.
             * For example, in the case of the following status lines:
             * <PRE>
             * HTTP/1.0 200 OK
             * HTTP/1.0 401 Unauthorized
             * </PRE>
             * It will return 200 and 401 respectively.
             * Returns -1 if no code can be discerned
             * from the response (i.e., the response is not valid HTTP).
             */
            // @ts-ignore
            public getResponseCode(): number;
            /**
             * Gets the HTTP response message, if any, returned along with the
             * response code from a server.  From responses like:
             * <PRE>
             * HTTP/1.0 200 OK
             * HTTP/1.0 404 Not Found
             * </PRE>
             * Extracts the Strings "OK" and "Not Found" respectively.
             * Returns null if none could be discerned from the responses
             * (the result was not valid HTTP).
             */
            // @ts-ignore
            public getResponseMessage(): string;
            // @ts-ignore
            public getHeaderFieldDate(name: string, Default: number): number;
            /**
             * Indicates that other requests to the server
             * are unlikely in the near future. Calling disconnect()
             * should not imply that this HttpURLConnection
             * instance can be reused for other requests.
             */
            // @ts-ignore
            public abstract disconnect(): void;
            /**
             * Indicates if the connection is going through a proxy.
             */
            // @ts-ignore
            public abstract usingProxy(): boolean;
            /**
             * Returns a {@link SocketPermission} object representing the
             * permission necessary to connect to the destination host and port.
             */
            // @ts-ignore
            public getPermission(): java.security.Permission;
            /**
             * Returns the error stream if the connection failed
             * but the server sent useful data nonetheless. The
             * typical example is when an HTTP server responds
             * with a 404, which will cause a FileNotFoundException
             * to be thrown in connect, but the server sent an HTML
             * help page with suggestions as to what to do.
             * <p>This method will not cause a connection to be initiated.  If
             * the connection was not connected, or if the server did not have
             * an error while connecting or if the server had an error but
             * no error data was sent, this method will return null. This is
             * the default.
             */
            // @ts-ignore
            public getErrorStream(): java.io.InputStream;
        }
    }
}
