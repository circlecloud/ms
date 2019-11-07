// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class AsynchronousSocketChannel extends java.lang.Object {
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
                 * Opens an asynchronous socket channel.
                 * <p> The new channel is created by invoking the {@link
                 * AsynchronousChannelProvider#openAsynchronousSocketChannel
                 * openAsynchronousSocketChannel} method on the {@link
                 * AsynchronousChannelProvider} that created the group. If the group parameter
                 * is {@code null} then the resulting channel is created by the system-wide
                 * default provider, and bound to the <em>default group</em>.
                 */
                // @ts-ignore
                public static open(group: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousSocketChannel;
                /**
                 * Opens an asynchronous socket channel.
                 * <p> This method returns an asynchronous socket channel that is bound to
                 * the <em>default group</em>.This method is equivalent to evaluating the
                 * expression:
                 * <blockquote><pre>
                 * open((AsynchronousChannelGroup)null);
                 * </pre></blockquote>
                 */
                // @ts-ignore
                public static open(): java.nio.channels.AsynchronousSocketChannel;
                // @ts-ignore
                public abstract bind(local: java.net.SocketAddress): java.nio.channels.AsynchronousSocketChannel;
                // @ts-ignore
                public abstract setOption(name: java.net.SocketOption, value: java.lang.Object): java.nio.channels.AsynchronousSocketChannel;
                /**
                 * Shutdown the connection for reading without closing the channel.
                 * <p> Once shutdown for reading then further reads on the channel will
                 * return {@code -1}, the end-of-stream indication. If the input side of the
                 * connection is already shutdown then invoking this method has no effect.
                 * The effect on an outstanding read operation is system dependent and
                 * therefore not specified. The effect, if any, when there is data in the
                 * socket receive buffer that has not been read, or data arrives subsequently,
                 * is also system dependent.
                 */
                // @ts-ignore
                public abstract shutdownInput(): java.nio.channels.AsynchronousSocketChannel;
                /**
                 * Shutdown the connection for writing without closing the channel.
                 * <p> Once shutdown for writing then further attempts to write to the
                 * channel will throw {@link ClosedChannelException}. If the output side of
                 * the connection is already shutdown then invoking this method has no
                 * effect. The effect on an outstanding write operation is system dependent
                 * and therefore not specified.
                 */
                // @ts-ignore
                public abstract shutdownOutput(): java.nio.channels.AsynchronousSocketChannel;
                /**
                 * Returns the remote address to which this channel's socket is connected.
                 * <p> Where the channel is bound and connected to an Internet Protocol
                 * socket address then the return value from this method is of type {@link
                 * java.net.InetSocketAddress}.
                 */
                // @ts-ignore
                public abstract getRemoteAddress(): java.net.SocketAddress;
                /**
                 * Connects this channel.
                 * <p> This method initiates an operation to connect this channel. The
                 * {@code handler} parameter is a completion handler that is invoked when
                 * the connection is successfully established or connection cannot be
                 * established. If the connection cannot be established then the channel is
                 * closed.
                 * <p> This method performs exactly the same security checks as the {@link
                 * java.net.Socket} class.  That is, if a security manager has been
                 * installed then this method verifies that its {@link
                 * java.lang.SecurityManager#checkConnect checkConnect} method permits
                 * connecting to the address and port number of the given remote endpoint.
                 */
                // @ts-ignore
                public abstract connect(remote: java.net.SocketAddress, attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
                /**
                 * Reads a sequence of bytes from this channel into the given buffer.
                 * <p> This method initiates an asynchronous read operation to read a
                 * sequence of bytes from this channel into the given buffer. The {@code
                 * handler} parameter is a completion handler that is invoked when the read
                 * operation completes (or fails). The result passed to the completion
                 * handler is the number of bytes read or {@code -1} if no bytes could be
                 * read because the channel has reached end-of-stream.
                 * <p> If a timeout is specified and the timeout elapses before the operation
                 * completes then the operation completes with the exception {@link
                 * InterruptedByTimeoutException}. Where a timeout occurs, and the
                 * implementation cannot guarantee that bytes have not been read, or will not
                 * be read from the channel into the given buffer, then further attempts to
                 * read from the channel will cause an unspecific runtime exception to be
                 * thrown.
                 * <p> Otherwise this method works in the same manner as the {@link
                 * AsynchronousByteChannel#read(ByteBuffer,Object,CompletionHandler)}
                 * method.
                 */
                // @ts-ignore
                public abstract read(dst: java.nio.ByteBuffer, timeout: number, unit: java.util.concurrent.TimeUnit, attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
                // @ts-ignore
                public read(dst: java.nio.ByteBuffer, attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
                /**
                 * Writes a sequence of bytes to this channel from the given buffer.
                 * <p> This method initiates an asynchronous write operation to write a
                 * sequence of bytes to this channel from the given buffer. The {@code
                 * handler} parameter is a completion handler that is invoked when the write
                 * operation completes (or fails). The result passed to the completion
                 * handler is the number of bytes written.
                 * <p> If a timeout is specified and the timeout elapses before the operation
                 * completes then it completes with the exception {@link
                 * InterruptedByTimeoutException}. Where a timeout occurs, and the
                 * implementation cannot guarantee that bytes have not been written, or will
                 * not be written to the channel from the given buffer, then further attempts
                 * to write to the channel will cause an unspecific runtime exception to be
                 * thrown.
                 * <p> Otherwise this method works in the same manner as the {@link
                 * AsynchronousByteChannel#write(ByteBuffer,Object,CompletionHandler)}
                 * method.
                 */
                // @ts-ignore
                public abstract write(src: java.nio.ByteBuffer, timeout: number, unit: java.util.concurrent.TimeUnit, attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
                // @ts-ignore
                public write(src: java.nio.ByteBuffer, attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
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
