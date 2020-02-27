declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class AsyncEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(done: net.md_5.bungee.api.Callback)
                        // @ts-ignore
                        public postCall(): void;
                        /**
                         * Register an intent that this plugin will continue to perform work on a
                         * background task, and wishes to let the event proceed once the registered
                         * background task has completed. Multiple intents can be registered by a
                         * plugin, but the plugin must complete the same amount of intents for the
                         * event to proceed.
                         */
                        // @ts-ignore
                        public registerIntent(plugin: net.md_5.bungee.api.plugin.Plugin): void;
                        /**
                         * Notifies this event that this plugin has completed an intent and wishes
                         * to let the event proceed once all intents have been completed.
                         */
                        // @ts-ignore
                        public completeIntent(plugin: net.md_5.bungee.api.plugin.Plugin): void;
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