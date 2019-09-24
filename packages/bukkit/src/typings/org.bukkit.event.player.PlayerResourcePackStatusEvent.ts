declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerResourcePackStatusEvent extends org.bukkit.event.player.PlayerEvent {
                    constructor(who: org.bukkit.entity.Player, resourcePackStatus: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status)
                    /**
                     * Gets the status of this pack.
                     */
                    public getStatus(): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
