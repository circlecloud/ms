declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityAirChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, amount: number)
                    /**
                     * Gets the amount of air the entity has left (measured in ticks).
                     */
                    // @ts-ignore
                    public getAmount(): number;
                    /**
                     * Sets the amount of air remaining for the entity (measured in ticks.
                     */
                    // @ts-ignore
                    public setAmount(amount: number): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
