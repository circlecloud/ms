declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityPickupItemEvent implements org.bukkit.event.Cancellable {
                    constructor(entity: org.bukkit.entity.LivingEntity, item: org.bukkit.entity.Item, remaining: number)
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the Item picked up by the entity.
                     */
                    public getItem(): org.bukkit.entity.Item;
                    /**
                     * Gets the amount remaining on the ground, if any
                     */
                    public getRemaining(): number;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
