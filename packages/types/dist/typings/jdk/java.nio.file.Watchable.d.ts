// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
            interface Watchable {
                /**
                 * Registers an object with a watch service.
                 * <p> If the file system object identified by this object is currently
                 * registered with the watch service then the watch key, representing that
                 * registration, is returned after changing the event set or modifiers to
                 * those specified by the {@code events} and {@code modifiers} parameters.
                 * Changing the event set does not cause pending events for the object to be
                 * discarded. Objects are automatically registered for the {@link
                 * StandardWatchEventKinds#OVERFLOW OVERFLOW} event. This event is not
                 * required to be present in the array of events.
                 * <p> Otherwise the file system object has not yet been registered with the
                 * given watch service, so it is registered and the resulting new key is
                 * returned.
                 * <p> Implementations of this interface should specify the events they
                 * support.
                 */
                // @ts-ignore
                 register(watcher: java.nio.file.WatchService, events: java.nio.file.WatchEvent.Kind, modifiers: java.nio.file.WatchEvent.Modifier): java.nio.file.WatchKey;
                /**
                 * Registers an object with a watch service.
                 * <p> An invocation of this method behaves in exactly the same way as the
                 * invocation
                 * <pre>
                 * watchable.{@link #register(WatchService,WatchEvent.Kind[],WatchEvent.Modifier[]) register}(watcher, events, new WatchEvent.Modifier[0]);
                 * </pre>
                 */
                // @ts-ignore
                 register(watcher: java.nio.file.WatchService, events: java.nio.file.WatchEvent.Kind): java.nio.file.WatchKey;
            }
        }
    }
}
