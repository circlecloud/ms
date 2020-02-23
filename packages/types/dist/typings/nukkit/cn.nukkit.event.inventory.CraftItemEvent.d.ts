declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class CraftItemEvent extends cn.nukkit.event.Event implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(transaction: cn.nukkit.inventory.transaction.CraftingTransaction)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, input: cn.nukkit.item.Item, recipe: cn.nukkit.inventory.Recipe)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getTransaction(): cn.nukkit.inventory.transaction.CraftingTransaction;
                    // @ts-ignore
                    public getInput(): cn.nukkit.item.Item[];
                    // @ts-ignore
                    public getRecipe(): cn.nukkit.inventory.Recipe;
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player;
                }
            }
        }
    }
}
