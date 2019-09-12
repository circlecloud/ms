declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerTakeLecternBookEvent {
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
