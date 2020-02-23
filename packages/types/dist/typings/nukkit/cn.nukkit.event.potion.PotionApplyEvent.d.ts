declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace potion {
                // @ts-ignore
                 class PotionApplyEvent extends cn.nukkit.event.potion.PotionEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(potion: cn.nukkit.potion.Potion, applyEffect: cn.nukkit.potion.Effect, entity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public getApplyEffect(): cn.nukkit.potion.Effect;
                    // @ts-ignore
                    public setApplyEffect(applyEffect: cn.nukkit.potion.Effect): void;
                }
            }
        }
    }
}
