// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerVelocityEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, velocity: org.bukkit.util.Vector)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the velocity vector that will be sent to the player
                     */
                    // @ts-ignore
                    public getVelocity(): org.bukkit.util.Vector;
                    /**
                     * Sets the velocity vector that will be sent to the player
                     */
                    // @ts-ignore
                    public setVelocity(velocity: org.bukkit.util.Vector): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
