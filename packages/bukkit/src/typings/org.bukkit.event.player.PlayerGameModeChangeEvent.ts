declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerGameModeChangeEvent {
                    constructor(player: org.bukkit.entity.Player, newGameMode: org.bukkit.GameMode)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the GameMode the player is switched to.
                     */
                    public getNewGameMode(): org.bukkit.GameMode;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
