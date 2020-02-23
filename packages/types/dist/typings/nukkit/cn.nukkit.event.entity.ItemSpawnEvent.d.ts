declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ItemSpawnEvent extends cn.nukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(item: cn.nukkit.entity.item.EntityItem)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.item.EntityItem;
                }
            }
        }
    }
}
