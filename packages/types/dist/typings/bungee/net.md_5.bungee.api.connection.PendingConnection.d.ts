declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    // @ts-ignore
                    interface PendingConnection extends net.md_5.bungee.api.connection.Connection {
                        /**
                         * Get the requested username.
                         */
                        // @ts-ignore
                         getName(): string;
                        /**
                         * Get the numerical client version of the player attempting to log in.
                         */
                        // @ts-ignore
                         getVersion(): number;
                        /**
                         * Get the requested virtual host that the client tried to connect to.
                         */
                        // @ts-ignore
                         getVirtualHost(): java.net.InetSocketAddress;
                        /**
                         * Get the listener that accepted this connection.
                         */
                        // @ts-ignore
                         getListener(): any /*net.md_5.bungee.api.config.ListenerInfo*/;
                        /**
                         * Get this connection's UUID, if set.
                         */
                        // @ts-ignore
                         getUUID(): string;
                        /**
                         * Get this connection's UUID, if set.
                         */
                        // @ts-ignore
                         getUniqueId(): java.util.UUID;
                        /**
                         * Set the connection's uuid
                         */
                        // @ts-ignore
                         setUniqueId(uuid: java.util.UUID): void;
                        /**
                         * Get this connection's online mode.
                         * <br>
                         * See {@link #setOnlineMode(boolean)} for a description of how this option
                         * works.
                         */
                        // @ts-ignore
                         isOnlineMode(): boolean;
                        /**
                         * Set this connection's online mode.
                         * <br>
                         * May be called only during the PlayerHandshakeEvent to set the online mode
                         * configuration setting for this connection only (i.e. whether or not the
                         * client will be treated as if it is connecting to an online mode server).
                         */
                        // @ts-ignore
                         setOnlineMode(onlineMode: boolean): void;
                        /**
                         * Check if the client is using the older unsupported Minecraft protocol
                         * used by Minecraft clients older than 1.7.
                         */
                        // @ts-ignore
                         isLegacy(): boolean;
                    }
                }
            }
        }
    }
}
