declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface NetworkChannel {
                /**
                 * Binds the channel's socket to a local address.
                 * <p> This method is used to establish an association between the socket and
                 * a local address. Once an association is established then the socket remains
                 * bound until the channel is closed. If the {@code local} parameter has the
                 * value {@code null} then the socket will be bound to an address that is
                 * assigned automatically.
                 */
                // @ts-ignore
                 bind(local: java.net.SocketAddress): java.nio.channels.NetworkChannel;
                /**
                 * Returns the socket address that this channel's socket is bound to.
                 * <p> Where the channel is {@link #bind bound} to an Internet Protocol
                 * socket address then the return value from this method is of type {@link
                 * java.net.InetSocketAddress}.
                 */
                // @ts-ignore
                 getLocalAddress(): java.net.SocketAddress;
                /**
                 * Sets the value of a socket option.
                 */
                // @ts-ignore
                 setOption(name: java.net.SocketOption, value: java.lang.Object): java.nio.channels.NetworkChannel;
                /**
                 * Returns the value of a socket option.
                 */
                // @ts-ignore
                 getOption(name: java.net.SocketOption): java.lang.Object;
                /**
                 * Returns a set of the socket options supported by this channel.
                 * <p> This method will continue to return the set of options even after the
                 * channel has been closed.
                 */
                // @ts-ignore
                 supportedOptions(): java.util.Set;
            }
        }
    }
}
