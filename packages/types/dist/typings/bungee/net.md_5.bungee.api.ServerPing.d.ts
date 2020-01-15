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
                    constructor()
                    // @ts-ignore
                    constructor(version: net.md_5.bungee.api.ServerPing.Protocol, players: net.md_5.bungee.api.ServerPing.Players, description: BaseComponent, favicon: net.md_5.bungee.api.Favicon)
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
                    // @ts-ignore
                    public getVersion(): net.md_5.bungee.api.ServerPing.Protocol;
                    // @ts-ignore
                    public getPlayers(): net.md_5.bungee.api.ServerPing.Players;
                    // @ts-ignore
                    public getModinfo(): net.md_5.bungee.api.ServerPing.ModInfo;
                    // @ts-ignore
                    public setVersion(version: net.md_5.bungee.api.ServerPing.Protocol): void;
                    // @ts-ignore
                    public setPlayers(players: net.md_5.bungee.api.ServerPing.Players): void;
                    // @ts-ignore
                    public equals(o: java.lang.Object): boolean;
                    // @ts-ignore
                    protected canEqual(other: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
