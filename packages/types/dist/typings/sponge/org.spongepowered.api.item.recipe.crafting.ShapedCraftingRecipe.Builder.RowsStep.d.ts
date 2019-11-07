declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            namespace Builder {
                                // @ts-ignore
                                interface RowsStep extends org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder {
                                    /**
                                     * Adds a row of ingredients.
                                     */
                                    // @ts-ignore
                                     row(ingredients: org.spongepowered.api.item.recipe.crafting.Ingredient): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.RowsStep.ResultStep;
                                    /**
                                     * Adds a row of ingredients filling the skipped
                                     * columns with {@link Ingredient#NONE}.
                                     */
                                    // @ts-ignore
                                     row(skip: number, ingredients: org.spongepowered.api.item.recipe.crafting.Ingredient): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.RowsStep.ResultStep;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
