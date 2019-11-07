declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        // @ts-ignore
                        interface CraftingRecipeRegistry extends org.spongepowered.api.item.recipe.RecipeRegistry {
                            /**
                             * Retrieves the recipe which would be crafted when the player clicks
                             * the output slot.
                             */
                            // @ts-ignore
                             findMatchingRecipe(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory, world: org.spongepowered.api.world.World): java.util.Optional;
                            /**
                             * Finds the matching recipe and creates the {@link CraftingResult},
                             * which is then returned.
                             */
                            // @ts-ignore
                             getResult(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory, world: org.spongepowered.api.world.World): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
