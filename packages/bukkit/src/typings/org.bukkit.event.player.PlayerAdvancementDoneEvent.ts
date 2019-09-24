declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerAdvancementDoneEvent extends org.bukkit.event.player.PlayerEvent {
                    constructor(who: org.bukkit.entity.Player, advancement: org.bukkit.advancement.Advancement)
                    /**
                     * Get the advancement which has been completed.
                     */
                    public getAdvancement(): org.bukkit.advancement.Advancement;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
