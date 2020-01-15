declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class ServerDisconnectEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer, target: net.md_5.bungee.api.config.ServerInfo)
                        /**
                         * Player disconnecting from a server.
                         */
                        // @ts-ignore
                        public getPlayer(): net.md_5.bungee.api.connection.ProxiedPlayer;
                        /**
                         * Server the player is disconnecting from.
                         */
                        // @ts-ignore
                        public getTarget(): net.md_5.bungee.api.config.ServerInfo;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                    }
                }
            }
        }
    }
}
