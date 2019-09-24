declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerItemConsumeEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(player: org.bukkit.entity.Player, item: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item that is being consumed. Modifying the returned item will
                     * have no effect, you must use {@link
                     * #setItem(org.bukkit.inventory.ItemStack)} instead.
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Set the item being consumed
                     */
                    public setItem(item: org.bukkit.inventory.ItemStack): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
