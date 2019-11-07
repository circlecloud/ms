// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        namespace SmeltingRecipe {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Changes the ingredient predicate and returns this builder.
                                 * The ingredient predicate is the predicate which must return
                                 * {@code true} in order for this recipe to be fulfilled.
                                 */
                                // @ts-ignore
                                 ingredient(ingredientPredicate: java.util.function$.Predicate, exemplaryIngredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.ResultStep;
                                /**
                                 * Changes the ingredient predicate and returns this builder.
                                 * The ingredient predicate is the predicate which must return
                                 * {@code true} in order for this recipe to be fulfilled.
                                 * <p>The vanilla {@link ItemStack} matching behavior is used as the
                                 * ingredient predicate.</p>
                                 */
                                // @ts-ignore
                                 ingredient(ingredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.ResultStep;
                                /**
                                 * Changes the ingredient and returns this builder. The ingredient is
                                 * the {@link ItemStack} required in order for the recipe to be
                                 * fulfilled.
                                 */
                                // @ts-ignore
                                 ingredient(ingredient: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.ResultStep;
                                /**
                                 * Changes the ingredient and returns this builder. The ingredient is
                                 * the {@link ItemStack} required in order for the recipe to be
                                 * fulfilled.
                                 */
                                // @ts-ignore
                                 ingredient(ingredient: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.ResultStep;
                            }
                        }
                    }
                }
            }
        }
    }
}
