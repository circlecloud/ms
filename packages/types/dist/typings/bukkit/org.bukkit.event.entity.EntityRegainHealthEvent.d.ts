declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityRegainHealthEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, amount: number, regainReason: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason)
                    /**
                     * Gets the amount of regained health
                     */
                    // @ts-ignore
                    public getAmount(): number;
                    /**
                     * Sets the amount of regained health
                     */
                    // @ts-ignore
                    public setAmount(amount: number): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the reason for why the entity is regaining health
                     */
                    // @ts-ignore
                    public getRegainReason(): org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
