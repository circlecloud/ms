declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class VillagerReplenishTradeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.AbstractVillager, recipe: org.bukkit.inventory.MerchantRecipe, bonus: number)
                    /**
                     * Get the recipe to replenish.
                     */
                    // @ts-ignore
                    public getRecipe(): org.bukkit.inventory.MerchantRecipe;
                    /**
                     * Set the recipe to replenish.
                     */
                    // @ts-ignore
                    public setRecipe(recipe: org.bukkit.inventory.MerchantRecipe): void;
                    /**
                     * Get the bonus uses added. The maximum uses of the recipe will be
                     * increased by this number.
                     */
                    // @ts-ignore
                    public getBonus(): number;
                    /**
                     * Set the bonus uses added.
                     */
                    // @ts-ignore
                    public setBonus(bonus: number): void;
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
