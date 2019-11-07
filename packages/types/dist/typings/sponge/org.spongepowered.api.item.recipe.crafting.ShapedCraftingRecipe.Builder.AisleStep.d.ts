declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            namespace Builder {
                                // @ts-ignore
                                interface AisleStep extends org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder {
                                    /**
                                     * Sets an ingredient based on the aisle pattern.
                                     * <p>Sets the ingredient to {@link Ingredient#NONE} if
                                     * {@code null} is specified.</p>
                                     */
                                    // @ts-ignore
                                     where(symbol: string, ingredient: org.spongepowered.api.item.recipe.crafting.Ingredient): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.AisleStep.ResultStep;
                                    /**
                                     * Sets multiple ingredients based on the aisle pattern.
                                     */
                                    // @ts-ignore
                                     where(ingredientMap: java.util.Map): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.AisleStep.ResultStep;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
