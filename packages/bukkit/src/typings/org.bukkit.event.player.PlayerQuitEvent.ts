declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerQuitEvent {
                    constructor(who: org.bukkit.entity.Player, quitMessage: string)
                    /**
                     * Gets the quit message to send to all online players
                     */
                    public getQuitMessage(): string;
                    /**
                     * Sets the quit message to send to all online players
                     */
                    public setQuitMessage(quitMessage: string): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
