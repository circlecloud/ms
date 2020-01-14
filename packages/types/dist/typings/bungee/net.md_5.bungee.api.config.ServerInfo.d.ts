declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace config {
                    // @ts-ignore
                    interface ServerInfo {
                        /**
                         * Get the name of this server.
                         */
                        // @ts-ignore
                         getName(): string;
                        /**
                         * Gets the connectable host + port pair for this server. Implementations
                         * expect this to be used as the unique identifier per each instance of this
                         * class.
                         */
                        // @ts-ignore
                         getAddress(): java.net.InetSocketAddress;
                        /**
                         * Get the set of all players on this server.
                         */
                        // @ts-ignore
                         getPlayers(): java.util.Collection;
                        /**
                         * Returns the MOTD which should be used when this server is a forced host.
                         */
                        // @ts-ignore
                         getMotd(): string;
                        /**
                         * Whether this server is restricted and therefore only players with the
                         * given permission can access it.
                         */
                        // @ts-ignore
                         isRestricted(): boolean;
                        /**
                         * Get the permission required to access this server. Only enforced when the
                         * server is restricted.
                         */
                        // @ts-ignore
                         getPermission(): string;
                        /**
                         * Whether the player can access this server. It will only return false when
                         * the player has no permission and this server is restricted.
                         */
                        // @ts-ignore
                         canAccess(sender: any /*net.md_5.bungee.api.CommandSender*/): boolean;
                        /**
                         * Send data by any available means to this server. This data may be queued
                         * and there is no guarantee of its timely arrival.
                         * In recent Minecraft versions channel names must contain a colon separator
                         * and consist of [a-z0-9/._-]. This will be enforced in a future version.
                         * The "BungeeCord" channel is an exception and may only take this form.
                         */
                        // @ts-ignore
                         sendData(channel: string, data: number): void;
                        /**
                         * Send data by any available means to this server.
                         * In recent Minecraft versions channel names must contain a colon separator
                         * and consist of [a-z0-9/._-]. This will be enforced in a future version.
                         * The "BungeeCord" channel is an exception and may only take this form.
                         */
                        // @ts-ignore
                         sendData(channel: string, data: number, queue: boolean): boolean;
                        /**
                         * Asynchronously gets the current player count on this server.
                         */
                        // @ts-ignore
                         ping(callback: any /*net.md_5.bungee.api.Callback*/): void;
                    }
                }
            }
        }
    }
}
