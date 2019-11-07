declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class SocketChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor(provider: java.nio.channels.spi.SelectorProvider)
                /**
                 * Opens a socket channel.
                 * <p> The new channel is created by invoking the {@link
                 * java.nio.channels.spi.SelectorProvider#openSocketChannel
                 * openSocketChannel} method of the system-wide default {@link
                 * java.nio.channels.spi.SelectorProvider} object.  </p>
                 */
                // @ts-ignore
                public static open(): java.nio.channels.SocketChannel;
                /**
                 * Opens a socket channel and connects it to a remote address.
                 * <p> This convenience method works as if by invoking the {@link #open()}
                 * method, invoking the {@link #connect(SocketAddress) connect} method upon
                 * the resulting socket channel, passing it <tt>remote</tt>, and then
                 * returning that channel.  </p>
                 */
                // @ts-ignore
                public static open(remote: java.net.SocketAddress): java.nio.channels.SocketChannel;
                /**
                 * Returns an operation set identifying this channel's supported
                 * operations.
                 * <p> Socket channels support connecting, reading, and writing, so this
                 * method returns <tt>(</tt>{@link SelectionKey#OP_CONNECT}
                 * <tt>|</tt>&nbsp;{@link SelectionKey#OP_READ} <tt>|</tt>&nbsp;{@link
                 * SelectionKey#OP_WRITE}<tt>)</tt>.  </p>
                 */
                // @ts-ignore
                public validOps(): number;
                // @ts-ignore
                public abstract bind(local: java.net.SocketAddress): java.nio.channels.SocketChannel;
                // @ts-ignore
                public abstract setOption(name: java.net.SocketOption, value: java.lang.Object): java.nio.channels.SocketChannel;
                /**
                 * Shutdown the connection for reading without closing the channel.
                 * <p> Once shutdown for reading then further reads on the channel will
                 * return {@code -1}, the end-of-stream indication. If the input side of the
                 * connection is already shutdown then invoking this method has no effect.
                 */
                // @ts-ignore
                public abstract shutdownInput(): java.nio.channels.SocketChannel;
                /**
                 * Shutdown the connection for writing without closing the channel.
                 * <p> Once shutdown for writing then further attempts to write to the
                 * channel will throw {@link ClosedChannelException}. If the output side of
                 * the connection is already shutdown then invoking this method has no
                 * effect.
                 */
                // @ts-ignore
                public abstract shutdownOutput(): java.nio.channels.SocketChannel;
                /**
                 * Retrieves a socket associated with this channel.
                 * <p> The returned object will not declare any public methods that are not
                 * declared in the {@link java.net.Socket} class.  </p>
                 */
                // @ts-ignore
                public abstract socket(): java.net.Socket;
                /**
                 * Tells whether or not this channel's network socket is connected.
                 */
                // @ts-ignore
                public abstract isConnected(): boolean;
                /**
                 * Tells whether or not a connection operation is in progress on this
                 * channel.
                 */
                // @ts-ignore
                public abstract isConnectionPending(): boolean;
                /**
                 * Connects this channel's socket.
                 * <p> If this channel is in non-blocking mode then an invocation of this
                 * method initiates a non-blocking connection operation.  If the connection
                 * is established immediately, as can happen with a local connection, then
                 * this method returns <tt>true</tt>.  Otherwise this method returns
                 * <tt>false</tt> and the connection operation must later be completed by
                 * invoking the {@link #finishConnect finishConnect} method.
                 * <p> If this channel is in blocking mode then an invocation of this
                 * method will block until the connection is established or an I/O error
                 * occurs.
                 * <p> This method performs exactly the same security checks as the {@link
                 * java.net.Socket} class.  That is, if a security manager has been
                 * installed then this method verifies that its {@link
                 * java.lang.SecurityManager#checkConnect checkConnect} method permits
                 * connecting to the address and port number of the given remote endpoint.
                 * <p> This method may be invoked at any time.  If a read or write
                 * operation upon this channel is invoked while an invocation of this
                 * method is in progress then that operation will first block until this
                 * invocation is complete.  If a connection attempt is initiated but fails,
                 * that is, if an invocation of this method throws a checked exception,
                 * then the channel will be closed.  </p>
                 */
                // @ts-ignore
                public abstract connect(remote: java.net.SocketAddress): boolean;
                /**
                 * Finishes the process of connecting a socket channel.
                 * <p> A non-blocking connection operation is initiated by placing a socket
                 * channel in non-blocking mode and then invoking its {@link #connect
                 * connect} method.  Once the connection is established, or the attempt has
                 * failed, the socket channel will become connectable and this method may
                 * be invoked to complete the connection sequence.  If the connection
                 * operation failed then invoking this method will cause an appropriate
                 * {@link java.io.IOException} to be thrown.
                 * <p> If this channel is already connected then this method will not block
                 * and will immediately return <tt>true</tt>.  If this channel is in
                 * non-blocking mode then this method will return <tt>false</tt> if the
                 * connection process is not yet complete.  If this channel is in blocking
                 * mode then this method will block until the connection either completes
                 * or fails, and will always either return <tt>true</tt> or throw a checked
                 * exception describing the failure.
                 * <p> This method may be invoked at any time.  If a read or write
                 * operation upon this channel is invoked while an invocation of this
                 * method is in progress then that operation will first block until this
                 * invocation is complete.  If a connection attempt fails, that is, if an
                 * invocation of this method throws a checked exception, then the channel
                 * will be closed.  </p>
                 */
                // @ts-ignore
                public abstract finishConnect(): boolean;
                /**
                 * Returns the remote address to which this channel's socket is connected.
                 * <p> Where the channel is bound and connected to an Internet Protocol
                 * socket address then the return value from this method is of type {@link
                 * java.net.InetSocketAddress}.
                 */
                // @ts-ignore
                public abstract getRemoteAddress(): java.net.SocketAddress;
                // @ts-ignore
                public abstract read(dst: java.nio.ByteBuffer): number;
                // @ts-ignore
                public read(dsts: java.nio.ByteBuffer): number;
                // @ts-ignore
                public abstract write(src: java.nio.ByteBuffer): number;
                // @ts-ignore
                public write(srcs: java.nio.ByteBuffer): number;
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
