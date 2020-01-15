declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace config {
                    // @ts-ignore
                     class ListenerInfo extends java.lang.Object {
                        // @ts-ignore
                        constructor(host: java.net.InetSocketAddress, motd: string, maxPlayers: number, tabListSize: number, serverPriority: java.util.List, forceDefault: boolean, forcedHosts: java.util.Map, tabListType: string, setLocalAddress: boolean, pingPassthrough: boolean, queryPort: number, queryEnabled: boolean)
                        // @ts-ignore
                        constructor(host: java.net.InetSocketAddress, motd: string, maxPlayers: number, tabListSize: number, serverPriority: java.util.List, forceDefault: boolean, forcedHosts: java.util.Map, tabListType: string, setLocalAddress: boolean, pingPassthrough: boolean, queryPort: number, queryEnabled: boolean, proxyProtocol: boolean)
                        /**
                         * Gets the highest priority server to join.
                         */
                        // @ts-ignore
                        public getDefaultServer(): string;
                        /**
                         * Gets the second highest priority server to join, or else the highest
                         * priority.
                         */
                        // @ts-ignore
                        public getFallbackServer(): string;
                        /**
                         * Host to bind to.
                         */
                        // @ts-ignore
                        public getHost(): java.net.InetSocketAddress;
                        /**
                         * Displayed MOTD.
                         */
                        // @ts-ignore
                        public getMotd(): string;
                        /**
                         * Max amount of slots displayed on the ping page.
                         */
                        // @ts-ignore
                        public getMaxPlayers(): number;
                        /**
                         * Number of players to be shown on the tab list.
                         */
                        // @ts-ignore
                        public getTabListSize(): number;
                        /**
                         * List of servers in order of join attempt. First attempt is the first
                         * element, second attempt is the next element, etc etc.
                         */
                        // @ts-ignore
                        public getServerPriority(): java.util.List;
                        /**
                         * Whether reconnect locations will be used, or else the user is simply
                         * transferred to the default server on connect.
                         */
                        // @ts-ignore
                        public isForceDefault(): boolean;
                        /**
                         * A list of host to server name mappings which will force a user to be
                         * transferred depending on the host they connect to.
                         */
                        // @ts-ignore
                        public getForcedHosts(): java.util.Map;
                        /**
                         * The type of tab list to use
                         */
                        // @ts-ignore
                        public getTabListType(): string;
                        /**
                         * Whether to set the local address when connecting to servers.
                         */
                        // @ts-ignore
                        public isSetLocalAddress(): boolean;
                        /**
                         * Whether to pass the ping through when we can reliably get the target
                         * server (force default server).
                         */
                        // @ts-ignore
                        public isPingPassthrough(): boolean;
                        /**
                         * What port to run udp query on.
                         */
                        // @ts-ignore
                        public getQueryPort(): number;
                        /**
                         * Whether to enable udp query.
                         */
                        // @ts-ignore
                        public isQueryEnabled(): boolean;
                        /**
                         * Whether to support HAProxy PROXY protocol.
                         */
                        // @ts-ignore
                        public isProxyProtocol(): boolean;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
