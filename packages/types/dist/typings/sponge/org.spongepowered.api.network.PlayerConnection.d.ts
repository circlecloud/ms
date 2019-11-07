declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                // @ts-ignore
                interface PlayerConnection extends org.spongepowered.api.network.RemoteConnection {
                    /**
                     * Gets the associated {@link Player} for this connection.
                     */
                    // @ts-ignore
                     getPlayer(): org.spongepowered.api.entity.living.player.Player;
                    /**
                     * Gets the connection latency. This is constantly calculated by the server.
                     */
                    // @ts-ignore
                     getLatency(): number;
                }
            }
        }
    }
}
