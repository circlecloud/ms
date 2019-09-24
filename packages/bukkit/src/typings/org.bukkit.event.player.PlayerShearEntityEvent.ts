declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerShearEntityEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(who: org.bukkit.entity.Player, what: org.bukkit.entity.Entity)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the entity the player is shearing
                     */
                    public getEntity(): org.bukkit.entity.Entity;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
