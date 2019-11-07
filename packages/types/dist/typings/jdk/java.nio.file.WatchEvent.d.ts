// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
            interface WatchEvent {
                /**
                 * Returns the event kind.
                 */
                // @ts-ignore
                 kind(): java.nio.file.WatchEvent.Kind;
                /**
                 * Returns the event count. If the event count is greater than {@code 1}
                 * then this is a repeated event.
                 */
                // @ts-ignore
                 count(): number;
                /**
                 * Returns the context for the event.
                 * <p> In the case of {@link StandardWatchEventKinds#ENTRY_CREATE ENTRY_CREATE},
                 * {@link StandardWatchEventKinds#ENTRY_DELETE ENTRY_DELETE}, and {@link
                 * StandardWatchEventKinds#ENTRY_MODIFY ENTRY_MODIFY} events the context is
                 * a {@code Path} that is the {@link Path#relativize relative} path between
                 * the directory registered with the watch service, and the entry that is
                 * created, deleted, or modified.
                 */
                // @ts-ignore
                 context(): java.lang.Object;
            }
        }
    }
}
