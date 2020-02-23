declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ProjectileHitEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.projectile.EntityProjectile)
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.projectile.EntityProjectile, movingObjectPosition: cn.nukkit.level.MovingObjectPosition)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getMovingObjectPosition(): cn.nukkit.level.MovingObjectPosition;
                    // @ts-ignore
                    public setMovingObjectPosition(movingObjectPosition: cn.nukkit.level.MovingObjectPosition): void;
                }
            }
        }
    }
}
