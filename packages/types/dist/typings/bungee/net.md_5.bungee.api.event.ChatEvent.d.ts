declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class ChatEvent extends net.md_5.bungee.api.event.TargetedEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.connection.Connection, receiver: net.md_5.bungee.api.connection.Connection, message: string)
                        /**
                         * Checks whether this message is valid as a command
                         */
                        // @ts-ignore
                        public isCommand(): boolean;
                        /**
                         * Checks whether this message is run on this proxy server.
                         */
                        // @ts-ignore
                        public isProxyCommand(): boolean;
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean;
                        /**
                         * Text contained in this chat.
                         */
                        // @ts-ignore
                        public getMessage(): string;
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public setCancelled(cancelled: boolean): void;
                        /**
                         * Text contained in this chat.
                         */
                        // @ts-ignore
                        public setMessage(message: string): void;
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
