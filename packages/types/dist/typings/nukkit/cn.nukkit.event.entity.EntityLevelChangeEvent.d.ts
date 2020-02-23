declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityLevelChangeEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, originLevel: cn.nukkit.level.Level, targetLevel: cn.nukkit.level.Level)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getOrigin(): cn.nukkit.level.Level;
                    // @ts-ignore
                    public getTarget(): cn.nukkit.level.Level;
                }
            }
        }
    }
}
