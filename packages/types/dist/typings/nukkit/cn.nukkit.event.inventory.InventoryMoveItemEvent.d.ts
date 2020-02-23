declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryMoveItemEvent extends cn.nukkit.event.inventory.InventoryEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(from: cn.nukkit.inventory.Inventory, targetInventory: cn.nukkit.inventory.Inventory, source: cn.nukkit.inventory.InventoryHolder, item: cn.nukkit.item.Item, action: cn.nukkit.event.inventory.InventoryMoveItemEvent.Action)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getTargetInventory(): cn.nukkit.inventory.Inventory;
                    // @ts-ignore
                    public getSource(): cn.nukkit.inventory.InventoryHolder;
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public setItem(item: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public getAction(): cn.nukkit.event.inventory.InventoryMoveItemEvent.Action;
                }
            }
        }
    }
}
