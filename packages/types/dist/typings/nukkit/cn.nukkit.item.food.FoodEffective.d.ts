declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace food {
                // @ts-ignore
                 class FoodEffective extends cn.nukkit.item.food.Food {
                    // @ts-ignore
                    constructor(restoreFood: number, restoreSaturation: number)
                    // @ts-ignore
                    protected effects: java.util.Map;
                    // @ts-ignore
                    public addEffect(effect: cn.nukkit.potion.Effect): cn.nukkit.item.food.FoodEffective;
                    // @ts-ignore
                    public addChanceEffect(chance: number, effect: cn.nukkit.potion.Effect): cn.nukkit.item.food.FoodEffective;
                    // @ts-ignore
                    protected onEatenBy(player: cn.nukkit.Player): boolean;
                }
            }
        }
    }
}
