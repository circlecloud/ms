declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class CountDownLatch extends java.lang.Object {
                /**
                 * Constructs a {@code CountDownLatch} initialized with the given count.
                 */
                // @ts-ignore
                constructor(count: number)
                /**
                 * Causes the current thread to wait until the latch has counted down to
                 * zero, unless the thread is {@linkplain Thread#interrupt interrupted}.
                 * <p>If the current count is zero then this method returns immediately.
                 * <p>If the current count is greater than zero then the current
                 * thread becomes disabled for thread scheduling purposes and lies
                 * dormant until one of two things happen:
                 * <ul>
                 * <li>The count reaches zero due to invocations of the
                 * {@link #countDown} method; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread.
                 * </ul>
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting,
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 */
                // @ts-ignore
                public await(): void;
                /**
                 * Causes the current thread to wait until the latch has counted down to
                 * zero, unless the thread is {@linkplain Thread#interrupt interrupted},
                 * or the specified waiting time elapses.
                 * <p>If the current count is zero then this method returns immediately
                 * with the value {@code true}.
                 * <p>If the current count is greater than zero then the current
                 * thread becomes disabled for thread scheduling purposes and lies
                 * dormant until one of three things happen:
                 * <ul>
                 * <li>The count reaches zero due to invocations of the
                 * {@link #countDown} method; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread; or
                 * <li>The specified waiting time elapses.
                 * </ul>
                 * <p>If the count reaches zero then the method returns with the
                 * value {@code true}.
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting,
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 * <p>If the specified waiting time elapses then the value {@code false}
                 * is returned.  If the time is less than or equal to zero, the method
                 * will not wait at all.
                 */
                // @ts-ignore
                public await(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Decrements the count of the latch, releasing all waiting threads if
                 * the count reaches zero.
                 * <p>If the current count is greater than zero then it is decremented.
                 * If the new count is zero then all waiting threads are re-enabled for
                 * thread scheduling purposes.
                 * <p>If the current count equals zero then nothing happens.
                 */
                // @ts-ignore
                public countDown(): void;
                /**
                 * Returns the current count.
                 * <p>This method is typically used for debugging and testing purposes.
                 */
                // @ts-ignore
                public getCount(): number;
                /**
                 * Returns a string identifying this latch, as well as its state.
                 * The state, in brackets, includes the String {@code "Count ="}
                 * followed by the current count.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
