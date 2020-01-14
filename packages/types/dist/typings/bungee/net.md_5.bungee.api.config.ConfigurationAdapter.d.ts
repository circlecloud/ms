declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace config {
                    // @ts-ignore
                    interface ConfigurationAdapter {
                        /**
                         * Reload all the possible values, and if necessary cache them for
                         * individual getting.
                         */
                        // @ts-ignore
                         load(): void;
                        /**
                         * Gets an integer from the specified path.
                         */
                        // @ts-ignore
                         getInt(path: string, def: number): number;
                        /**
                         * Gets a string from the specified path.
                         */
                        // @ts-ignore
                         getString(path: string, def: string): string;
                        /**
                         * Gets a boolean from the specified path.
                         */
                        // @ts-ignore
                         getBoolean(path: string, def: boolean): boolean;
                        /**
                         * Get a list from the specified path.
                         */
                        // @ts-ignore
                         getList(path: string, def: java.util.Collection): java.util.Collection;
                        /**
                         * Get the configuration all servers which may be accessible via the proxy.
                         */
                        // @ts-ignore
                         getServers(): java.util.Map;
                        /**
                         * Get information about all hosts to bind the proxy to.
                         */
                        // @ts-ignore
                         getListeners(): java.util.Collection;
                        /**
                         * Get all groups this player is in.
                         */
                        // @ts-ignore
                         getGroups(player: string): java.util.Collection;
                        /**
                         * Get all permission corresponding to the specified group. The result of
                         * this method may or may not be cached, depending on the implementation.
                         */
                        // @ts-ignore
                         getPermissions(group: string): java.util.Collection;
                    }
                }
            }
        }
    }
}
