declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class LoginEvent extends net.md_5.bungee.api.event.AsyncEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(connection: any /*net.md_5.bungee.api.connection.PendingConnection*/, done: any /*net.md_5.bungee.api.Callback*/)
                        // @ts-ignore
                        public getCancelReason(): string;
                        // @ts-ignore
                        public setCancelReason(cancelReason: string): void;
                        // @ts-ignore
                        public setCancelReason(cancelReason: BaseComponent): void;
                    }
                }
            }
        }
    }
}
