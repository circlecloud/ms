declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                interface ProxyConfig {
                    /**
                     * Time before users are disconnected due to no network activity.
                     */
                    // @ts-ignore
                     getTimeout(): number;
                    /**
                     * UUID used for metrics.
                     */
                    // @ts-ignore
                     getUuid(): string;
                    /**
                     * Set of all listeners.
                     */
                    // @ts-ignore
                     getListeners(): java.util.Collection;
                    /**
                     * Set of all servers.
                     */
                    // @ts-ignore
                     getServers(): java.util.Map;
                    /**
                     * Does the server authenticate with Mojang.
                     */
                    // @ts-ignore
                     isOnlineMode(): boolean;
                    /**
                     * Whether proxy commands are logged to the proxy log.
                     */
                    // @ts-ignore
                     isLogCommands(): boolean;
                    /**
                     * Returns the player max.
                     */
                    // @ts-ignore
                     getPlayerLimit(): number;
                    /**
                     * A collection of disabled commands.
                     */
                    // @ts-ignore
                     getDisabledCommands(): java.util.Collection;
                    /**
                     * The connection throttle delay.
                     */
                    // @ts-ignore
                     getThrottle(): number;
                    /**
                     * Whether the proxy will parse IPs with spigot or not
                     */
                    // @ts-ignore
                     isIpForward(): boolean;
                    /**
                     * The encoded favicon.
                     */
                    // @ts-ignore
                     getFavicon(): string;
                    /**
                     * The favicon used for the server ping list.
                     */
                    // @ts-ignore
                     getFaviconObject(): any /*net.md_5.bungee.api.Favicon*/;
                }
            }
        }
    }
}
