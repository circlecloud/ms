declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        namespace SmeltingRecipe {
                            namespace Builder {
                                // @ts-ignore
                                interface EndStep extends org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder, org.spongepowered.api.util.CatalogBuilder {
                                    /**
                                     * Changes the experience and returns this builder. It is the
                                     * required amount of experience the user must possess in order to
                                     * be able to fulfill the recipe.
                                     */
                                    // @ts-ignore
                                     experience(experience: number): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.EndStep;
                                    // @ts-ignore
                                     id(id: string): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.EndStep;
                                    // @ts-ignore
                                     name(name: string): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.EndStep;
                                    // @ts-ignore
                                     name(name: org.spongepowered.api.text.translation.Translation): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.EndStep;
                                    // @ts-ignore
                                     build(): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
