declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerAchievementAwardedEvent {
                    constructor(player: org.bukkit.entity.Player, achievement: org.bukkit.Achievement)
                    /**
                     * Gets the Achievement being awarded.
                     */
                    public getAchievement(): org.bukkit.Achievement;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
