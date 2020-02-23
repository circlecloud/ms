declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerAchievementAwardedEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, achievementId: string)
                    // @ts-ignore
                    protected achievement: string;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getAchievement(): string;
                }
            }
        }
    }
}
