declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapelessCraftingRecipe {
                            namespace Builder {
                                // @ts-ignore
                                interface ResultStep extends org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder {
                                    /**
                                     * Changes the result and returns this builder. The result is the
                                     * {@link ItemStack} created when the recipe is fulfilled.
                                     */
                                    // @ts-ignore
                                     result(result: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.EndStep;
                                    /**
                                     * Changes the result and returns this builder. The result is the
                                     * {@link ItemStack} created when the recipe is fulfilled.
                                     */
                                    // @ts-ignore
                                     result(result: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.EndStep;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
