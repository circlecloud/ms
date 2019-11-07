// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerAnimationEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    /**
                     * Construct a new PlayerAnimation event
                     */
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player)
                    /**
                     * Get the type of this animation event
                     */
                    // @ts-ignore
                    public getAnimationType(): org.bukkit.event.player.PlayerAnimationType;
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
