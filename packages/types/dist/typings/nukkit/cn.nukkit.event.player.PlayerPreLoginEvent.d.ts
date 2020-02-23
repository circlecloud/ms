declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerPreLoginEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, kickMessage: string)
                    // @ts-ignore
                    protected kickMessage: string;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public setKickMessage(kickMessage: string): void;
                    // @ts-ignore
                    public getKickMessage(): string;
                }
            }
        }
    }
}
