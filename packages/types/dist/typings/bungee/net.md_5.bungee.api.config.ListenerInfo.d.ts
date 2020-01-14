declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace config {
                    // @ts-ignore
                     class ListenerInfo extends java.lang.Object {
                        // @ts-ignore
                        constructor(host: java.net.InetSocketAddress, motd: string, maxPlayers: number, tabListSize: number, serverPriority: java.util.List, forceDefault: boolean, forcedHosts: java.util.Map, tabListType: string, setLocalAddress: boolean, pingPassthrough: boolean, queryPort: number, queryEnabled: boolean)
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
                    }
                }
            }
        }
    }
}
