declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class Exchanger extends java.lang.Object {
                /**
                 * Creates a new Exchanger.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Waits for another thread to arrive at this exchange point (unless
                 * the current thread is {@linkplain Thread#interrupt interrupted}),
                 * and then transfers the given object to it, receiving its object
                 * in return.
                 * <p>If another thread is already waiting at the exchange point then
                 * it is resumed for thread scheduling purposes and receives the object
                 * passed in by the current thread.  The current thread returns immediately,
                 * receiving the object passed to the exchange by that other thread.
                 * <p>If no other thread is already waiting at the exchange then the
                 * current thread is disabled for thread scheduling purposes and lies
                 * dormant until one of two things happens:
                 * <ul>
                 * <li>Some other thread enters the exchange; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread.
                 * </ul>
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                 * for the exchange,
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 */
                // @ts-ignore
                public exchange(x: java.lang.Object): java.lang.Object;
                /**
                 * Waits for another thread to arrive at this exchange point (unless
                 * the current thread is {@linkplain Thread#interrupt interrupted} or
                 * the specified waiting time elapses), and then transfers the given
                 * object to it, receiving its object in return.
                 * <p>If another thread is already waiting at the exchange point then
                 * it is resumed for thread scheduling purposes and receives the object
                 * passed in by the current thread.  The current thread returns immediately,
                 * receiving the object passed to the exchange by that other thread.
                 * <p>If no other thread is already waiting at the exchange then the
                 * current thread is disabled for thread scheduling purposes and lies
                 * dormant until one of three things happens:
                 * <ul>
                 * <li>Some other thread enters the exchange; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread; or
                 * <li>The specified waiting time elapses.
                 * </ul>
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                 * for the exchange,
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 * <p>If the specified waiting time elapses then {@link
                 * TimeoutException} is thrown.  If the time is less than or equal
                 * to zero, the method will not wait at all.
                 */
                // @ts-ignore
                public exchange(x: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
            }
        }
    }
}
