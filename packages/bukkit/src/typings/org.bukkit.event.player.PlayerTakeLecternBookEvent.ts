declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerTakeLecternBookEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(who: org.bukkit.entity.Player, lectern: org.bukkit.block.Lectern)
                    /**
                     * Gets the lectern involved.
                     */
                    public getLectern(): org.bukkit.block.Lectern;
                    /**
                     * Gets the current ItemStack on the lectern.
                     */
                    public getBook(): org.bukkit.inventory.ItemStack;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
