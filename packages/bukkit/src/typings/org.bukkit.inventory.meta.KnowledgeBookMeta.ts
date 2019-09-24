declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface KnowledgeBookMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the existence of recipes in the book.
                     */
                     hasRecipes(): boolean;
                    /**
                     * Gets all the recipes in the book.
                     */
                     getRecipes(): any[] /*java.util.List*/;
                    /**
                     * Clears the existing book recipes, and sets the book to use the provided
                     * recipes.
                     */
                     setRecipes(recipes: any[] /*java.util.List*/): void;
                    /**
                     * Adds new recipe to the end of the book.
                     */
                     addRecipe(recipes: org.bukkit.NamespacedKey): void;
                     clone(): org.bukkit.inventory.meta.KnowledgeBookMeta;
                }
            }
        }
    }
}
