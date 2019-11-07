declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerChangedMainHandEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, mainHand: org.bukkit.inventory.MainHand)
                    /**
                     * Gets the new main hand of the player. The old hand is still momentarily
                     * available via {@link Player#getMainHand()}.
                     */
                    // @ts-ignore
                    public getMainHand(): org.bukkit.inventory.MainHand;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
