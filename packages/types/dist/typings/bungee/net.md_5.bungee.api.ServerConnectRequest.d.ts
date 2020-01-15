declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                 class ServerConnectRequest extends java.lang.Object {
                    // @ts-ignore
                    public static builder(): net.md_5.bungee.api.ServerConnectRequest.Builder;
                    /**
                     * Target server to connect to.
                     */
                    // @ts-ignore
                    public getTarget(): net.md_5.bungee.api.config.ServerInfo;
                    /**
                     * Reason for connecting to server.
                     */
                    // @ts-ignore
                    public getReason(): net.md_5.bungee.api.event.ServerConnectEvent.Reason;
                    /**
                     * Callback to execute post request.
                     */
                    // @ts-ignore
                    public getCallback(): net.md_5.bungee.api.Callback;
                    /**
                     * Timeout in milliseconds for request.
                     */
                    // @ts-ignore
                    public getConnectTimeout(): number;
                    /**
                     * Should the player be attempted to connect to the next server in their
                     * queue if the initial request fails.
                     */
                    // @ts-ignore
                    public isRetry(): boolean;
                }
            }
        }
    }
}
