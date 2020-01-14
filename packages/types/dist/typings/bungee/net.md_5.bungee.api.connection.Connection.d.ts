declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    // @ts-ignore
                    interface Connection {
                        /**
                         * Gets the remote address of this connection.
                         */
                        // @ts-ignore
                         getAddress(): java.net.InetSocketAddress;
                        /**
                         * Disconnects this end of the connection for the specified reason. If this
                         * is an {@link ProxiedPlayer} the respective server connection will be
                         * closed too.
                         */
                        // @ts-ignore
                         disconnect(reason: string): void;
                        /**
                         * Disconnects this end of the connection for the specified reason. If this
                         * is an {@link ProxiedPlayer} the respective server connection will be
                         * closed too.
                         */
                        // @ts-ignore
                         disconnect(reason: BaseComponent): void;
                        /**
                         * Disconnects this end of the connection for the specified reason. If this
                         * is an {@link ProxiedPlayer} the respective server connection will be
                         * closed too.
                         */
                        // @ts-ignore
                         disconnect(reason: BaseComponent): void;
                        /**
                         * Gets whether this connection is currently open, ie: not disconnected, and
                         * able to send / receive data.
                         */
                        // @ts-ignore
                         isConnected(): boolean;
                        /**
                         * Get the unsafe methods of this class.
                         */
                        // @ts-ignore
                         unsafe(): any /*net.md_5.bungee.api.connection.Connection.Unsafe*/;
                    }
                }
            }
        }
    }
}
