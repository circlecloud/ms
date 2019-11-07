declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        // @ts-ignore
                        interface SmeltingRecipeRegistry extends org.spongepowered.api.item.recipe.RecipeRegistry {
                            /**
                             * Retrieves the recipe used when smelting the given ingredient.
                             */
                            // @ts-ignore
                             findMatchingRecipe(ingredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): java.util.Optional;
                            /**
                             * Finds the matching recipe and creates the {@link SmeltingResult},
                             * which is then returned.
                             */
                            // @ts-ignore
                             getResult(ingredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
