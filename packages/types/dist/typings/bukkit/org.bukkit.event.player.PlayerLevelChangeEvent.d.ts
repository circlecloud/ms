declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerLevelChangeEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, oldLevel: number, newLevel: number)
                    /**
                     * Gets the old level of the player
                     */
                    // @ts-ignore
                    public getOldLevel(): number;
                    /**
                     * Gets the new level of the player
                     */
                    // @ts-ignore
                    public getNewLevel(): number;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
