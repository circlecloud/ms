declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
             class MerchantRecipe implements org.bukkit.inventory.Recipe {
                constructor(result: org.bukkit.inventory.ItemStack, maxUses: number)
                constructor(result: org.bukkit.inventory.ItemStack, uses: number, maxUses: number, experienceReward: boolean)
                constructor(result: org.bukkit.inventory.ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number)
                public getResult(): org.bukkit.inventory.ItemStack;
                public addIngredient(item: org.bukkit.inventory.ItemStack): void;
                public removeIngredient(index: number): void;
                public setIngredients(ingredients: any[] /*java.util.List*/): void;
                public getIngredients(): any[] /*java.util.List*/;
                /**
                 * Get the number of times this trade has been used.
                 */
                public getUses(): number;
                /**
                 * Set the number of times this trade has been used.
                 */
                public setUses(uses: number): void;
                /**
                 * Get the maximum number of uses this trade has.
                 * <br>
                 * The maximum uses of this trade may increase when a player trades with the
                 * owning merchant.
                 */
                public getMaxUses(): number;
                /**
                 * Set the maximum number of uses this trade has.
                 */
                public setMaxUses(maxUses: number): void;
                /**
                 * Whether to reward experience to the player for the trade.
                 */
                public hasExperienceReward(): boolean;
                /**
                 * Set whether to reward experience to the player for the trade.
                 */
                public setExperienceReward(flag: boolean): void;
                /**
                 * Gets the amount of experience the villager earns from this trade.
                 */
                public getVillagerExperience(): number;
                /**
                 * Sets the amount of experience the villager earns from this trade.
                 */
                public setVillagerExperience(villagerExperience: number): void;
                /**
                 * Gets the additive price multiplier for the cost of this trade.
                 */
                public getPriceMultiplier(): number;
                /**
                 * Sets the additive price multiplier for the cost of this trade.
                 */
                public setPriceMultiplier(priceMultiplier: number): void;
            }
        }
    }
}
