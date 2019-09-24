declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerChangedMainHandEvent extends org.bukkit.event.player.PlayerEvent {
                    constructor(who: org.bukkit.entity.Player, mainHand: org.bukkit.inventory.MainHand)
                    /**
                     * Gets the new main hand of the player. The old hand is still momentarily
                     * available via {@link Player#getMainHand()}.
                     */
                    public getMainHand(): org.bukkit.inventory.MainHand;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
