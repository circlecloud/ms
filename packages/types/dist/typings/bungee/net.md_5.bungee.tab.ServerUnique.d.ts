declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace tab {
                // @ts-ignore
                 class ServerUnique extends net.md_5.bungee.tab.TabList {
                    // @ts-ignore
                    constructor(player: ProxiedPlayer)
                    // @ts-ignore
                    public onUpdate(playerListItem: PlayerListItem): void;
                    // @ts-ignore
                    public onPingChange(ping: number): void;
                    // @ts-ignore
                    public onServerChange(): void;
                    // @ts-ignore
                    public onConnect(): void;
                    // @ts-ignore
                    public onDisconnect(): void;
                }
            }
        }
    }
}
