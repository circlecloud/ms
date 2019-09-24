declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerAnimationEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    /**
                     * Construct a new PlayerAnimation event
                     */
                    constructor(player: org.bukkit.entity.Player)
                    /**
                     * Get the type of this animation event
                     */
                    public getAnimationType(): org.bukkit.event.player.PlayerAnimationType;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
