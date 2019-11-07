declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
            interface WatchService {
                /**
                 * Closes this watch service.
                 * <p> If a thread is currently blocked in the {@link #take take} or {@link
                 * #poll(long,TimeUnit) poll} methods waiting for a key to be queued then
                 * it immediately receives a {@link ClosedWatchServiceException}. Any
                 * valid keys associated with this watch service are {@link WatchKey#isValid
                 * invalidated}.
                 * <p> After a watch service is closed, any further attempt to invoke
                 * operations upon it will throw {@link ClosedWatchServiceException}.
                 * If this watch service is already closed then invoking this method
                 * has no effect.
                 */
                // @ts-ignore
                 close(): void;
                /**
                 * Retrieves and removes the next watch key, or {@code null} if none are
                 * present.
                 */
                // @ts-ignore
                 poll(): java.nio.file.WatchKey;
                /**
                 * Retrieves and removes the next watch key, waiting if necessary up to the
                 * specified wait time if none are yet present.
                 */
                // @ts-ignore
                 poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.nio.file.WatchKey;
                /**
                 * Retrieves and removes next watch key, waiting if none are yet present.
                 */
                // @ts-ignore
                 take(): java.nio.file.WatchKey;
            }
        }
    }
}
