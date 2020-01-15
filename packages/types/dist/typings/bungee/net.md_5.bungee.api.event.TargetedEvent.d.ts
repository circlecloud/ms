declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                    abstract class TargetedEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.connection.Connection, receiver: net.md_5.bungee.api.connection.Connection)
                        /**
                         * Creator of the action.
                         */
                        // @ts-ignore
                        public getSender(): net.md_5.bungee.api.connection.Connection;
                        /**
                         * Receiver of the action.
                         */
                        // @ts-ignore
                        public getReceiver(): net.md_5.bungee.api.connection.Connection;
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
