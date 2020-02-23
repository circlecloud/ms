declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityExplosionPrimeEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, force: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getForce(): number;
                    // @ts-ignore
                    public setForce(force: number): void;
                    // @ts-ignore
                    public isBlockBreaking(): boolean;
                    // @ts-ignore
                    public setBlockBreaking(blockBreaking: boolean): void;
                }
            }
        }
    }
}
