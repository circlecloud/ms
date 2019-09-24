declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class ServerListPingEvent {
                    constructor(address: any, motd: string, numPlayers: number, maxPlayers: number)
                    /**
                     * This constructor is intended for implementations that provide the
                     * {@link #iterator()} method, thus provided the {@link #getNumPlayers()}
                     * count.
                     */
                    constructor(address: any, motd: string, maxPlayers: number)
                    /**
                     * Get the address the ping is coming from.
                     */
                    public getAddress(): any;
                    /**
                     * Get the message of the day message.
                     */
                    public getMotd(): string;
                    /**
                     * Change the message of the day message.
                     */
                    public setMotd(motd: string): void;
                    /**
                     * Get the number of players sent.
                     */
                    public getNumPlayers(): number;
                    /**
                     * Get the maximum number of players sent.
                     */
                    public getMaxPlayers(): number;
                    /**
                     * Set the maximum number of players sent.
                     */
                    public setMaxPlayers(maxPlayers: number): void;
                    /**
                     * Sets the server-icon sent to the client.
                     */
                    public setServerIcon(icon: org.bukkit.util.CachedServerIcon): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Calling the {@link Iterator#remove()} method will force that particular
                     * player to not be displayed on the player list, decrease the size
                     * returned by {@link #getNumPlayers()}, and will not be returned again by
                     * any new iterator.
                     */
                    public iterator(): any;
                }
            }
        }
    }
}
