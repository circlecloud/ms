declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class VillagerAcquireTradeEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.AbstractVillager, recipe: org.bukkit.inventory.MerchantRecipe)
                    /**
                     * Get the recipe to be acquired.
                     */
                    public getRecipe(): org.bukkit.inventory.MerchantRecipe;
                    /**
                     * Set the recipe to be acquired.
                     */
                    public setRecipe(recipe: org.bukkit.inventory.MerchantRecipe): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.AbstractVillager;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
