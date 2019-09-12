declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerAdvancementDoneEvent {
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
