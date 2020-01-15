declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace conf {
                // @ts-ignore
                 class Configuration extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public load(): void;
                    // @ts-ignore
                    public getFavicon(): string;
                    // @ts-ignore
                    public getFaviconObject(): Favicon;
                    /**
                     * Time before users are disconnected due to no network activity.
                     */
                    // @ts-ignore
                    public getTimeout(): number;
                    /**
                     * UUID used for metrics.
                     */
                    // @ts-ignore
                    public getUuid(): string;
                    /**
                     * Set of all listeners.
                     */
                    // @ts-ignore
                    public getListeners(): java.util.Collection;
                    /**
                     * Set of all servers.
                     */
                    // @ts-ignore
                    public getServers(): any;
                    /**
                     * Should we check minecraft.net auth.
                     */
                    // @ts-ignore
                    public isOnlineMode(): boolean;
                    /**
                     * Whether we log proxy commands to the proxy log
                     */
                    // @ts-ignore
                    public isLogCommands(): boolean;
                    // @ts-ignore
                    public isLogPings(): boolean;
                    // @ts-ignore
                    public getPlayerLimit(): number;
                    // @ts-ignore
                    public getDisabledCommands(): java.util.Collection;
                    // @ts-ignore
                    public getThrottle(): number;
                    // @ts-ignore
                    public getThrottleLimit(): number;
                    // @ts-ignore
                    public isIpForward(): boolean;
                    // @ts-ignore
                    public getCompressionThreshold(): number;
                    // @ts-ignore
                    public isPreventProxyConnections(): boolean;
                    // @ts-ignore
                    public isForgeSupport(): boolean;
                }
            }
        }
    }
}
