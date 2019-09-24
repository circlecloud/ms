declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerChangedWorldEvent extends org.bukkit.event.player.PlayerEvent {
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.World)
                    /**
                     * Gets the world the player is switching from.
                     */
                    public getFrom(): org.bukkit.World;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
