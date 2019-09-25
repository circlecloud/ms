declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    namespace query {
                        namespace QueryServerEvent {
                            // @ts-ignore
                            interface Full extends org.spongepowered.api.event.server.query.QueryServerEvent.Basic {
                                /**
                                 * Gets the GameId to respond with.
                                 * <p>This is currently hardcoded to <code>MINECRAFT</code>.</p>
                                 */
                                // @ts-ignore
                                 getGameId(): string;
                                /**
                                 * Gets the version to respond with.
                                 * <p>By default, this is the server's Minecraft version (e.g 1.8.1).
                                 * </p>
                                 */
                                // @ts-ignore
                                 getVersion(): string;
                                /**
                                 * Sets the version to respond with.
                                 * <p>If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 setVersion(version: string): void;
                                /**
                                 * Gets the list of plugins to respond with.
                                 */
                                // @ts-ignore
                                 getPlugins(): string;
                                /**
                                 * Sets the list of plugins to respond with.
                                 * <p>If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 setPlugins(plugins: string): void;
                                /**
                                 * Gets the map of custom keys and values to respond with.
                                 * <p>If settings any of the keys or values causes the message
                                 * to go over the maximum size, the message will be automatically
                                 * truncated.</p>
                                 */
                                // @ts-ignore
                                 getCustomValuesMap(): Map<any, any> /*java.util.Map*/;
                                /**
                                 * Gets the list of player names to respond with.
                                 */
                                // @ts-ignore
                                 getPlayers(): any[] /*java.util.List*/;
                            }
                        }
                    }
                }
            }
        }
    }
}
