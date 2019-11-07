declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class DatagramChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor(provider: java.nio.channels.spi.SelectorProvider)
                /**
                 * Opens a datagram channel.
                 * <p> The new channel is created by invoking the {@link
                 * java.nio.channels.spi.SelectorProvider#openDatagramChannel()
                 * openDatagramChannel} method of the system-wide default {@link
                 * java.nio.channels.spi.SelectorProvider} object.  The channel will not be
                 * connected.
                 * <p> The {@link ProtocolFamily ProtocolFamily} of the channel's socket
                 * is platform (and possibly configuration) dependent and therefore unspecified.
                 * The {@link #open(ProtocolFamily) open} allows the protocol family to be
                 * selected when opening a datagram channel, and should be used to open
                 * datagram channels that are intended for Internet Protocol multicasting.
                 */
                // @ts-ignore
                public static open(): java.nio.channels.DatagramChannel;
                /**
                 * Opens a datagram channel.
                 * <p> The {@code family} parameter is used to specify the {@link
                 * ProtocolFamily}. If the datagram channel is to be used for IP multicasting
                 * then this should correspond to the address type of the multicast groups
                 * that this channel will join.
                 * <p> The new channel is created by invoking the {@link
                 * java.nio.channels.spi.SelectorProvider#openDatagramChannel(ProtocolFamily)
                 * openDatagramChannel} method of the system-wide default {@link
                 * java.nio.channels.spi.SelectorProvider} object.  The channel will not be
                 * connected.
                 */
                // @ts-ignore
                public static open(family: java.net.ProtocolFamily): java.nio.channels.DatagramChannel;
                /**
                 * Returns an operation set identifying this channel's supported
                 * operations.
                 * <p> Datagram channels support reading and writing, so this method
                 * returns <tt>(</tt>{@link SelectionKey#OP_READ} <tt>|</tt>&nbsp;{@link
                 * SelectionKey#OP_WRITE}<tt>)</tt>.  </p>
                 */
                // @ts-ignore
                public validOps(): number;
                // @ts-ignore
                public abstract bind(local: java.net.SocketAddress): java.nio.channels.DatagramChannel;
                // @ts-ignore
                public abstract setOption(name: java.net.SocketOption, value: java.lang.Object): java.nio.channels.DatagramChannel;
                /**
                 * Retrieves a datagram socket associated with this channel.
                 * <p> The returned object will not declare any public methods that are not
                 * declared in the {@link java.net.DatagramSocket} class.  </p>
                 */
                // @ts-ignore
                public abstract socket(): java.net.DatagramSocket;
                /**
                 * Tells whether or not this channel's socket is connected.
                 */
                // @ts-ignore
                public abstract isConnected(): boolean;
                /**
                 * Connects this channel's socket.
                 * <p> The channel's socket is configured so that it only receives
                 * datagrams from, and sends datagrams to, the given remote <i>peer</i>
                 * address.  Once connected, datagrams may not be received from or sent to
                 * any other address.  A datagram socket remains connected until it is
                 * explicitly disconnected or until it is closed.
                 * <p> This method performs exactly the same security checks as the {@link
                 * java.net.DatagramSocket#connect connect} method of the {@link
                 * java.net.DatagramSocket} class.  That is, if a security manager has been
                 * installed then this method verifies that its {@link
                 * java.lang.SecurityManager#checkAccept checkAccept} and {@link
                 * java.lang.SecurityManager#checkConnect checkConnect} methods permit
                 * datagrams to be received from and sent to, respectively, the given
                 * remote address.
                 * <p> This method may be invoked at any time.  It will not have any effect
                 * on read or write operations that are already in progress at the moment
                 * that it is invoked. If this channel's socket is not bound then this method
                 * will first cause the socket to be bound to an address that is assigned
                 * automatically, as if invoking the {@link #bind bind} method with a
                 * parameter of {@code null}. </p>
                 */
                // @ts-ignore
                public abstract connect(remote: java.net.SocketAddress): java.nio.channels.DatagramChannel;
                /**
                 * Disconnects this channel's socket.
                 * <p> The channel's socket is configured so that it can receive datagrams
                 * from, and sends datagrams to, any remote address so long as the security
                 * manager, if installed, permits it.
                 * <p> This method may be invoked at any time.  It will not have any effect
                 * on read or write operations that are already in progress at the moment
                 * that it is invoked.
                 * <p> If this channel's socket is not connected, or if the channel is
                 * closed, then invoking this method has no effect.  </p>
                 */
                // @ts-ignore
                public abstract disconnect(): java.nio.channels.DatagramChannel;
                /**
                 * Returns the remote address to which this channel's socket is connected.
                 */
                // @ts-ignore
                public abstract getRemoteAddress(): java.net.SocketAddress;
                /**
                 * Receives a datagram via this channel.
                 * <p> If a datagram is immediately available, or if this channel is in
                 * blocking mode and one eventually becomes available, then the datagram is
                 * copied into the given byte buffer and its source address is returned.
                 * If this channel is in non-blocking mode and a datagram is not
                 * immediately available then this method immediately returns
                 * <tt>null</tt>.
                 * <p> The datagram is transferred into the given byte buffer starting at
                 * its current position, as if by a regular {@link
                 * ReadableByteChannel#read(java.nio.ByteBuffer) read} operation.  If there
                 * are fewer bytes remaining in the buffer than are required to hold the
                 * datagram then the remainder of the datagram is silently discarded.
                 * <p> This method performs exactly the same security checks as the {@link
                 * java.net.DatagramSocket#receive receive} method of the {@link
                 * java.net.DatagramSocket} class.  That is, if the socket is not connected
                 * to a specific remote address and a security manager has been installed
                 * then for each datagram received this method verifies that the source's
                 * address and port number are permitted by the security manager's {@link
                 * java.lang.SecurityManager#checkAccept checkAccept} method.  The overhead
                 * of this security check can be avoided by first connecting the socket via
                 * the {@link #connect connect} method.
                 * <p> This method may be invoked at any time.  If another thread has
                 * already initiated a read operation upon this channel, however, then an
                 * invocation of this method will block until the first operation is
                 * complete. If this channel's socket is not bound then this method will
                 * first cause the socket to be bound to an address that is assigned
                 * automatically, as if invoking the {@link #bind bind} method with a
                 * parameter of {@code null}. </p>
                 */
                // @ts-ignore
                public abstract receive(dst: java.nio.ByteBuffer): java.net.SocketAddress;
                /**
                 * Sends a datagram via this channel.
                 * <p> If this channel is in non-blocking mode and there is sufficient room
                 * in the underlying output buffer, or if this channel is in blocking mode
                 * and sufficient room becomes available, then the remaining bytes in the
                 * given buffer are transmitted as a single datagram to the given target
                 * address.
                 * <p> The datagram is transferred from the byte buffer as if by a regular
                 * {@link WritableByteChannel#write(java.nio.ByteBuffer) write} operation.
                 * <p> This method performs exactly the same security checks as the {@link
                 * java.net.DatagramSocket#send send} method of the {@link
                 * java.net.DatagramSocket} class.  That is, if the socket is not connected
                 * to a specific remote address and a security manager has been installed
                 * then for each datagram sent this method verifies that the target address
                 * and port number are permitted by the security manager's {@link
                 * java.lang.SecurityManager#checkConnect checkConnect} method.  The
                 * overhead of this security check can be avoided by first connecting the
                 * socket via the {@link #connect connect} method.
                 * <p> This method may be invoked at any time.  If another thread has
                 * already initiated a write operation upon this channel, however, then an
                 * invocation of this method will block until the first operation is
                 * complete. If this channel's socket is not bound then this method will
                 * first cause the socket to be bound to an address that is assigned
                 * automatically, as if by invoking the {@link #bind bind} method with a
                 * parameter of {@code null}. </p>
                 */
                // @ts-ignore
                public abstract send(src: java.nio.ByteBuffer, target: java.net.SocketAddress): number;
                /**
                 * Reads a datagram from this channel.
                 * <p> This method may only be invoked if this channel's socket is
                 * connected, and it only accepts datagrams from the socket's peer.  If
                 * there are more bytes in the datagram than remain in the given buffer
                 * then the remainder of the datagram is silently discarded.  Otherwise
                 * this method behaves exactly as specified in the {@link
                 * ReadableByteChannel} interface.  </p>
                 */
                // @ts-ignore
                public abstract read(dst: java.nio.ByteBuffer): number;
                /**
                 * Reads a datagram from this channel.
                 * <p> This method may only be invoked if this channel's socket is
                 * connected, and it only accepts datagrams from the socket's peer.  If
                 * there are more bytes in the datagram than remain in the given buffers
                 * then the remainder of the datagram is silently discarded.  Otherwise
                 * this method behaves exactly as specified in the {@link
                 * ScatteringByteChannel} interface.  </p>
                 */
                // @ts-ignore
                public read(dsts: java.nio.ByteBuffer): number;
                /**
                 * Writes a datagram to this channel.
                 * <p> This method may only be invoked if this channel's socket is
                 * connected, in which case it sends datagrams directly to the socket's
                 * peer.  Otherwise it behaves exactly as specified in the {@link
                 * WritableByteChannel} interface.  </p>
                 */
                // @ts-ignore
                public abstract write(src: java.nio.ByteBuffer): number;
                /**
                 * Writes a datagram to this channel.
                 * <p> This method may only be invoked if this channel's socket is
                 * connected, in which case it sends datagrams directly to the socket's
                 * peer.  Otherwise it behaves exactly as specified in the {@link
                 * GatheringByteChannel} interface.  </p>
                 */
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
