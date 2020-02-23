declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryTransactionEvent extends cn.nukkit.event.Event implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(transaction: cn.nukkit.inventory.transaction.InventoryTransaction)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getTransaction(): cn.nukkit.inventory.transaction.InventoryTransaction;
                }
            }
        }
    }
}
