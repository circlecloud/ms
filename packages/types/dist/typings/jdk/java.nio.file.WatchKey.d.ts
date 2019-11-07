// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
            interface WatchKey {
                /**
                 * Tells whether or not this watch key is valid.
                 * <p> A watch key is valid upon creation and remains until it is cancelled,
                 * or its watch service is closed.
                 */
                // @ts-ignore
                 isValid(): boolean;
                /**
                 * Retrieves and removes all pending events for this watch key, returning
                 * a {@code List} of the events that were retrieved.
                 * <p> Note that this method does not wait if there are no events pending.
                 */
                // @ts-ignore
                 pollEvents(): java.util.List;
                /**
                 * Resets this watch key.
                 * <p> If this watch key has been cancelled or this watch key is already in
                 * the ready state then invoking this method has no effect. Otherwise
                 * if there are pending events for the object then this watch key is
                 * immediately re-queued to the watch service. If there are no pending
                 * events then the watch key is put into the ready state and will remain in
                 * that state until an event is detected or the watch key is cancelled.
                 */
                // @ts-ignore
                 reset(): boolean;
                /**
                 * Cancels the registration with the watch service. Upon return the watch key
                 * will be invalid. If the watch key is enqueued, waiting to be retrieved
                 * from the watch service, then it will remain in the queue until it is
                 * removed. Pending events, if any, remain pending and may be retrieved by
                 * invoking the {@link #pollEvents pollEvents} method after the key is
                 * cancelled.
                 * <p> If this watch key has already been cancelled then invoking this
                 * method has no effect.  Once cancelled, a watch key remains forever invalid.
                 */
                // @ts-ignore
                 cancel(): void;
                /**
                 * Returns the object for which this watch key was created. This method will
                 * continue to return the object even after the key is cancelled.
                 * <p> As the {@code WatchService} is intended to map directly on to the
                 * native file event notification facility (where available) then many of
                 * details on how registered objects are watched is highly implementation
                 * specific. When watching a directory for changes for example, and the
                 * directory is moved or renamed in the file system, there is no guarantee
                 * that the watch key will be cancelled and so the object returned by this
                 * method may no longer be a valid path to the directory.
                 */
                // @ts-ignore
                 watchable(): java.nio.file.Watchable;
            }
        }
    }
}
