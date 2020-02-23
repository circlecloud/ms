declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityRegainHealthEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, amount: number, regainReason: number)
                    // @ts-ignore
                    public static CAUSE_REGEN: number;
                    // @ts-ignore
                    public static CAUSE_EATING: number;
                    // @ts-ignore
                    public static CAUSE_MAGIC: number;
                    // @ts-ignore
                    public static CAUSE_CUSTOM: number;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getAmount(): number;
                    // @ts-ignore
                    public setAmount(amount: number): void;
                    // @ts-ignore
                    public getRegainReason(): number;
                }
            }
        }
    }
}
