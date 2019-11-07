declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class AsyncPlayerPreLoginEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(name: string, ipAddress: java.net.InetAddress)
                    // @ts-ignore
                    constructor(name: string, ipAddress: java.net.InetAddress, uniqueId: java.util.UUID)
                    /**
                     * Gets the current result of the login, as an enum
                     */
                    // @ts-ignore
                    public getLoginResult(): org.bukkit.event.player.AsyncPlayerPreLoginEvent.Result;
                    /**
                     * Gets the current result of the login, as an enum
                     */
                    // @ts-ignore
                    public getResult(): org.bukkit.event.player.PlayerPreLoginEvent.Result;
                    /**
                     * Sets the new result of the login, as an enum
                     */
                    // @ts-ignore
                    public setLoginResult(result: org.bukkit.event.player.AsyncPlayerPreLoginEvent.Result): void;
                    /**
                     * Sets the new result of the login, as an enum
                     */
                    // @ts-ignore
                    public setResult(result: org.bukkit.event.player.PlayerPreLoginEvent.Result): void;
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
                     * Allows the player to log in
                     */
                    // @ts-ignore
                    public allow(): void;
                    /**
                     * Disallows the player from logging in, with the given reason
                     */
                    // @ts-ignore
                    public disallow(result: org.bukkit.event.player.AsyncPlayerPreLoginEvent.Result, message: string): void;
                    /**
                     * Disallows the player from logging in, with the given reason
                     */
                    // @ts-ignore
                    public disallow(result: org.bukkit.event.player.PlayerPreLoginEvent.Result, message: string): void;
                    /**
                     * Gets the player's name.
                     */
                    // @ts-ignore
                    public getName(): string;
                    /**
                     * Gets the player IP address.
                     */
                    // @ts-ignore
                    public getAddress(): java.net.InetAddress;
                    /**
                     * Gets the player's unique ID.
                     */
                    // @ts-ignore
                    public getUniqueId(): java.util.UUID;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
