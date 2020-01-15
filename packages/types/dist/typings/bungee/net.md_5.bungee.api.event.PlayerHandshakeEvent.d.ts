declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class PlayerHandshakeEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(connection: net.md_5.bungee.api.connection.PendingConnection, handshake: Handshake)
                        /**
                         * Connection attempting to login.
                         */
                        // @ts-ignore
                        public getConnection(): net.md_5.bungee.api.connection.PendingConnection;
                        /**
                         * The handshake.
                         */
                        // @ts-ignore
                        public getHandshake(): Handshake;
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
