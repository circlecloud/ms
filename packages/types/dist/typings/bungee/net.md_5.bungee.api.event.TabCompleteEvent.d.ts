declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class TabCompleteEvent extends net.md_5.bungee.api.event.TargetedEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.connection.Connection, receiver: net.md_5.bungee.api.connection.Connection, cursor: string, suggestions: java.util.List)
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean;
                        /**
                         * The message the player has already entered.
                         */
                        // @ts-ignore
                        public getCursor(): string;
                        /**
                         * The suggestions that will be sent to the client. This list is mutable. If
                         * this list is empty, the request will be forwarded to the server.
                         */
                        // @ts-ignore
                        public getSuggestions(): java.util.List;
                        /**
                         * Cancelled state.
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
