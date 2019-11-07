declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
             class MerchantRecipe extends java.lang.Object implements org.bukkit.inventory.Recipe {
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, maxUses: number)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, uses: number, maxUses: number, experienceReward: boolean)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number)
                // @ts-ignore
                public getResult(): org.bukkit.inventory.ItemStack;
                // @ts-ignore
                public addIngredient(item: org.bukkit.inventory.ItemStack): void;
                // @ts-ignore
                public removeIngredient(index: number): void;
                // @ts-ignore
                public setIngredients(ingredients: java.util.List): void;
                // @ts-ignore
                public getIngredients(): java.util.List;
                /**
                 * Get the number of times this trade has been used.
                 */
                // @ts-ignore
                public getUses(): number;
                /**
                 * Set the number of times this trade has been used.
                 */
                // @ts-ignore
                public setUses(uses: number): void;
                /**
                 * Get the maximum number of uses this trade has.
                 * <br>
                 * The maximum uses of this trade may increase when a player trades with the
                 * owning merchant.
                 */
                // @ts-ignore
                public getMaxUses(): number;
                /**
                 * Set the maximum number of uses this trade has.
                 */
                // @ts-ignore
                public setMaxUses(maxUses: number): void;
                /**
                 * Whether to reward experience to the player for the trade.
                 */
                // @ts-ignore
                public hasExperienceReward(): boolean;
                /**
                 * Set whether to reward experience to the player for the trade.
                 */
                // @ts-ignore
                public setExperienceReward(flag: boolean): void;
                /**
                 * Gets the amount of experience the villager earns from this trade.
                 */
                // @ts-ignore
                public getVillagerExperience(): number;
                /**
                 * Sets the amount of experience the villager earns from this trade.
                 */
                // @ts-ignore
                public setVillagerExperience(villagerExperience: number): void;
                /**
                 * Gets the additive price multiplier for the cost of this trade.
                 */
                // @ts-ignore
                public getPriceMultiplier(): number;
                /**
                 * Sets the additive price multiplier for the cost of this trade.
                 */
                // @ts-ignore
                public setPriceMultiplier(priceMultiplier: number): void;
            }
        }
    }
}
