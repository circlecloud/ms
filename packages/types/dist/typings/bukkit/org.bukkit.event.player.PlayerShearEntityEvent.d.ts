// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerShearEntityEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, what: org.bukkit.entity.Entity)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the entity the player is shearing
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Entity;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
