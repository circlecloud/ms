declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class PigZombieAngerEvent {
                    constructor(pigZombie: org.bukkit.entity.PigZombie, target: org.bukkit.entity.Entity, newAnger: number)
                    /**
                     * Gets the entity (if any) which triggered this anger update.
                     */
                    public getTarget(): org.bukkit.entity.Entity;
                    /**
                     * Gets the new anger resulting from this event.
                     */
                    public getNewAnger(): number;
                    /**
                     * Sets the new anger resulting from this event.
                     */
                    public setNewAnger(newAnger: number): void;
                    public getEntity(): org.bukkit.entity.PigZombie;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
