declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class ServerListPingEvent extends org.bukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(address: java.net.InetAddress, motd: string, numPlayers: number, maxPlayers: number)
                    /**
                     * This constructor is intended for implementations that provide the
                     * {@link #iterator()} method, thus provided the {@link #getNumPlayers()}
                     * count.
                     */
                    // @ts-ignore
                    constructor(address: java.net.InetAddress, motd: string, maxPlayers: number)
                    /**
                     * Get the address the ping is coming from.
                     */
                    // @ts-ignore
                    public getAddress(): java.net.InetAddress;
                    /**
                     * Get the message of the day message.
                     */
                    // @ts-ignore
                    public getMotd(): string;
                    /**
                     * Change the message of the day message.
                     */
                    // @ts-ignore
                    public setMotd(motd: string): void;
                    /**
                     * Get the number of players sent.
                     */
                    // @ts-ignore
                    public getNumPlayers(): number;
                    /**
                     * Get the maximum number of players sent.
                     */
                    // @ts-ignore
                    public getMaxPlayers(): number;
                    /**
                     * Set the maximum number of players sent.
                     */
                    // @ts-ignore
                    public setMaxPlayers(maxPlayers: number): void;
                    /**
                     * Sets the server-icon sent to the client.
                     */
                    // @ts-ignore
                    public setServerIcon(icon: org.bukkit.util.CachedServerIcon): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Calling the {@link Iterator#remove()} method will force that particular
                     * player to not be displayed on the player list, decrease the size
                     * returned by {@link #getNumPlayers()}, and will not be returned again by
                     * any new iterator.
                     */
                    // @ts-ignore
                    public iterator(): java.util.Iterator;
                }
            }
        }
    }
}
