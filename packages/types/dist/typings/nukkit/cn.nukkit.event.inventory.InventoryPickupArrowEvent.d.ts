declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryPickupArrowEvent extends cn.nukkit.event.inventory.InventoryEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(inventory: cn.nukkit.inventory.Inventory, arrow: cn.nukkit.entity.projectile.EntityArrow)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getArrow(): cn.nukkit.entity.projectile.EntityArrow;
                }
            }
        }
    }
}
