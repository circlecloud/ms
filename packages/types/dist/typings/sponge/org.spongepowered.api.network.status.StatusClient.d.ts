// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace status {
                    // @ts-ignore
                    interface StatusClient {
                        /**
                         * Gets the address of the client.
                         */
                        // @ts-ignore
                         getAddress(): java.net.InetSocketAddress;
                        /**
                         * Gets the game version of the client.
                         */
                        // @ts-ignore
                         getVersion(): org.spongepowered.api.MinecraftVersion;
                        /**
                         * Gets the address the player is connecting to.
                         */
                        // @ts-ignore
                         getVirtualHost(): java.util.Optional;
                    }
                }
            }
        }
    }
}
