declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    namespace query {
                        namespace QueryServerEvent {
                            // @ts-ignore
                            interface Basic extends org.spongepowered.api.event.server.query.QueryServerEvent {
                                /**
                                 * Gets the MOTD to respond with.
                                 * <p>By default, this is the server's current MOTD</p>
                                 */
                                // @ts-ignore
                                 getMotd(): string;
                                /**
                                 * Sets the MOTD to respond with.
                                 * <p>If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 setMotd(motd: string): void;
                                /**
                                 * Gets the GameType to respond with.
                                 * <p>By default, this is <code>SMP</code>.
                                 * If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 getGameType(): string;
                                /**
                                 * Sets the GameType to respond with.
                                 * <p>If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 setGameType(gameType: string): void;
                                /**
                                 * Gets the map (world) to respond with.
                                 * <p>By default, this is the current world on the server.</p>
                                 */
                                // @ts-ignore
                                 getMap(): string;
                                /**
                                 * Sets the map (world) to respond with.
                                 * <p>If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 setMap(map: string): void;
                                /**
                                 * Gets the player count to respond with.
                                 * <p>By default, this is the number of players present on the server.
                                 * If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 getPlayerCount(): number;
                                /**
                                 * Sets the player count to respond with.
                                 * <p>If setting the int causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 setPlayerCount(playerCount: number): void;
                                /**
                                 * Gets the max player count to respond with.
                                 * <p>By default, this is the maximum number of players allowed on the
                                 * server.</p>
                                 */
                                // @ts-ignore
                                 getMaxPlayerCount(): number;
                                /**
                                 * Sets the max player count to respond with.
                                 * <p>If setting the int causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 */
                                // @ts-ignore
                                 setMaxPlayerCount(maxPlayerCount: number): void;
                                /**
                                 * Gets the address to respond with.
                                 * <p>By default, this is the address the server is listening on.</p>
                                 */
                                // @ts-ignore
                                 getAddress(): java.net.InetSocketAddress;
                                /**
                                 * Sets the address to respond with.
                                 */
                                // @ts-ignore
                                 setAddress(address: java.net.InetSocketAddress): void;
                                /**
                                 * Gets the current size of the data to respond with.
                                 * <p>This value is implementation-defined - it is only meaningful when
                                 * compared with {@link #getMaxSize()}.</p>
                                 */
                                // @ts-ignore
                                 getSize(): number;
                                /**
                                 * Gets the maximum size of the data to respond with.
                                 * <p>If the size of the data is greater than the returned value,
                                 * it will be automatically truncated.
                                 * This value is implementation-defined - it is only meaningful when
                                 * compared with {@link #getSize()} ()}.</p>
                                 */
                                // @ts-ignore
                                 getMaxSize(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}
