declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerItemBreakEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, brokenItem: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item that broke
                     */
                    // @ts-ignore
                    public getBrokenItem(): org.bukkit.inventory.ItemStack;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
