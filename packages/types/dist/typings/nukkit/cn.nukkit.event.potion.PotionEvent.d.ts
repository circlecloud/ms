declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace potion {
                // @ts-ignore
                abstract class PotionEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(potion: cn.nukkit.potion.Potion)
                    // @ts-ignore
                    public getPotion(): cn.nukkit.potion.Potion;
                    // @ts-ignore
                    public setPotion(potion: cn.nukkit.potion.Potion): void;
                }
            }
        }
    }
}
