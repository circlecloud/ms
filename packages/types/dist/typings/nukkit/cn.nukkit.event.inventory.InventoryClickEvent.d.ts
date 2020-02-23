declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryClickEvent extends cn.nukkit.event.inventory.InventoryEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: cn.nukkit.Player, inventory: cn.nukkit.inventory.Inventory, slot: number, sourceItem: cn.nukkit.item.Item, heldItem: cn.nukkit.item.Item)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getSlot(): number;
                    // @ts-ignore
                    public getSourceItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public getHeldItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player;
                }
            }
        }
    }
}
