declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityCombustEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(combustee: cn.nukkit.entity.Entity, duration: number)
                    // @ts-ignore
                    protected duration: number;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getDuration(): number;
                    // @ts-ignore
                    public setDuration(duration: number): void;
                }
            }
        }
    }
}
