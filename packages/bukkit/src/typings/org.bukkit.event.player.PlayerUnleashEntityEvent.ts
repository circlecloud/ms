declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerUnleashEntityEvent {
                    constructor(entity: org.bukkit.entity.Entity, player: org.bukkit.entity.Player)
                    /**
                     * Returns the player who is unleashing the entity.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
