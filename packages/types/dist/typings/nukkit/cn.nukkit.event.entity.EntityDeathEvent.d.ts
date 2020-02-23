declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDeathEvent extends cn.nukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.EntityLiving)
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.EntityLiving, drops: cn.nukkit.item.Item)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getDrops(): cn.nukkit.item.Item[];
                    // @ts-ignore
                    public setDrops(drops: cn.nukkit.item.Item): void;
                }
            }
        }
    }
}
