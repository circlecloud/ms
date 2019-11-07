// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        // @ts-ignore
                        interface SmeltingRecipe extends org.spongepowered.api.item.recipe.Recipe, org.spongepowered.api.CatalogType {
                            /**
                             * Builds a simple furnace recipe. Note, that you can implement the
                             * {@link SmeltingRecipe} manually, too.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder;
                            // @ts-ignore
                             getId(): string;
                            // @ts-ignore
                             getName(): string;
                            /**
                             * An exemplary {@link ItemStackSnapshot}, which will always make
                             * {@link #isValid(ItemStackSnapshot)} return {@code true}.
                             */
                            // @ts-ignore
                             getExemplaryIngredient(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                            /**
                             * Checks if the given {@link ItemStackSnapshot} fits the required
                             * constraints to craft this {@link SmeltingRecipe}.
                             */
                            // @ts-ignore
                             isValid(ingredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): boolean;
                            /**
                             * <p>Returns the {@link SmeltingResult} containing the resulting
                             * {@link ItemStackSnapshot} and the amount of experience released.</p>
                             * <p>This method should be used instead of the {@link #getExemplaryResult()}
                             * method, as it customizes the result further depending on the specified
                             * ingredient {@link ItemStackSnapshot}. It is advised to use
                             * the output of {@link #getExemplaryResult()}, modify it accordingly,
                             * and {@code return} it.</p>
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
