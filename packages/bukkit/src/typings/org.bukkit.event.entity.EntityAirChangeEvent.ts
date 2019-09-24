declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityAirChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.Entity, amount: number)
                    /**
                     * Gets the amount of air the entity has left (measured in ticks).
                     */
                    public getAmount(): number;
                    /**
                     * Sets the amount of air remaining for the entity (measured in ticks.
                     */
                    public setAmount(amount: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
