declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace tab {
                // @ts-ignore
                abstract class TabList extends java.lang.Object {
                    // @ts-ignore
                    constructor(player: ProxiedPlayer)
                    // @ts-ignore
                    protected player: ProxiedPlayer;
                    // @ts-ignore
                    public abstract onUpdate(playerListItem: PlayerListItem): void;
                    // @ts-ignore
                    public abstract onPingChange(ping: number): void;
                    // @ts-ignore
                    public abstract onServerChange(): void;
                    // @ts-ignore
                    public abstract onConnect(): void;
                    // @ts-ignore
                    public abstract onDisconnect(): void;
                    // @ts-ignore
                    public static rewrite(playerListItem: PlayerListItem): PlayerListItem;
                }
            }
        }
    }
}
