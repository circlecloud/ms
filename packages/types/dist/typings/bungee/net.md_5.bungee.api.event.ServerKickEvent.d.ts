declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class ServerKickEvent extends net.md_5.bungee.api.plugin.Event implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(player: any /*net.md_5.bungee.api.connection.ProxiedPlayer*/, kickReasonComponent: BaseComponent, cancelServer: any /*net.md_5.bungee.api.config.ServerInfo*/)
                        // @ts-ignore
                        constructor(player: any /*net.md_5.bungee.api.connection.ProxiedPlayer*/, kickReasonComponent: BaseComponent, cancelServer: any /*net.md_5.bungee.api.config.ServerInfo*/, state: any /*net.md_5.bungee.api.event.ServerKickEvent.State*/)
                        // @ts-ignore
                        constructor(player: any /*net.md_5.bungee.api.connection.ProxiedPlayer*/, kickedFrom: any /*net.md_5.bungee.api.config.ServerInfo*/, kickReasonComponent: BaseComponent, cancelServer: any /*net.md_5.bungee.api.config.ServerInfo*/, state: any /*net.md_5.bungee.api.event.ServerKickEvent.State*/)
                        // @ts-ignore
                        public getKickReason(): string;
                        // @ts-ignore
                        public setKickReason(reason: string): void;
                    }
                }
            }
        }
    }
}
