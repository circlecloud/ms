declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerJoinEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(playerJoined: org.bukkit.entity.Player, joinMessage: string)
                    /**
                     * Gets the join message to send to all online players
                     */
                    // @ts-ignore
                    public getJoinMessage(): string;
                    /**
                     * Sets the join message to send to all online players
                     */
                    // @ts-ignore
                    public setJoinMessage(joinMessage: string): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
