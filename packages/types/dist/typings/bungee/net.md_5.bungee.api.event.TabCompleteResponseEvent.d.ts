declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class TabCompleteResponseEvent extends net.md_5.bungee.api.event.TargetedEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.connection.Connection, receiver: net.md_5.bungee.api.connection.Connection, suggestions: java.util.List)
                        /**
                         * Whether the event is cancelled.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean;
                        /**
                         * Mutable list of suggestions sent back to the player. If this list is
                         * empty, an empty list is sent back to the client.
                         */
                        // @ts-ignore
                        public getSuggestions(): java.util.List;
                        /**
                         * Whether the event is cancelled.
                         */
                        // @ts-ignore
                        public setCancelled(cancelled: boolean): void;
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
