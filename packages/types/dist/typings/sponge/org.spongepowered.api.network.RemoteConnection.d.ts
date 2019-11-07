// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                // @ts-ignore
                interface RemoteConnection {
                    /**
                     * Gets the {@link InetSocketAddress} of this connection.
                     */
                    // @ts-ignore
                     getAddress(): java.net.InetSocketAddress;
                    /**
                     * Gets the host name the connection is connecting to the server with.
                     * <p>Examples include: If a player is connecting to `mc.example.com`,
                     * the hostname will show `mc.example.com`. This is NOT the originating
                     * hostname of the client.</p>
                     */
                    // @ts-ignore
                     getVirtualHost(): java.net.InetSocketAddress;
                }
            }
        }
    }
}
