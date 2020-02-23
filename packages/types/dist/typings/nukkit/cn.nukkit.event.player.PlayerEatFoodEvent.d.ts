declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerEatFoodEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, food: cn.nukkit.item.food.Food)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFood(): cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public setFood(food: cn.nukkit.item.food.Food): void;
                }
            }
        }
    }
}
