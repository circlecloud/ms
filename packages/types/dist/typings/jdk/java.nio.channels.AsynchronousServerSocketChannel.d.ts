// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class AsynchronousServerSocketChannel extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor(provider: java.nio.channels.spi.AsynchronousChannelProvider)
                /**
                 * Returns the provider that created this channel.
                 */
                // @ts-ignore
                public provider(): java.nio.channels.spi.AsynchronousChannelProvider;
                /**
                 * Opens an asynchronous server-socket channel.
                 * <p> The new channel is created by invoking the {@link
                 * java.nio.channels.spi.AsynchronousChannelProvider#openAsynchronousServerSocketChannel
                 * openAsynchronousServerSocketChannel} method on the {@link
                 * java.nio.channels.spi.AsynchronousChannelProvider} object that created
                 * the given group. If the group parameter is <tt>null</tt> then the
                 * resulting channel is created by the system-wide default provider, and
                 * bound to the <em>default group</em>.
                 */
                // @ts-ignore
                public static open(group: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousServerSocketChannel;
                /**
                 * Opens an asynchronous server-socket channel.
                 * <p> This method returns an asynchronous server socket channel that is
                 * bound to the <em>default group</em>. This method is equivalent to evaluating
                 * the expression:
                 * <blockquote><pre>
                 * open((AsynchronousChannelGroup)null);
                 * </pre></blockquote>
                 */
                // @ts-ignore
                public static open(): java.nio.channels.AsynchronousServerSocketChannel;
                /**
                 * Binds the channel's socket to a local address and configures the socket to
                 * listen for connections.
                 * <p> An invocation of this method is equivalent to the following:
                 * <blockquote><pre>
                 * bind(local, 0);
                 * </pre></blockquote>
                 */
                // @ts-ignore
                public bind(local: java.net.SocketAddress): java.nio.channels.AsynchronousServerSocketChannel;
                // @ts-ignore
                public abstract setOption(name: java.net.SocketOption, value: java.lang.Object): java.nio.channels.AsynchronousServerSocketChannel;
                /**
                 * Accepts a connection.
                 * <p> This method initiates an asynchronous operation to accept a
                 * connection made to this channel's socket. The {@code handler} parameter is
                 * a completion handler that is invoked when a connection is accepted (or
                 * the operation fails). The result passed to the completion handler is
                 * the {@link AsynchronousSocketChannel} to the new connection.
                 * <p> When a new connection is accepted then the resulting {@code
                 * AsynchronousSocketChannel} will be bound to the same {@link
                 * AsynchronousChannelGroup} as this channel. If the group is {@link
                 * AsynchronousChannelGroup#isShutdown shutdown} and a connection is accepted,
                 * then the connection is closed, and the operation completes with an {@code
                 * IOException} and cause {@link ShutdownChannelGroupException}.
                 * <p> To allow for concurrent handling of new connections, the completion
                 * handler is not invoked directly by the initiating thread when a new
                 * connection is accepted immediately (see <a
                 * href="AsynchronousChannelGroup.html#threading">Threading</a>).
                 * <p> If a security manager has been installed then it verifies that the
                 * address and port number of the connection's remote endpoint are permitted
                 * by the security manager's {@link SecurityManager#checkAccept checkAccept}
                 * method. The permission check is performed with privileges that are restricted
                 * by the calling context of this method. If the permission check fails then
                 * the connection is closed and the operation completes with a {@link
                 * SecurityException}.
                 */
                // @ts-ignore
                public abstract accept(attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
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
