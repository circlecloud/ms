declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityShootBowEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(shooter: cn.nukkit.entity.EntityLiving, bow: cn.nukkit.item.Item, projectile: cn.nukkit.entity.projectile.EntityProjectile, force: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.EntityLiving;
                    // @ts-ignore
                    public getBow(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public getProjectile(): cn.nukkit.entity.projectile.EntityProjectile;
                    // @ts-ignore
                    public setProjectile(projectile: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public getForce(): number;
                    // @ts-ignore
                    public setForce(force: number): void;
                }
            }
        }
    }
}
