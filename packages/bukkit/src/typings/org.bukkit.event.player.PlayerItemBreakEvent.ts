declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerItemBreakEvent {
                    constructor(player: org.bukkit.entity.Player, brokenItem: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item that broke
                     */
                    public getBrokenItem(): org.bukkit.inventory.ItemStack;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
