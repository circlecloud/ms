declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                interface ReconnectHandler {
                    /**
                     * Gets the initial server name for a connecting player.
                     */
                    // @ts-ignore
                     getServer(player: any /*net.md_5.bungee.api.connection.ProxiedPlayer*/): any /*net.md_5.bungee.api.config.ServerInfo*/;
                    /**
                     * Save the server of this player before they disconnect so it can be
                     * retrieved later.
                     */
                    // @ts-ignore
                     setServer(player: any /*net.md_5.bungee.api.connection.ProxiedPlayer*/): void;
                    /**
                     * Save all pending reconnect locations. Whilst not used for database
                     * connections, this method will be called at a predefined interval to allow
                     * the saving of reconnect files.
                     */
                    // @ts-ignore
                     save(): void;
                    /**
                     * Close all connections indicating that the proxy is about to shutdown and
                     * all data should be saved. No new requests will be made after this method
                     * has been called.
                     */
                    // @ts-ignore
                     close(): void;
                }
            }
        }
    }
}
