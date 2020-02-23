declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryPickupItemEvent extends cn.nukkit.event.inventory.InventoryEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(inventory: cn.nukkit.inventory.Inventory, item: cn.nukkit.entity.item.EntityItem)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getItem(): cn.nukkit.entity.item.EntityItem;
                }
            }
        }
    }
}
