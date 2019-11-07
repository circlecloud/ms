declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityPickupItemEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, item: org.bukkit.entity.Item, remaining: number)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the Item picked up by the entity.
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.entity.Item;
                    /**
                     * Gets the amount remaining on the ground, if any
                     */
                    // @ts-ignore
                    public getRemaining(): number;
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
