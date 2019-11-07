// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerPickupItemEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, item: org.bukkit.entity.Item, remaining: number)
                    /**
                     * Gets the Item picked up by the player.
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.entity.Item;
                    /**
                     * Gets the amount remaining on the ground, if any
                     */
                    // @ts-ignore
                    public getRemaining(): number;
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
