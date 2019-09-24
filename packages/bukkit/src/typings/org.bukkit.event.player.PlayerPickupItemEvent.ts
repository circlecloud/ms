declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerPickupItemEvent implements org.bukkit.event.Cancellable {
                    constructor(player: org.bukkit.entity.Player, item: org.bukkit.entity.Item, remaining: number)
                    /**
                     * Gets the Item picked up by the player.
                     */
                    public getItem(): org.bukkit.entity.Item;
                    /**
                     * Gets the amount remaining on the ground, if any
                     */
                    public getRemaining(): number;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
