declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class KnowledgeBookMeta {
                    /**
                     * Checks for the existence of recipes in the book.
                     */
                    public hasRecipes(): boolean;
                    /**
                     * Gets all the recipes in the book.
                     */
                    public getRecipes(): any[] /*java.util.List*/;
                    /**
                     * Clears the existing book recipes, and sets the book to use the provided
                     * recipes.
                     */
                    public setRecipes(recipes: any[] /*java.util.List*/): void;
                    /**
                     * Adds new recipe to the end of the book.
                     */
                    public addRecipe(recipes: org.bukkit.NamespacedKey): void;
                    public clone(): org.bukkit.inventory.meta.KnowledgeBookMeta;
                }
            }
        }
    }
}
