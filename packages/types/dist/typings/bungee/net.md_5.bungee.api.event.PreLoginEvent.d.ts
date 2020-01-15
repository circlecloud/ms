declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class PreLoginEvent extends net.md_5.bungee.api.event.AsyncEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(connection: net.md_5.bungee.api.connection.PendingConnection, done: net.md_5.bungee.api.Callback)
                        // @ts-ignore
                        public getCancelReason(): string;
                        // @ts-ignore
                        public setCancelReason(cancelReason: string): void;
                        // @ts-ignore
                        public setCancelReason(cancelReason: BaseComponent): void;
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean;
                        /**
                         * Message to use when kicking if this event is canceled.
                         */
                        // @ts-ignore
                        public getCancelReasonComponents(): BaseComponent[];
                        /**
                         * Connection attempting to login.
                         */
                        // @ts-ignore
                        public getConnection(): net.md_5.bungee.api.connection.PendingConnection;
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
