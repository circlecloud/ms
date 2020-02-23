declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class FurnaceRecipe extends java.lang.Object implements cn.nukkit.inventory.Recipe {
                // @ts-ignore
                constructor(result: cn.nukkit.item.Item, ingredient: cn.nukkit.item.Item)
                // @ts-ignore
                public setInput(item: cn.nukkit.item.Item): void;
                // @ts-ignore
                public getInput(): cn.nukkit.item.Item;
                // @ts-ignore
                public getResult(): cn.nukkit.item.Item;
                // @ts-ignore
                public registerToCraftingManager(manager: cn.nukkit.inventory.CraftingManager): void;
                // @ts-ignore
                public getType(): cn.nukkit.inventory.RecipeType;
            }
        }
    }
}
