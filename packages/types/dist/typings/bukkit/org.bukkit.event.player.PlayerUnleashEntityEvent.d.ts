// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerUnleashEntityEvent extends org.bukkit.event.entity.EntityUnleashEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, player: org.bukkit.entity.Player)
                    /**
                     * Returns the player who is unleashing the entity.
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
