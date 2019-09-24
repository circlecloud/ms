declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerToggleSneakEvent implements org.bukkit.event.Cancellable {
                    constructor(player: org.bukkit.entity.Player, isSneaking: boolean)
                    /**
                     * Returns whether the player is now sneaking or not.
                     */
                    public isSneaking(): boolean;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
