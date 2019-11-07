declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        // @ts-ignore
                        interface ShapedCraftingRecipe extends org.spongepowered.api.item.recipe.crafting.CraftingRecipe {
                            /**
                             * Creates a new {@link ShapedCraftingRecipe.Builder} to build a {@link ShapedCraftingRecipe}.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder;
                            /**
                             * Returns the ingredient predicate at the specified location in this
                             * recipe.
                             */
                            // @ts-ignore
                             getIngredient(x: number, y: number): org.spongepowered.api.item.recipe.crafting.Ingredient;
                            /**
                             * Gets the width of the grid this ShapedCraftingRecipe fits into.
                             */
                            // @ts-ignore
                             getWidth(): number;
                            /**
                             * Gets the height of the grid this ShapedCraftingRecipe fits into.
                             */
                            // @ts-ignore
                             getHeight(): number;
                        }
                    }
                }
            }
        }
    }
}
