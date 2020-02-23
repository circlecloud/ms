declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace food {
                // @ts-ignore
                 class FoodInBowl extends cn.nukkit.item.food.Food {
                    // @ts-ignore
                    constructor(restoreFood: number, restoreSaturation: number)
                    // @ts-ignore
                    protected onEatenBy(player: cn.nukkit.Player): boolean;
                }
            }
        }
    }
}
