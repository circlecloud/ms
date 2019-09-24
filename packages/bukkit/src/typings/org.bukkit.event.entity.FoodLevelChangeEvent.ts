declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class FoodLevelChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.HumanEntity, level: number)
                    constructor(what: org.bukkit.entity.HumanEntity, level: number, item: org.bukkit.inventory.ItemStack)
                    public getEntity(): org.bukkit.entity.HumanEntity;
                    /**
                     * Gets the item that triggered this event, if any.
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the resultant food level that the entity involved in this event
                     * should be set to.
                     * <p>
                     * Where 20 is a full food bar and 0 is an empty one.
                     */
                    public getFoodLevel(): number;
                    /**
                     * Sets the resultant food level that the entity involved in this event
                     * should be set to
                     */
                    public setFoodLevel(level: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
