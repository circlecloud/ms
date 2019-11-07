declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class PlayerLeashEntityEvent extends org.bukkit.event.Event implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, leashHolder: org.bukkit.entity.Entity, leasher: org.bukkit.entity.Player)
                    /**
                     * Returns the entity that is holding the leash.
                     */
                    // @ts-ignore
                    public getLeashHolder(): org.bukkit.entity.Entity;
                    /**
                     * Returns the entity being leashed.
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Entity;
                    /**
                     * Returns the player involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
