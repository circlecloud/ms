declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class CraftingManager extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public recipes: java.util.Collection;
                // @ts-ignore
                public static packet: cn.nukkit.network.protocol.BatchPacket;
                // @ts-ignore
                protected shapedRecipes: java.util.Map;
                // @ts-ignore
                public furnaceRecipes: java.util.Map;
                // @ts-ignore
                public brewingRecipes: java.util.Map;
                // @ts-ignore
                public containerRecipes: java.util.Map;
                // @ts-ignore
                protected shapelessRecipes: java.util.Map;
                // @ts-ignore
                public static recipeComparator: java.util.Comparator;
                // @ts-ignore
                public rebuildPacket(): void;
                // @ts-ignore
                public getRecipes(): java.util.Collection;
                // @ts-ignore
                public getFurnaceRecipes(): java.util.Map;
                // @ts-ignore
                public matchFurnaceRecipe(input: cn.nukkit.item.Item): cn.nukkit.inventory.FurnaceRecipe;
                // @ts-ignore
                public registerFurnaceRecipe(recipe: cn.nukkit.inventory.FurnaceRecipe): void;
                // @ts-ignore
                public registerShapedRecipe(recipe: cn.nukkit.inventory.ShapedRecipe): void;
                // @ts-ignore
                public registerRecipe(recipe: cn.nukkit.inventory.Recipe): void;
                // @ts-ignore
                public registerShapelessRecipe(recipe: cn.nukkit.inventory.ShapelessRecipe): void;
                // @ts-ignore
                public registerBrewingRecipe(recipe: cn.nukkit.inventory.BrewingRecipe): void;
                // @ts-ignore
                public registerContainerRecipe(recipe: cn.nukkit.inventory.ContainerRecipe): void;
                // @ts-ignore
                public matchBrewingRecipe(input: cn.nukkit.item.Item, potion: cn.nukkit.item.Item): cn.nukkit.inventory.BrewingRecipe;
                // @ts-ignore
                public matchContainerRecipe(input: cn.nukkit.item.Item, potion: cn.nukkit.item.Item): cn.nukkit.inventory.ContainerRecipe;
                // @ts-ignore
                public matchRecipe(inputMap: cn.nukkit.item.Item, primaryOutput: cn.nukkit.item.Item, extraOutputMap: cn.nukkit.item.Item): cn.nukkit.inventory.CraftingRecipe;
            }
        }
    }
}
