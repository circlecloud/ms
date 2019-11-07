declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Start building a new recipe based on the aisle pattern.
                                 * <p>Use {@link AisleStep#where} to assign ingredients to characters
                                 * of the aisles.</p>
                                 * <p>The space character will be defaulted to {@link Ingredient#NONE}
                                 * if not specified.</p>
                                 * <p>Any other not assigned characters will cause an Exception
                                 * when {@link EndStep#build}ing the Recipe.</p>
                                 */
                                // @ts-ignore
                                 aisle(aisle: string): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.AisleStep;
                                /**
                                 * Start building a new recipe with ingredients based on rows.
                                 * After this call {@link RowsStep#row} for each row of your recipe.
                                 */
                                // @ts-ignore
                                 rows(): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.RowsStep;
                            }
                        }
                    }
                }
            }
        }
    }
}
