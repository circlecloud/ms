declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerUnleashEntityEvent implements org.bukkit.event.Cancellable {
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
