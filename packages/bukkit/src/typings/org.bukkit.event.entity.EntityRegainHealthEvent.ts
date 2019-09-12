declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityRegainHealthEvent {
                    constructor(entity: org.bukkit.entity.Entity, amount: number, regainReason: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason)
                    /**
                     * Gets the amount of regained health
                     */
                    public getAmount(): number;
                    /**
                     * Sets the amount of regained health
                     */
                    public setAmount(amount: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the reason for why the entity is regaining health
                     */
                    public getRegainReason(): org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
