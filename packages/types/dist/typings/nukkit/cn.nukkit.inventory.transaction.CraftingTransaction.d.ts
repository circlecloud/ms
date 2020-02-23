declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                // @ts-ignore
                 class CraftingTransaction extends cn.nukkit.inventory.transaction.InventoryTransaction {
                    // @ts-ignore
                    constructor(source: cn.nukkit.Player, actions: java.util.List)
                    // @ts-ignore
                    protected gridSize: number;
                    // @ts-ignore
                    protected inputs: cn.nukkit.item.Item[][];
                    // @ts-ignore
                    protected secondaryOutputs: cn.nukkit.item.Item[][];
                    // @ts-ignore
                    protected primaryOutput: cn.nukkit.item.Item;
                    // @ts-ignore
                    protected recipe: cn.nukkit.inventory.CraftingRecipe;
                    // @ts-ignore
                    public setInput(index: number, item: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public getInputMap(): cn.nukkit.item.Item[][];
                    // @ts-ignore
                    public setExtraOutput(index: number, item: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public getPrimaryOutput(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public setPrimaryOutput(item: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public getRecipe(): cn.nukkit.inventory.CraftingRecipe;
                    // @ts-ignore
                    public canExecute(): boolean;
                    // @ts-ignore
                    protected callExecuteEvent(): boolean;
                    // @ts-ignore
                    protected sendInventories(): void;
                    // @ts-ignore
                    public execute(): boolean;
                }
            }
        }
    }
}
