declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerQuitEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, quitMessage: string)
                    /**
                     * Gets the quit message to send to all online players
                     */
                    // @ts-ignore
                    public getQuitMessage(): string;
                    /**
                     * Sets the quit message to send to all online players
                     */
                    // @ts-ignore
                    public setQuitMessage(quitMessage: string): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
