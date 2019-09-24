declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerRiptideEvent extends org.bukkit.event.player.PlayerEvent {
                    constructor(who: org.bukkit.entity.Player, item: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item containing the used enchantment.
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
