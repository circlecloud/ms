// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class ServerSocket extends java.lang.Object {
            /**
             * Creates an unbound server socket.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a server socket, bound to the specified port. A port number
             * of {@code 0} means that the port number is automatically
             * allocated, typically from an ephemeral port range. This port
             * number can then be retrieved by calling {@link #getLocalPort getLocalPort}.
             * <p>
             * The maximum queue length for incoming connection indications (a
             * request to connect) is set to {@code 50}. If a connection
             * indication arrives when the queue is full, the connection is refused.
             * <p>
             * If the application has specified a server socket factory, that
             * factory's {@code createSocketImpl} method is called to create
             * the actual socket implementation. Otherwise a "plain" socket is created.
             * <p>
             * If there is a security manager,
             * its {@code checkListen} method is called
             * with the {@code port} argument
             * as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            constructor(port: number)
            /**
             * Creates a server socket and binds it to the specified local port
             * number, with the specified backlog.
             * A port number of {@code 0} means that the port number is
             * automatically allocated, typically from an ephemeral port range.
             * This port number can then be retrieved by calling
             * {@link #getLocalPort getLocalPort}.
             * <p>
             * The maximum queue length for incoming connection indications (a
             * request to connect) is set to the {@code backlog} parameter. If
             * a connection indication arrives when the queue is full, the
             * connection is refused.
             * <p>
             * If the application has specified a server socket factory, that
             * factory's {@code createSocketImpl} method is called to create
             * the actual socket implementation. Otherwise a "plain" socket is created.
             * <p>
             * If there is a security manager,
             * its {@code checkListen} method is called
             * with the {@code port} argument
             * as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             * The {@code backlog} argument is the requested maximum number of
             * pending connections on the socket. Its exact semantics are implementation
             * specific. In particular, an implementation may impose a maximum length
             * or may choose to ignore the parameter altogther. The value provided
             * should be greater than {@code 0}. If it is less than or equal to
             * {@code 0}, then an implementation specific default will be used.
             * <P>
             */
            // @ts-ignore
            constructor(port: number, backlog: number)
            /**
             * Create a server with the specified port, listen backlog, and
             * local IP address to bind to.  The <i>bindAddr</i> argument
             * can be used on a multi-homed host for a ServerSocket that
             * will only accept connect requests to one of its addresses.
             * If <i>bindAddr</i> is null, it will default accepting
             * connections on any/all local addresses.
             * The port must be between 0 and 65535, inclusive.
             * A port number of {@code 0} means that the port number is
             * automatically allocated, typically from an ephemeral port range.
             * This port number can then be retrieved by calling
             * {@link #getLocalPort getLocalPort}.
             * <P>If there is a security manager, this method
             * calls its {@code checkListen} method
             * with the {@code port} argument
             * as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             * The {@code backlog} argument is the requested maximum number of
             * pending connections on the socket. Its exact semantics are implementation
             * specific. In particular, an implementation may impose a maximum length
             * or may choose to ignore the parameter altogther. The value provided
             * should be greater than {@code 0}. If it is less than or equal to
             * {@code 0}, then an implementation specific default will be used.
             * <P>
             */
            // @ts-ignore
            constructor(port: number, backlog: number, bindAddr: java.net.InetAddress)
            /**
             * Binds the {@code ServerSocket} to a specific address
             * (IP address and port number).
             * <p>
             * If the address is {@code null}, then the system will pick up
             * an ephemeral port and a valid local address to bind the socket.
             * <p>
             */
            // @ts-ignore
            public bind(endpoint: java.net.SocketAddress): void;
            /**
             * Binds the {@code ServerSocket} to a specific address
             * (IP address and port number).
             * <p>
             * If the address is {@code null}, then the system will pick up
             * an ephemeral port and a valid local address to bind the socket.
             * <P>
             * The {@code backlog} argument is the requested maximum number of
             * pending connections on the socket. Its exact semantics are implementation
             * specific. In particular, an implementation may impose a maximum length
             * or may choose to ignore the parameter altogther. The value provided
             * should be greater than {@code 0}. If it is less than or equal to
             * {@code 0}, then an implementation specific default will be used.
             */
            // @ts-ignore
            public bind(endpoint: java.net.SocketAddress, backlog: number): void;
            /**
             * Returns the local address of this server socket.
             * <p>
             * If the socket was bound prior to being {@link #close closed},
             * then this method will continue to return the local address
             * after the socket is closed.
             * <p>
             * If there is a security manager set, its {@code checkConnect} method is
             * called with the local address and {@code -1} as its arguments to see
             * if the operation is allowed. If the operation is not allowed,
             * the {@link InetAddress#getLoopbackAddress loopback} address is returned.
             */
            // @ts-ignore
            public getInetAddress(): java.net.InetAddress;
            /**
             * Returns the port number on which this socket is listening.
             * <p>
             * If the socket was bound prior to being {@link #close closed},
             * then this method will continue to return the port number
             * after the socket is closed.
             */
            // @ts-ignore
            public getLocalPort(): number;
            /**
             * Returns the address of the endpoint this socket is bound to.
             * <p>
             * If the socket was bound prior to being {@link #close closed},
             * then this method will continue to return the address of the endpoint
             * after the socket is closed.
             * <p>
             * If there is a security manager set, its {@code checkConnect} method is
             * called with the local address and {@code -1} as its arguments to see
             * if the operation is allowed. If the operation is not allowed,
             * a {@code SocketAddress} representing the
             * {@link InetAddress#getLoopbackAddress loopback} address and the local
             * port to which the socket is bound is returned.
             */
            // @ts-ignore
            public getLocalSocketAddress(): java.net.SocketAddress;
            /**
             * Listens for a connection to be made to this socket and accepts
             * it. The method blocks until a connection is made.
             * <p>A new Socket {@code s} is created and, if there
             * is a security manager,
             * the security manager's {@code checkAccept} method is called
             * with {@code s.getInetAddress().getHostAddress()} and
             * {@code s.getPort()}
             * as its arguments to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            public accept(): java.net.Socket;
            /**
             * Subclasses of ServerSocket use this method to override accept()
             * to return their own subclass of socket.  So a FooServerSocket
             * will typically hand this method an <i>empty</i> FooSocket.  On
             * return from implAccept the FooSocket will be connected to a client.
             */
            // @ts-ignore
            protected implAccept(s: java.net.Socket): void;
            /**
             * Closes this socket.
             * Any thread currently blocked in {@link #accept()} will throw
             * a {@link SocketException}.
             * <p> If this socket has an associated channel then the channel is closed
             * as well.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Returns the unique {@link java.nio.channels.ServerSocketChannel} object
             * associated with this socket, if any.
             * <p> A server socket will have a channel if, and only if, the channel
             * itself was created via the {@link
             * java.nio.channels.ServerSocketChannel#open ServerSocketChannel.open}
             * method.
             */
            // @ts-ignore
            public getChannel(): java.nio.channels.ServerSocketChannel;
            /**
             * Returns the binding state of the ServerSocket.
             */
            // @ts-ignore
            public isBound(): boolean;
            /**
             * Returns the closed state of the ServerSocket.
             */
            // @ts-ignore
            public isClosed(): boolean;
            /**
             * Enable/disable {@link SocketOptions#SO_TIMEOUT SO_TIMEOUT} with the
             * specified timeout, in milliseconds.  With this option set to a non-zero
             * timeout, a call to accept() for this ServerSocket
             * will block for only this amount of time.  If the timeout expires,
             * a <B>java.net.SocketTimeoutException</B> is raised, though the
             * ServerSocket is still valid.  The option <B>must</B> be enabled
             * prior to entering the blocking operation to have effect.  The
             * timeout must be {@code > 0}.
             * A timeout of zero is interpreted as an infinite timeout.
             */
            // @ts-ignore
            public setSoTimeout(timeout: number): void;
            /**
             * Retrieve setting for {@link SocketOptions#SO_TIMEOUT SO_TIMEOUT}.
             * 0 returns implies that the option is disabled (i.e., timeout of infinity).
             */
            // @ts-ignore
            public getSoTimeout(): number;
            /**
             * Enable/disable the {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR}
             * socket option.
             * <p>
             * When a TCP connection is closed the connection may remain
             * in a timeout state for a period of time after the connection
             * is closed (typically known as the {@code TIME_WAIT} state
             * or {@code 2MSL} wait state).
             * For applications using a well known socket address or port
             * it may not be possible to bind a socket to the required
             * {@code SocketAddress} if there is a connection in the
             * timeout state involving the socket address or port.
             * <p>
             * Enabling {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR} prior to
             * binding the socket using {@link #bind(SocketAddress)} allows the socket
             * to be bound even though a previous connection is in a timeout state.
             * <p>
             * When a {@code ServerSocket} is created the initial setting
             * of {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR} is not defined.
             * Applications can use {@link #getReuseAddress()} to determine the initial
             * setting of {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR}.
             * <p>
             * The behaviour when {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR} is
             * enabled or disabled after a socket is bound (See {@link #isBound()})
             * is not defined.
             */
            // @ts-ignore
            public setReuseAddress(on: boolean): void;
            /**
             * Tests if {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR} is enabled.
             */
            // @ts-ignore
            public getReuseAddress(): boolean;
            /**
             * Returns the implementation address and implementation port of
             * this socket as a {@code String}.
             * <p>
             * If there is a security manager set, its {@code checkConnect} method is
             * called with the local address and {@code -1} as its arguments to see
             * if the operation is allowed. If the operation is not allowed,
             * an {@code InetAddress} representing the
             * {@link InetAddress#getLoopbackAddress loopback} address is returned as
             * the implementation address.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Sets the server socket implementation factory for the
             * application. The factory can be specified only once.
             * <p>
             * When an application creates a new server socket, the socket
             * implementation factory's {@code createSocketImpl} method is
             * called to create the actual socket implementation.
             * <p>
             * Passing {@code null} to the method is a no-op unless the factory
             * was already set.
             * <p>
             * If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            public static setSocketFactory(fac: java.net.SocketImplFactory): void;
            /**
             * Sets a default proposed value for the
             * {@link SocketOptions#SO_RCVBUF SO_RCVBUF} option for sockets
             * accepted from this {@code ServerSocket}. The value actually set
             * in the accepted socket must be determined by calling
             * {@link Socket#getReceiveBufferSize()} after the socket
             * is returned by {@link #accept()}.
             * <p>
             * The value of {@link SocketOptions#SO_RCVBUF SO_RCVBUF} is used both to
             * set the size of the internal socket receive buffer, and to set the size
             * of the TCP receive window that is advertized to the remote peer.
             * <p>
             * It is possible to change the value subsequently, by calling
             * {@link Socket#setReceiveBufferSize(int)}. However, if the application
             * wishes to allow a receive window larger than 64K bytes, as defined by RFC1323
             * then the proposed value must be set in the ServerSocket <B>before</B>
             * it is bound to a local address. This implies, that the ServerSocket must be
             * created with the no-argument constructor, then setReceiveBufferSize() must
             * be called and lastly the ServerSocket is bound to an address by calling bind().
             * <p>
             * Failure to do this will not cause an error, and the buffer size may be set to the
             * requested value but the TCP receive window in sockets accepted from
             * this ServerSocket will be no larger than 64K bytes.
             */
            // @ts-ignore
            public setReceiveBufferSize(size: number): void;
            /**
             * Gets the value of the {@link SocketOptions#SO_RCVBUF SO_RCVBUF} option
             * for this {@code ServerSocket}, that is the proposed buffer size that
             * will be used for Sockets accepted from this {@code ServerSocket}.
             * <p>Note, the value actually set in the accepted socket is determined by
             * calling {@link Socket#getReceiveBufferSize()}.
             */
            // @ts-ignore
            public getReceiveBufferSize(): number;
            /**
             * Sets performance preferences for this ServerSocket.
             * <p> Sockets use the TCP/IP protocol by default.  Some implementations
             * may offer alternative protocols which have different performance
             * characteristics than TCP/IP.  This method allows the application to
             * express its own preferences as to how these tradeoffs should be made
             * when the implementation chooses from the available protocols.
             * <p> Performance preferences are described by three integers
             * whose values indicate the relative importance of short connection time,
             * low latency, and high bandwidth.  The absolute values of the integers
             * are irrelevant; in order to choose a protocol the values are simply
             * compared, with larger values indicating stronger preferences.  If the
             * application prefers short connection time over both low latency and high
             * bandwidth, for example, then it could invoke this method with the values
             * {@code (1, 0, 0)}.  If the application prefers high bandwidth above low
             * latency, and low latency above short connection time, then it could
             * invoke this method with the values {@code (0, 1, 2)}.
             * <p> Invoking this method after this socket has been bound
             * will have no effect. This implies that in order to use this capability
             * requires the socket to be created with the no-argument constructor.
             */
            // @ts-ignore
            public setPerformancePreferences(connectionTime: number, latency: number, bandwidth: number): void;
        }
    }
}
