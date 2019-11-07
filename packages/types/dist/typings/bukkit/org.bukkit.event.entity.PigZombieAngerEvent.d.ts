declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class PigZombieAngerEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(pigZombie: org.bukkit.entity.PigZombie, target: org.bukkit.entity.Entity, newAnger: number)
                    /**
                     * Gets the entity (if any) which triggered this anger update.
                     */
                    // @ts-ignore
                    public getTarget(): org.bukkit.entity.Entity;
                    /**
                     * Gets the new anger resulting from this event.
                     */
                    // @ts-ignore
                    public getNewAnger(): number;
                    /**
                     * Sets the new anger resulting from this event.
                     */
                    // @ts-ignore
                    public setNewAnger(newAnger: number): void;
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.PigZombie;
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
