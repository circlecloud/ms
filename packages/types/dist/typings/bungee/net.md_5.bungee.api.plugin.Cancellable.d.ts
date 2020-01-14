declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    // @ts-ignore
                    interface Cancellable {
                        /**
                         * Get whether or not this event is cancelled.
                         */
                        // @ts-ignore
                         isCancelled(): boolean;
                        /**
                         * Sets the cancelled state of this event.
                         */
                        // @ts-ignore
                         setCancelled(cancel: boolean): void;
                    }
                }
            }
        }
    }
}
