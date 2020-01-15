declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace ServerConnectRequest {
                    // @ts-ignore
                     class Builder extends java.lang.Object {
                        /**
                         * Target server to connect to.
                         */
                        // @ts-ignore
                        public target(target: net.md_5.bungee.api.config.ServerInfo): net.md_5.bungee.api.ServerConnectRequest.Builder;
                        /**
                         * Reason for connecting to server.
                         */
                        // @ts-ignore
                        public reason(reason: net.md_5.bungee.api.event.ServerConnectEvent.Reason): net.md_5.bungee.api.ServerConnectRequest.Builder;
                        /**
                         * Callback to execute post request.
                         */
                        // @ts-ignore
                        public callback(callback: net.md_5.bungee.api.Callback): net.md_5.bungee.api.ServerConnectRequest.Builder;
                        /**
                         * Timeout in milliseconds for request.
                         */
                        // @ts-ignore
                        public connectTimeout(connectTimeout: number): net.md_5.bungee.api.ServerConnectRequest.Builder;
                        /**
                         * Should the player be attempted to connect to the next server in their
                         * queue if the initial request fails.
                         */
                        // @ts-ignore
                        public retry(retry: boolean): net.md_5.bungee.api.ServerConnectRequest.Builder;
                        // @ts-ignore
                        public build(): net.md_5.bungee.api.ServerConnectRequest;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
