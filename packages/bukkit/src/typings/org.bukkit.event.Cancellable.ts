declare namespace org {
    namespace bukkit {
        namespace event {
            class Cancellable {
                /**
                 * Gets the cancellation state of this event. A cancelled event will not
                 * be executed in the server, but will still pass to other plugins
                 */
                public isCancelled(): boolean;
                /**
                 * Sets the cancellation state of this event. A cancelled event will not
                 * be executed in the server, but will still pass to other plugins.
                 */
                public setCancelled(cancel: boolean): void;
            }
        }
    }
}
