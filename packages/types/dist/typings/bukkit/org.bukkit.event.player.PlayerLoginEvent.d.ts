// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerLoginEvent extends org.bukkit.event.player.PlayerEvent {
                    /**
                     * This constructor defaults message to an empty string, and result to
                     * ALLOWED
                     */
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, hostname: string, address: java.net.InetAddress)
                    /**
                     * This constructor pre-configures the event with a result and message
                     */
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, hostname: string, address: java.net.InetAddress, result: org.bukkit.event.player.PlayerLoginEvent.Result, message: string)
                    /**
                     * Gets the current result of the login, as an enum
                     */
                    // @ts-ignore
                    public getResult(): org.bukkit.event.player.PlayerLoginEvent.Result;
                    /**
                     * Sets the new result of the login, as an enum
                     */
                    // @ts-ignore
                    public setResult(result: org.bukkit.event.player.PlayerLoginEvent.Result): void;
                    /**
                     * Gets the current kick message that will be used if getResult() !=
                     * Result.ALLOWED
                     */
                    // @ts-ignore
                    public getKickMessage(): string;
                    /**
                     * Sets the kick message to display if getResult() != Result.ALLOWED
                     */
                    // @ts-ignore
                    public setKickMessage(message: string): void;
                    /**
                     * Gets the hostname that the player used to connect to the server, or
                     * blank if unknown
                     */
                    // @ts-ignore
                    public getHostname(): string;
                    /**
                     * Allows the player to log in
                     */
                    // @ts-ignore
                    public allow(): void;
                    /**
                     * Disallows the player from logging in, with the given reason
                     */
                    // @ts-ignore
                    public disallow(result: org.bukkit.event.player.PlayerLoginEvent.Result, message: string): void;
                    /**
                     * Gets the {@link InetAddress} for the Player associated with this event.
                     * This method is provided as a workaround for player.getAddress()
                     * returning null during PlayerLoginEvent.
                     */
                    // @ts-ignore
                    public getAddress(): java.net.InetAddress;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
