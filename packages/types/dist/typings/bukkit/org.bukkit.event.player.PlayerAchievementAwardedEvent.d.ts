declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerAchievementAwardedEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, achievement: org.bukkit.Achievement)
                    /**
                     * Gets the Achievement being awarded.
                     */
                    // @ts-ignore
                    public getAchievement(): org.bukkit.Achievement;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
