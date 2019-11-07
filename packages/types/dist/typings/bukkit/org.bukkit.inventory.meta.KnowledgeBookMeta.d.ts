// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface KnowledgeBookMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the existence of recipes in the book.
                     */
                    // @ts-ignore
                     hasRecipes(): boolean;
                    /**
                     * Gets all the recipes in the book.
                     */
                    // @ts-ignore
                     getRecipes(): java.util.List;
                    /**
                     * Clears the existing book recipes, and sets the book to use the provided
                     * recipes.
                     */
                    // @ts-ignore
                     setRecipes(recipes: java.util.List): void;
                    /**
                     * Adds new recipe to the end of the book.
                     */
                    // @ts-ignore
                     addRecipe(recipes: org.bukkit.NamespacedKey): void;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.KnowledgeBookMeta;
                }
            }
        }
    }
}
