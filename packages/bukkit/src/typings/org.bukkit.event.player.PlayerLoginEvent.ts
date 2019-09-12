declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerLoginEvent {
                    /**
                     * This constructor defaults message to an empty string, and result to
                     * ALLOWED
                     */
                    constructor(player: org.bukkit.entity.Player, hostname: string, address: any)
                    /**
                     * This constructor pre-configures the event with a result and message
                     */
                    constructor(player: org.bukkit.entity.Player, hostname: string, address: any, result: org.bukkit.event.player.PlayerLoginEvent.Result, message: string)
                    /**
                     * Gets the current result of the login, as an enum
                     */
                    public getResult(): org.bukkit.event.player.PlayerLoginEvent.Result;
                    /**
                     * Sets the new result of the login, as an enum
                     */
                    public setResult(result: org.bukkit.event.player.PlayerLoginEvent.Result): void;
                    /**
                     * Gets the current kick message that will be used if getResult() !=
                     * Result.ALLOWED
                     */
                    public getKickMessage(): string;
                    /**
                     * Sets the kick message to display if getResult() != Result.ALLOWED
                     */
                    public setKickMessage(message: string): void;
                    /**
                     * Gets the hostname that the player used to connect to the server, or
                     * blank if unknown
                     */
                    public getHostname(): string;
                    /**
                     * Allows the player to log in
                     */
                    public allow(): void;
                    /**
                     * Disallows the player from logging in, with the given reason
                     */
                    public disallow(result: org.bukkit.event.player.PlayerLoginEvent.Result, message: string): void;
                    /**
                     * Gets the {@link InetAddress} for the Player associated with this event.
                     * This method is provided as a workaround for player.getAddress()
                     * returning null during PlayerLoginEvent.
                     */
                    public getAddress(): any;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
