declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerLevelChangeEvent {
                    constructor(player: org.bukkit.entity.Player, oldLevel: number, newLevel: number)
                    /**
                     * Gets the old level of the player
                     */
                    public getOldLevel(): number;
                    /**
                     * Gets the new level of the player
                     */
                    public getNewLevel(): number;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
