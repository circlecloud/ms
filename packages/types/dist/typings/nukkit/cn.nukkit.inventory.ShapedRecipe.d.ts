declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class ShapedRecipe extends java.lang.Object implements cn.nukkit.inventory.CraftingRecipe {
                // @ts-ignore
                constructor(primaryResult: cn.nukkit.item.Item, shape: string, ingredients: java.util.Map, extraResults: java.util.List)
                /**
                 * Constructs a ShapedRecipe instance.
                 */
                // @ts-ignore
                constructor(recipeId: string, priority: number, primaryResult: cn.nukkit.item.Item, shape: string, ingredients: java.util.Map, extraResults: java.util.List)
                // @ts-ignore
                public getWidth(): number;
                // @ts-ignore
                public getHeight(): number;
                // @ts-ignore
                public getResult(): cn.nukkit.item.Item;
                // @ts-ignore
                public getRecipeId(): string;
                // @ts-ignore
                public getId(): java.util.UUID;
                // @ts-ignore
                public setId(uuid: java.util.UUID): void;
                // @ts-ignore
                public setIngredient(key: string, item: cn.nukkit.item.Item): cn.nukkit.inventory.ShapedRecipe;
                // @ts-ignore
                public setIngredient(key: string, item: cn.nukkit.item.Item): cn.nukkit.inventory.ShapedRecipe;
                // @ts-ignore
                public getIngredientList(): java.util.List;
                // @ts-ignore
                public getIngredientMap(): java.util.Map;
                // @ts-ignore
                public getIngredient(x: number, y: number): cn.nukkit.item.Item;
                // @ts-ignore
                public getShape(): java.lang.String[];
                // @ts-ignore
                public registerToCraftingManager(manager: cn.nukkit.inventory.CraftingManager): void;
                // @ts-ignore
                public getType(): cn.nukkit.inventory.RecipeType;
                // @ts-ignore
                public getExtraResults(): java.util.List;
                // @ts-ignore
                public getAllResults(): java.util.List;
                // @ts-ignore
                public getPriority(): number;
                // @ts-ignore
                public matchItems(input: cn.nukkit.item.Item, output: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public requiresCraftingTable(): boolean;
            }
        }
    }
}
