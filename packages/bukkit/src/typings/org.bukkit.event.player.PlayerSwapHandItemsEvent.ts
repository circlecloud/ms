declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerSwapHandItemsEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(player: org.bukkit.entity.Player, mainHandItem: org.bukkit.inventory.ItemStack, offHandItem: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item switched to the main hand.
                     */
                    public getMainHandItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Sets the item in the main hand.
                     */
                    public setMainHandItem(mainHandItem: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets the item switched to the off hand.
                     */
                    public getOffHandItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Sets the item in the off hand.
                     */
                    public setOffHandItem(offHandItem: org.bukkit.inventory.ItemStack): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
