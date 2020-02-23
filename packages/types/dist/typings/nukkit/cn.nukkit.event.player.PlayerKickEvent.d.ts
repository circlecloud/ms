declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerKickEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: string, quitMessage: string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: string, quitMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: cn.nukkit.event.player.PlayerKickEvent.Reason, quitMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: cn.nukkit.event.player.PlayerKickEvent.Reason, quitMessage: string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: cn.nukkit.event.player.PlayerKickEvent.Reason, reasonString: string, quitMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    protected quitMessage: cn.nukkit.lang.TextContainer;
                    // @ts-ignore
                    protected reason: cn.nukkit.event.player.PlayerKickEvent.Reason;
                    // @ts-ignore
                    protected reasonString: string;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getReason(): string;
                    // @ts-ignore
                    public getReasonEnum(): cn.nukkit.event.player.PlayerKickEvent.Reason;
                    // @ts-ignore
                    public getQuitMessage(): cn.nukkit.lang.TextContainer;
                    // @ts-ignore
                    public setQuitMessage(quitMessage: cn.nukkit.lang.TextContainer): void;
                    // @ts-ignore
                    public setQuitMessage(joinMessage: string): void;
                }
            }
        }
    }
}
