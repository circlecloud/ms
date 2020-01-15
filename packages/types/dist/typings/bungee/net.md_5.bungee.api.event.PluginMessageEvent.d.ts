declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class PluginMessageEvent extends net.md_5.bungee.api.event.TargetedEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.connection.Connection, receiver: net.md_5.bungee.api.connection.Connection, tag: string, data: number)
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean;
                        /**
                         * Tag specified for this plugin message.
                         */
                        // @ts-ignore
                        public getTag(): string;
                        /**
                         * Data contained in this plugin message.
                         */
                        // @ts-ignore
                        public getData(): number[];
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
