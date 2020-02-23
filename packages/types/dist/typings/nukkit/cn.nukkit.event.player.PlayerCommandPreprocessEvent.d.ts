declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerCommandPreprocessEvent extends cn.nukkit.event.player.PlayerMessageEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, message: string)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public setPlayer(player: cn.nukkit.Player): void;
                }
            }
        }
    }
}
