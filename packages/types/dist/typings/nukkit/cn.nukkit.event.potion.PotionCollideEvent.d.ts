declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace potion {
                // @ts-ignore
                 class PotionCollideEvent extends cn.nukkit.event.potion.PotionEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(potion: cn.nukkit.potion.Potion, thrownPotion: cn.nukkit.entity.item.EntityPotion)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getThrownPotion(): cn.nukkit.entity.item.EntityPotion;
                }
            }
        }
    }
}
