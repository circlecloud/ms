declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            abstract class MixRecipe extends java.lang.Object implements cn.nukkit.inventory.Recipe {
                // @ts-ignore
                constructor(input: cn.nukkit.item.Item, ingredient: cn.nukkit.item.Item, output: cn.nukkit.item.Item)
                // @ts-ignore
                public getIngredient(): cn.nukkit.item.Item;
                // @ts-ignore
                public getInput(): cn.nukkit.item.Item;
                // @ts-ignore
                public getResult(): cn.nukkit.item.Item;
            }
        }
    }
}
