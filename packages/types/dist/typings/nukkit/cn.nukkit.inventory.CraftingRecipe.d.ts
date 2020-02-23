declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            interface CraftingRecipe extends cn.nukkit.inventory.Recipe {
                // @ts-ignore
                 getRecipeId(): string;
                // @ts-ignore
                 getId(): java.util.UUID;
                // @ts-ignore
                 setId(id: java.util.UUID): void;
                // @ts-ignore
                 requiresCraftingTable(): boolean;
                // @ts-ignore
                 getExtraResults(): java.util.List;
                // @ts-ignore
                 getAllResults(): java.util.List;
                // @ts-ignore
                 getPriority(): number;
                /**
                 * Returns whether the specified list of crafting grid inputs and outputs matches this recipe. Outputs DO NOT
                 * include the primary result item.
                 */
                // @ts-ignore
                 matchItems(input: cn.nukkit.item.Item, output: cn.nukkit.item.Item): boolean;
            }
        }
    }
}
