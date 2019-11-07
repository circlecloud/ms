declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            namespace Builder {
                                // @ts-ignore
                                interface EndStep extends org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder, org.spongepowered.api.util.CatalogBuilder {
                                    /**
                                     * Sets the group of the recipe.
                                     */
                                    // @ts-ignore
                                     group(name: string): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep;
                                    // @ts-ignore
                                     id(id: string): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep;
                                    // @ts-ignore
                                     name(name: string): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep;
                                    // @ts-ignore
                                     name(name: org.spongepowered.api.text.translation.Translation): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep;
                                    /**
                                     * Builds a {@link ShapedCraftingRecipe} from this builder.
                                     */
                                    // @ts-ignore
                                     build(id: string, plugin: java.lang.Object): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
