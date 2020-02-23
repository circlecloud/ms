declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerQuitEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: cn.nukkit.lang.TextContainer, reason: string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: string, reason: string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: string, autoSave: boolean, reason: string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: string, autoSave: boolean)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: cn.nukkit.lang.TextContainer, autoSave: boolean)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: cn.nukkit.lang.TextContainer, autoSave: boolean, reason: string)
                    // @ts-ignore
                    protected quitMessage: cn.nukkit.lang.TextContainer;
                    // @ts-ignore
                    protected autoSave: boolean;
                    // @ts-ignore
                    protected reason: string;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getQuitMessage(): cn.nukkit.lang.TextContainer;
                    // @ts-ignore
                    public setQuitMessage(quitMessage: cn.nukkit.lang.TextContainer): void;
                    // @ts-ignore
                    public setQuitMessage(quitMessage: string): void;
                    // @ts-ignore
                    public getAutoSave(): boolean;
                    // @ts-ignore
                    public setAutoSave(): void;
                    // @ts-ignore
                    public setAutoSave(autoSave: boolean): void;
                    // @ts-ignore
                    public getReason(): string;
                }
            }
        }
    }
}
