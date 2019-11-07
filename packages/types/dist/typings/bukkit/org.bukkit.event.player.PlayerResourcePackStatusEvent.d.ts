// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerResourcePackStatusEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, resourcePackStatus: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status)
                    /**
                     * Gets the status of this pack.
                     */
                    // @ts-ignore
                    public getStatus(): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
