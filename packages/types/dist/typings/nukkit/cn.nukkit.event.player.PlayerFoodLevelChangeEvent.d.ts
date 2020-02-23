declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerFoodLevelChangeEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, foodLevel: number, foodSaturationLevel: number)
                    // @ts-ignore
                    protected foodLevel: number;
                    // @ts-ignore
                    protected foodSaturationLevel: number;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFoodLevel(): number;
                    // @ts-ignore
                    public setFoodLevel(foodLevel: number): void;
                    // @ts-ignore
                    public getFoodSaturationLevel(): number;
                    // @ts-ignore
                    public setFoodSaturationLevel(foodSaturationLevel: number): void;
                }
            }
        }
    }
}
