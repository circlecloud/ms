declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerTakeLecternBookEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, lectern: org.bukkit.block.Lectern)
                    /**
                     * Gets the lectern involved.
                     */
                    // @ts-ignore
                    public getLectern(): org.bukkit.block.Lectern;
                    /**
                     * Gets the current ItemStack on the lectern.
                     */
                    // @ts-ignore
                    public getBook(): org.bukkit.inventory.ItemStack;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
