declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                abstract class AbstractReconnectHandler extends java.lang.Object implements net.md_5.bungee.api.ReconnectHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getServer(player: any /*net.md_5.bungee.api.connection.ProxiedPlayer*/): any /*net.md_5.bungee.api.config.ServerInfo*/;
                    // @ts-ignore
                    public static getForcedHost(con: any /*net.md_5.bungee.api.connection.PendingConnection*/): any /*net.md_5.bungee.api.config.ServerInfo*/;
                    // @ts-ignore
                    protected abstract getStoredServer(player: any /*net.md_5.bungee.api.connection.ProxiedPlayer*/): any /*net.md_5.bungee.api.config.ServerInfo*/;
                }
            }
        }
    }
}
