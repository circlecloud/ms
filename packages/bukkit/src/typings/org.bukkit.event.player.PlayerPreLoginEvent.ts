declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerPreLoginEvent {
                    constructor(name: string, ipAddress: any)
                    constructor(name: string, ipAddress: any, uniqueId: any)
                    /**
                     * Gets the current result of the login, as an enum
                     */
                    public getResult(): org.bukkit.event.player.PlayerPreLoginEvent.Result;
                    /**
                     * Sets the new result of the login, as an enum
                     */
                    public setResult(result: org.bukkit.event.player.PlayerPreLoginEvent.Result): void;
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
                     * Allows the player to log in
                     */
                    public allow(): void;
                    /**
                     * Disallows the player from logging in, with the given reason
                     */
                    public disallow(result: org.bukkit.event.player.PlayerPreLoginEvent.Result, message: string): void;
                    /**
                     * Gets the player's name.
                     */
                    public getName(): string;
                    /**
                     * Gets the player IP address.
                     */
                    public getAddress(): any;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    /**
                     * Gets the player's unique ID.
                     */
                    public getUniqueId(): any;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
