declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryCloseEvent extends cn.nukkit.event.inventory.InventoryEvent {
                    // @ts-ignore
                    constructor(inventory: cn.nukkit.inventory.Inventory, who: cn.nukkit.Player)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player;
                }
            }
        }
    }
}
