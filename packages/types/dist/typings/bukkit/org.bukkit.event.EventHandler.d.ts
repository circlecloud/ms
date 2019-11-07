declare namespace org {
    namespace bukkit {
        namespace event {
            // @ts-ignore
            interface EventHandler {
                /**
                 * Define the priority of the event.
                 * <p>
                 * First priority to the last priority executed:
                 * <ol>
                 * <li>LOWEST
                 * <li>LOW
                 * <li>NORMAL
                 * <li>HIGH
                 * <li>HIGHEST
                 * <li>MONITOR
                 * </ol>
                 */
                // @ts-ignore
                 priority(): org.bukkit.event.EventPriority;
                /**
                 * Define if the handler ignores a cancelled event.
                 * <p>
                 * If ignoreCancelled is true and the event is cancelled, the method is
                 * not called. Otherwise, the method is always called.
                 */
                // @ts-ignore
                 ignoreCancelled(): boolean;
            }
        }
    }
}
