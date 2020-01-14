declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    // @ts-ignore
                     class Plugin extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Called when the plugin has just been loaded. Most of the proxy will not
                         * be initialized, so only use it for registering
                         * {@link ConfigurationAdapter}'s and other predefined behavior.
                         */
                        // @ts-ignore
                        public onLoad(): void;
                        /**
                         * Called when this plugin is enabled.
                         */
                        // @ts-ignore
                        public onEnable(): void;
                        /**
                         * Called when this plugin is disabled.
                         */
                        // @ts-ignore
                        public onDisable(): void;
                        /**
                         * Gets the data folder where this plugin may store arbitrary data. It will
                         * be a child of {@link ProxyServer#getPluginsFolder()}.
                         */
                        // @ts-ignore
                        public getDataFolder(): java.io.File;
                        /**
                         * Get a resource from within this plugins jar or container. Care must be
                         * taken to close the returned stream.
                         */
                        // @ts-ignore
                        public getResourceAsStream(name: string): java.io.InputStream;
                        // @ts-ignore
                        public getExecutorService(): java.util.concurrent.ExecutorService;
                    }
                }
            }
        }
    }
}
