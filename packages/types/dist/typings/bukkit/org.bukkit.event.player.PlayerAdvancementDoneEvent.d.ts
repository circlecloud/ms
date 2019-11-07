declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerAdvancementDoneEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, advancement: org.bukkit.advancement.Advancement)
                    /**
                     * Get the advancement which has been completed.
                     */
                    // @ts-ignore
                    public getAdvancement(): org.bukkit.advancement.Advancement;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
