declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityArmorChangeEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, oldItem: cn.nukkit.item.Item, newItem: cn.nukkit.item.Item, slot: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getSlot(): number;
                    // @ts-ignore
                    public getNewItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public setNewItem(newItem: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public getOldItem(): cn.nukkit.item.Item;
                }
            }
        }
    }
}
