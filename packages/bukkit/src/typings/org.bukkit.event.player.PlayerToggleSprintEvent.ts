declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerToggleSprintEvent {
                    constructor(player: org.bukkit.entity.Player, isSprinting: boolean)
                    /**
                     * Gets whether the player is now sprinting or not.
                     */
                    public isSprinting(): boolean;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
