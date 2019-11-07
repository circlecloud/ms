declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                // @ts-ignore
                abstract class SelectorProvider extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the system-wide default selector provider for this invocation of
                     * the Java virtual machine.
                     * <p> The first invocation of this method locates the default provider
                     * object as follows: </p>
                     * <ol>
                     * <li><p> If the system property
                     * <tt>java.nio.channels.spi.SelectorProvider</tt> is defined then it is
                     * taken to be the fully-qualified name of a concrete provider class.
                     * The class is loaded and instantiated; if this process fails then an
                     * unspecified error is thrown.  </p></li>
                     * <li><p> If a provider class has been installed in a jar file that is
                     * visible to the system class loader, and that jar file contains a
                     * provider-configuration file named
                     * <tt>java.nio.channels.spi.SelectorProvider</tt> in the resource
                     * directory <tt>META-INF/services</tt>, then the first class name
                     * specified in that file is taken.  The class is loaded and
                     * instantiated; if this process fails then an unspecified error is
                     * thrown.  </p></li>
                     * <li><p> Finally, if no provider has been specified by any of the above
                     * means then the system-default provider class is instantiated and the
                     * result is returned.  </p></li>
                     * </ol>
                     * <p> Subsequent invocations of this method return the provider that was
                     * returned by the first invocation.  </p>
                     */
                    // @ts-ignore
                    public static provider(): java.nio.channels.spi.SelectorProvider;
                    /**
                     * Opens a datagram channel.
                     */
                    // @ts-ignore
                    public abstract openDatagramChannel(): java.nio.channels.DatagramChannel;
                    /**
                     * Opens a pipe.
                     */
                    // @ts-ignore
                    public abstract openPipe(): java.nio.channels.Pipe;
                    /**
                     * Opens a selector.
                     */
                    // @ts-ignore
                    public abstract openSelector(): java.nio.channels.spi.AbstractSelector;
                    /**
                     * Opens a server-socket channel.
                     */
                    // @ts-ignore
                    public abstract openServerSocketChannel(): java.nio.channels.ServerSocketChannel;
                    /**
                     * Opens a socket channel.
                     */
                    // @ts-ignore
                    public abstract openSocketChannel(): java.nio.channels.SocketChannel;
                    /**
                     * Returns the channel inherited from the entity that created this
                     * Java virtual machine.
                     * <p> On many operating systems a process, such as a Java virtual
                     * machine, can be started in a manner that allows the process to
                     * inherit a channel from the entity that created the process. The
                     * manner in which this is done is system dependent, as are the
                     * possible entities to which the channel may be connected. For example,
                     * on UNIX systems, the Internet services daemon (<i>inetd</i>) is used to
                     * start programs to service requests when a request arrives on an
                     * associated network port. In this example, the process that is started,
                     * inherits a channel representing a network socket.
                     * <p> In cases where the inherited channel represents a network socket
                     * then the {@link java.nio.channels.Channel Channel} type returned
                     * by this method is determined as follows:
                     * <ul>
                     * <li><p> If the inherited channel represents a stream-oriented connected
                     * socket then a {@link java.nio.channels.SocketChannel SocketChannel} is
                     * returned. The socket channel is, at least initially, in blocking
                     * mode, bound to a socket address, and connected to a peer.
                     * </p></li>
                     * <li><p> If the inherited channel represents a stream-oriented listening
                     * socket then a {@link java.nio.channels.ServerSocketChannel
                     * ServerSocketChannel} is returned. The server-socket channel is, at
                     * least initially, in blocking mode, and bound to a socket address.
                     * </p></li>
                     * <li><p> If the inherited channel is a datagram-oriented socket
                     * then a {@link java.nio.channels.DatagramChannel DatagramChannel} is
                     * returned. The datagram channel is, at least initially, in blocking
                     * mode, and bound to a socket address.
                     * </p></li>
                     * </ul>
                     * <p> In addition to the network-oriented channels described, this method
                     * may return other kinds of channels in the future.
                     * <p> The first invocation of this method creates the channel that is
                     * returned. Subsequent invocations of this method return the same
                     * channel. </p>
                     */
                    // @ts-ignore
                    public inheritedChannel(): java.nio.channels.Channel;
                }
            }
        }
    }
}
