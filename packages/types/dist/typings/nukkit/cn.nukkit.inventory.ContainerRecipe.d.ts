declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class ContainerRecipe extends cn.nukkit.inventory.MixRecipe {
                // @ts-ignore
                constructor(input: cn.nukkit.item.Item, ingredient: cn.nukkit.item.Item, output: cn.nukkit.item.Item)
                // @ts-ignore
                public registerToCraftingManager(manager: cn.nukkit.inventory.CraftingManager): void;
                // @ts-ignore
                public getType(): cn.nukkit.inventory.RecipeType;
            }
        }
    }
}
