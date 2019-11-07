// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class ServerSocketChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor(provider: java.nio.channels.spi.SelectorProvider)
                /**
                 * Opens a server-socket channel.
                 * <p> The new channel is created by invoking the {@link
                 * java.nio.channels.spi.SelectorProvider#openServerSocketChannel
                 * openServerSocketChannel} method of the system-wide default {@link
                 * java.nio.channels.spi.SelectorProvider} object.
                 * <p> The new channel's socket is initially unbound; it must be bound to a
                 * specific address via one of its socket's {@link
                 * java.net.ServerSocket#bind(SocketAddress) bind} methods before
                 * connections can be accepted.  </p>
                 */
                // @ts-ignore
                public static open(): java.nio.channels.ServerSocketChannel;
                /**
                 * Returns an operation set identifying this channel's supported
                 * operations.
                 * <p> Server-socket channels only support the accepting of new
                 * connections, so this method returns {@link SelectionKey#OP_ACCEPT}.
                 * </p>
                 */
                // @ts-ignore
                public validOps(): number;
                /**
                 * Binds the channel's socket to a local address and configures the socket
                 * to listen for connections.
                 * <p> An invocation of this method is equivalent to the following:
                 * <blockquote><pre>
                 * bind(local, 0);
                 * </pre></blockquote>
                 */
                // @ts-ignore
                public bind(local: java.net.SocketAddress): java.nio.channels.ServerSocketChannel;
                // @ts-ignore
                public abstract setOption(name: java.net.SocketOption, value: java.lang.Object): java.nio.channels.ServerSocketChannel;
                /**
                 * Retrieves a server socket associated with this channel.
                 * <p> The returned object will not declare any public methods that are not
                 * declared in the {@link java.net.ServerSocket} class.  </p>
                 */
                // @ts-ignore
                public abstract socket(): java.net.ServerSocket;
                /**
                 * Accepts a connection made to this channel's socket.
                 * <p> If this channel is in non-blocking mode then this method will
                 * immediately return <tt>null</tt> if there are no pending connections.
                 * Otherwise it will block indefinitely until a new connection is available
                 * or an I/O error occurs.
                 * <p> The socket channel returned by this method, if any, will be in
                 * blocking mode regardless of the blocking mode of this channel.
                 * <p> This method performs exactly the same security checks as the {@link
                 * java.net.ServerSocket#accept accept} method of the {@link
                 * java.net.ServerSocket} class.  That is, if a security manager has been
                 * installed then for each new connection this method verifies that the
                 * address and port number of the connection's remote endpoint are
                 * permitted by the security manager's {@link
                 * java.lang.SecurityManager#checkAccept checkAccept} method.  </p>
                 */
                // @ts-ignore
                public abstract accept(): java.nio.channels.SocketChannel;
                /**
                 * {@inheritDoc}
                 * <p>
                 * If there is a security manager set, its {@code checkConnect} method is
                 * called with the local address and {@code -1} as its arguments to see
                 * if the operation is allowed. If the operation is not allowed,
                 * a {@code SocketAddress} representing the
                 * {@link java.net.InetAddress#getLoopbackAddress loopback} address and the
                 * local port of the channel's socket is returned.
                 */
                // @ts-ignore
                public abstract getLocalAddress(): java.net.SocketAddress;
            }
        }
    }
}
