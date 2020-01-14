declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace conf {
                // @ts-ignore
                 class YamlConfig extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public load(): void;
                    // @ts-ignore
                    public getInt(path: string, def: number): number;
                    // @ts-ignore
                    public getString(path: string, def: string): string;
                    // @ts-ignore
                    public getBoolean(path: string, def: boolean): boolean;
                    // @ts-ignore
                    public getServers(): java.util.Map;
                    // @ts-ignore
                    public getListeners(): java.util.Collection;
                    // @ts-ignore
                    public getGroups(player: string): java.util.Collection;
                    // @ts-ignore
                    public getList(path: string, def: java.util.Collection): java.util.Collection;
                    // @ts-ignore
                    public getPermissions(group: string): java.util.Collection;
                }
            }
        }
    }
}
