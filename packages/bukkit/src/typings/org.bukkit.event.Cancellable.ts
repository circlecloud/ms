declare namespace org {
    namespace bukkit {
        namespace event {
            // @ts-ignore
            interface Cancellable {
                /**
                 * Gets the cancellation state of this event. A cancelled event will not
                 * be executed in the server, but will still pass to other plugins
                 */
                 isCancelled(): boolean;
                /**
                 * Sets the cancellation state of this event. A cancelled event will not
                 * be executed in the server, but will still pass to other plugins.
                 */
                 setCancelled(cancel: boolean): void;
            }
        }
    }
}
