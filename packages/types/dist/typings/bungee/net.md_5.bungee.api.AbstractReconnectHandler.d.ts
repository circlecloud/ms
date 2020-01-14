declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                abstract class AbstractReconnectHandler extends java.lang.Object implements net.md_5.bungee.api.ReconnectHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getServer(player: net.md_5.bungee.api.connection.ProxiedPlayer): net.md_5.bungee.api.config.ServerInfo;
                    // @ts-ignore
                    public static getForcedHost(con: net.md_5.bungee.api.connection.PendingConnection): net.md_5.bungee.api.config.ServerInfo;
                    // @ts-ignore
                    protected abstract getStoredServer(player: net.md_5.bungee.api.connection.ProxiedPlayer): net.md_5.bungee.api.config.ServerInfo;
                }
            }
        }
    }
}
