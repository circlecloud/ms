declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerVelocityEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(player: org.bukkit.entity.Player, velocity: org.bukkit.util.Vector)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the velocity vector that will be sent to the player
                     */
                    public getVelocity(): org.bukkit.util.Vector;
                    /**
                     * Sets the velocity vector that will be sent to the player
                     */
                    public setVelocity(velocity: org.bukkit.util.Vector): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
