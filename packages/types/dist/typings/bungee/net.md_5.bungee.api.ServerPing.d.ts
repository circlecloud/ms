declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                 class ServerPing extends java.lang.Object {
                    // @ts-ignore
                    constructor(version: net.md_5.bungee.api.ServerPing.Protocol, players: net.md_5.bungee.api.ServerPing.Players, description: string, favicon: string)
                    // @ts-ignore
                    constructor(version: net.md_5.bungee.api.ServerPing.Protocol, players: net.md_5.bungee.api.ServerPing.Players, description: string, favicon: net.md_5.bungee.api.Favicon)
                    // @ts-ignore
                    public getFavicon(): string;
                    // @ts-ignore
                    public getFaviconObject(): net.md_5.bungee.api.Favicon;
                    // @ts-ignore
                    public setFavicon(favicon: string): void;
                    // @ts-ignore
                    public setFavicon(favicon: net.md_5.bungee.api.Favicon): void;
                    // @ts-ignore
                    public setDescription(description: string): void;
                    // @ts-ignore
                    public getDescription(): string;
                    // @ts-ignore
                    public setDescriptionComponent(description: BaseComponent): void;
                    // @ts-ignore
                    public getDescriptionComponent(): BaseComponent;
                }
            }
        }
    }
}
