declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class PlayerLeashEntityEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.Entity, leashHolder: org.bukkit.entity.Entity, leasher: org.bukkit.entity.Player)
                    /**
                     * Returns the entity that is holding the leash.
                     */
                    public getLeashHolder(): org.bukkit.entity.Entity;
                    /**
                     * Returns the entity being leashed.
                     */
                    public getEntity(): org.bukkit.entity.Entity;
                    /**
                     * Returns the player involved in this event
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
