// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        // @ts-ignore
                        interface Ingredient {
                            // @ts-ignore
                             NONE: org.spongepowered.api.item.recipe.crafting.Ingredient;
                            // @ts-ignore
                             test(itemStack: org.spongepowered.api.item.inventory.ItemStack): boolean;
                            /**
                             * Returns the list of {@link ItemStack}s used to display the ingredient in a recipe.
                             * These are not necessarily all the items that this Ingredient can match.
                             */
                            // @ts-ignore
                             displayedItems(): java.util.List;
                            /**
                             * Creates a new {@link Builder} to build an {@link Ingredient}.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                            /**
                             * Creates a new {@link Ingredient} for the provided {@link ItemStackSnapshot}s.
                             */
                            // @ts-ignore
                             of(snapshots: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.crafting.Ingredient;
                            /**
                             * Creates a new {@link Ingredient} for the provided {@link ItemStack}s.
                             */
                            // @ts-ignore
                             of(itemStacks: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.recipe.crafting.Ingredient;
                            /**
                             * Creates a new {@link Ingredient} for the provided {@link ItemType}s.
                             */
                            // @ts-ignore
                             of(itemTypes: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.recipe.crafting.Ingredient;
                            /**
                             * Creates a new {@link Ingredient} for the provided
                             * {@link org.spongepowered.api.GameDictionary.Entry}s.
                             */
                            // @ts-ignore
                             of(entries: org.spongepowered.api.GameDictionary.Entry): org.spongepowered.api.item.recipe.crafting.Ingredient;
                        }
                    }
                }
            }
        }
    }
}
