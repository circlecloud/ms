declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class VillagerReplenishTradeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.AbstractVillager, recipe: org.bukkit.inventory.MerchantRecipe, bonus: number)
                    /**
                     * Get the recipe to replenish.
                     */
                    public getRecipe(): org.bukkit.inventory.MerchantRecipe;
                    /**
                     * Set the recipe to replenish.
                     */
                    public setRecipe(recipe: org.bukkit.inventory.MerchantRecipe): void;
                    /**
                     * Get the bonus uses added. The maximum uses of the recipe will be
                     * increased by this number.
                     */
                    public getBonus(): number;
                    /**
                     * Set the bonus uses added.
                     */
                    public setBonus(bonus: number): void;
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
