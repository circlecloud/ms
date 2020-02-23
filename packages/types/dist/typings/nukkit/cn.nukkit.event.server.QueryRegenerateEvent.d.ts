declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class QueryRegenerateEvent extends cn.nukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(server: cn.nukkit.Server)
                    // @ts-ignore
                    constructor(server: cn.nukkit.Server, timeout: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getTimeout(): number;
                    // @ts-ignore
                    public setTimeout(timeout: number): void;
                    // @ts-ignore
                    public getServerName(): string;
                    // @ts-ignore
                    public setServerName(serverName: string): void;
                    // @ts-ignore
                    public canListPlugins(): boolean;
                    // @ts-ignore
                    public setListPlugins(listPlugins: boolean): void;
                    // @ts-ignore
                    public getPlugins(): cn.nukkit.plugin.Plugin[];
                    // @ts-ignore
                    public setPlugins(plugins: cn.nukkit.plugin.Plugin): void;
                    // @ts-ignore
                    public getPlayerList(): cn.nukkit.Player[];
                    // @ts-ignore
                    public setPlayerList(players: cn.nukkit.Player): void;
                    // @ts-ignore
                    public getPlayerCount(): number;
                    // @ts-ignore
                    public setPlayerCount(count: number): void;
                    // @ts-ignore
                    public getMaxPlayerCount(): number;
                    // @ts-ignore
                    public setMaxPlayerCount(count: number): void;
                    // @ts-ignore
                    public getWorld(): string;
                    // @ts-ignore
                    public setWorld(world: string): void;
                    // @ts-ignore
                    public getExtraData(): java.util.Map;
                    // @ts-ignore
                    public setExtraData(extraData: java.util.Map): void;
                    // @ts-ignore
                    public getLongQuery(buffer: number): number[];
                    // @ts-ignore
                    public getShortQuery(buffer: number): number[];
                }
            }
        }
    }
}
