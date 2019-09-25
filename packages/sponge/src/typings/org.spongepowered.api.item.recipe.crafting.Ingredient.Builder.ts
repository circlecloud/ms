declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace Ingredient {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Adds a predicate for matching the ingredient.
                                 * <p>Also clears all previously set {@link #withDisplay} items.</p>
                                 * <p>All predicates and items are ORed together.</p>
                                 * <p>Use {@link #from} to create an ingredient from another one.</p>
                                 */
                                // @ts-ignore
                                 with(predicate: any): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                                /**
                                 * Adds a GameDictionary Entry as Predicate for matching the ingredient.
                                 * Also clears all previously set {@link #withDisplay} items and then
                                 * adds {@link org.spongepowered.api.GameDictionary.Entry#getTemplate()}
                                 * to it.
                                 * <p>All predicates and items are ORed together.</p>
                                 */
                                // @ts-ignore
                                 with(entry: org.spongepowered.api.GameDictionary.Entry): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                                /**
                                 * Adds one or more ItemTypes for matching the ingredient.
                                 * The ItemTypes are also used as display items.
                                 * All predicates and items are ORed together.
                                 */
                                // @ts-ignore
                                 with(types: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                                /**
                                 * Adds one or more ItemStacks for matching the ingredient.
                                 * The ItemStacks are also used as display items.
                                 * All predicates and items are ORed together.
                                 */
                                // @ts-ignore
                                 with(items: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                                /**
                                 * Adds one or more ItemStackSnapshots for matching the ingredient.
                                 * The Snapshots are also used as display items.
                                 * All predicates and items are ORed together.
                                 */
                                // @ts-ignore
                                 with(items: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                                /**
                                 * Adds ItemTypes used to display this Ingredient in a recipe.
                                 * These are not used for matching the recipe.
                                 */
                                // @ts-ignore
                                 withDisplay(types: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                                /**
                                 * Adds ItemStacks used to display this Ingredient in a recipe.
                                 * These are not used for matching the recipe.
                                 */
                                // @ts-ignore
                                 withDisplay(items: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                                /**
                                 * Adds ItemStackSnasphots used to display this Ingredient in a recipe.
                                 * These are not used for matching the recipe.
                                 */
                                // @ts-ignore
                                 withDisplay(items: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder;
                                /**
                                 * Builds the {@link Ingredient} with the specified items and or predicates.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.item.recipe.crafting.Ingredient;
                            }
                        }
                    }
                }
            }
        }
    }
}
