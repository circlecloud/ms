// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    // @ts-ignore
                    interface RecipeRegistry extends org.spongepowered.api.registry.CatalogRegistryModule {
                        /**
                         * Registers the given {@link Recipe} to make it available to craft.
                         */
                        // @ts-ignore
                         register(recipe: org.spongepowered.api.item.recipe.Recipe): void;
                        /**
                         * Retrieves all recipes registered in this registry.
                         */
                        // @ts-ignore
                         getRecipes(): java.util.Collection;
                    }
                }
            }
        }
    }
}
