declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class VillagerAcquireTradeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.AbstractVillager, recipe: org.bukkit.inventory.MerchantRecipe)
                    /**
                     * Get the recipe to be acquired.
                     */
                    // @ts-ignore
                    public getRecipe(): org.bukkit.inventory.MerchantRecipe;
                    /**
                     * Set the recipe to be acquired.
                     */
                    // @ts-ignore
                    public setRecipe(recipe: org.bukkit.inventory.MerchantRecipe): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.AbstractVillager;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
