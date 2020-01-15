declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class ServerConnectedEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer, server: net.md_5.bungee.api.connection.Server)
                        /**
                         * Player whom the server is for.
                         */
                        // @ts-ignore
                        public getPlayer(): net.md_5.bungee.api.connection.ProxiedPlayer;
                        /**
                         * The server itself.
                         */
                        // @ts-ignore
                        public getServer(): net.md_5.bungee.api.connection.Server;
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
