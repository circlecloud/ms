declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class ShapelessRecipe extends java.lang.Object implements cn.nukkit.inventory.CraftingRecipe {
                // @ts-ignore
                constructor(result: cn.nukkit.item.Item, ingredients: java.util.Collection)
                // @ts-ignore
                constructor(recipeId: string, priority: number, result: cn.nukkit.item.Item, ingredients: java.util.Collection)
                // @ts-ignore
                public getResult(): cn.nukkit.item.Item;
                // @ts-ignore
                public getRecipeId(): string;
                // @ts-ignore
                public getId(): java.util.UUID;
                // @ts-ignore
                public setId(uuid: java.util.UUID): void;
                // @ts-ignore
                public getIngredientList(): java.util.List;
                // @ts-ignore
                public getIngredientCount(): number;
                // @ts-ignore
                public registerToCraftingManager(manager: cn.nukkit.inventory.CraftingManager): void;
                // @ts-ignore
                public getType(): cn.nukkit.inventory.RecipeType;
                // @ts-ignore
                public requiresCraftingTable(): boolean;
                // @ts-ignore
                public getExtraResults(): java.util.List;
                // @ts-ignore
                public getAllResults(): java.util.List;
                // @ts-ignore
                public getPriority(): number;
                // @ts-ignore
                public matchItems(input: cn.nukkit.item.Item, output: cn.nukkit.item.Item): boolean;
            }
        }
    }
}
