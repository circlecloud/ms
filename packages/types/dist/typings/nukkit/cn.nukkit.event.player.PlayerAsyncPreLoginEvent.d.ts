declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerAsyncPreLoginEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(name: string, uuid: java.util.UUID, address: string, port: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getUuid(): java.util.UUID;
                    // @ts-ignore
                    public getAddress(): string;
                    // @ts-ignore
                    public getPort(): number;
                    // @ts-ignore
                    public getLoginResult(): cn.nukkit.event.player.PlayerAsyncPreLoginEvent.LoginResult;
                    // @ts-ignore
                    public setLoginResult(loginResult: cn.nukkit.event.player.PlayerAsyncPreLoginEvent.LoginResult): void;
                    // @ts-ignore
                    public getKickMessage(): string;
                    // @ts-ignore
                    public setKickMessage(kickMessage: string): void;
                    // @ts-ignore
                    public scheduleSyncAction(action: java.util.function$.Consumer): void;
                    // @ts-ignore
                    public getScheduledActions(): java.util.List;
                    // @ts-ignore
                    public allow(): void;
                    // @ts-ignore
                    public disAllow(message: string): void;
                }
            }
        }
    }
}
