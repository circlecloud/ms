declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerToggleFlightEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(player: org.bukkit.entity.Player, isFlying: boolean)
                    /**
                     * Returns whether the player is trying to start or stop flying.
                     */
                    public isFlying(): boolean;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
