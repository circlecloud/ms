declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerJoinEvent {
                    constructor(playerJoined: org.bukkit.entity.Player, joinMessage: string)
                    /**
                     * Gets the join message to send to all online players
                     */
                    public getJoinMessage(): string;
                    /**
                     * Sets the join message to send to all online players
                     */
                    public setJoinMessage(joinMessage: string): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
