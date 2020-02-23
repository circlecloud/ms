declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            interface Recipe {
                // @ts-ignore
                 getResult(): cn.nukkit.item.Item;
                // @ts-ignore
                 registerToCraftingManager(manager: cn.nukkit.inventory.CraftingManager): void;
                // @ts-ignore
                 getType(): cn.nukkit.inventory.RecipeType;
            }
        }
    }
}
