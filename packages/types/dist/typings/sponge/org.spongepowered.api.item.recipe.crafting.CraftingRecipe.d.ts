// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        // @ts-ignore
                        interface CraftingRecipe extends org.spongepowered.api.item.recipe.Recipe, org.spongepowered.api.CatalogType {
                            /**
                             * Checks if the given {@link CraftingGridInventory} fits the required
                             * constraints to craft this {@link CraftingGridInventory}.
                             */
                            // @ts-ignore
                             isValid(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory, world: org.spongepowered.api.world.World): boolean;
                            /**
                             * This method should only be called if
                             * {@link #isValid(CraftingGridInventory, World)} returns {@code true}.
                             * <p>This method is preferred over the
                             * {@link CraftingRecipe#getExemplaryResult()} method, as it customizes
                             * the result further depending on the context.</p>
                             * <p>Implementing classes are advised to use the output of
                             * {@link CraftingRecipe#getExemplaryResult()}, modify it accordingly,
                             * and {@code return} it.</p>
                             */
                            // @ts-ignore
                             getResult(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                            /**
                             * Returns the {@link CraftingResult} for the current crafting grid
                             * configuration and the {@link World} the player is in.
                             * <p>Returns
                             * {@link Optional#empty()} if the arguments do not satisfy
                             * {@link #isValid(CraftingGridInventory, World)}.</p>
                             */
                            // @ts-ignore
                             getResult(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory, world: org.spongepowered.api.world.World): java.util.Optional;
                            /**
                             * This method should only be called if
                             * {@link #isValid(CraftingGridInventory, World)} returns {@code true}.
                             * <p>A list of items to be added to the inventory of the player when they
                             * craft the result. For example, if a player crafts a
                             * {@link ItemTypes#CAKE}, the empty buckets are returned to their
                             * inventory.</p>
                             */
                            // @ts-ignore
                             getRemainingItems(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory): java.util.List;
                            /**
                             * The group this CraftingRecipe belongs to or {@link Optional#empty()}
                             * if not defined.
                             */
                            // @ts-ignore
                             getGroup(): java.util.Optional;
                            /**
                             * Provides a Builder for a {@link ShapedCraftingRecipe}.
                             */
                            // @ts-ignore
                             shapedBuilder(): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder;
                            /**
                             * Provides a Builder for a {@link ShapelessCraftingRecipe}.
                             */
                            // @ts-ignore
                             shapelessBuilder(): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder;
                        }
                    }
                }
            }
        }
    }
}
