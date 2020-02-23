declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityMotionEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, motion: cn.nukkit.math.Vector3)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getVector(): cn.nukkit.math.Vector3;
                    // @ts-ignore
                    public getMotion(): cn.nukkit.math.Vector3;
                }
            }
        }
    }
}
