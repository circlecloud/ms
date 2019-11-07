declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                // @ts-ignore
                interface Lock {
                    /**
                     * Acquires the lock.
                     * <p>If the lock is not available then the current thread becomes
                     * disabled for thread scheduling purposes and lies dormant until the
                     * lock has been acquired.
                     * <p><b>Implementation Considerations</b>
                     * <p>A {@code Lock} implementation may be able to detect erroneous use
                     * of the lock, such as an invocation that would cause deadlock, and
                     * may throw an (unchecked) exception in such circumstances.  The
                     * circumstances and the exception type must be documented by that
                     * {@code Lock} implementation.
                     */
                    // @ts-ignore
                     lock(): void;
                    /**
                     * Acquires the lock unless the current thread is
                     * {@linkplain Thread#interrupt interrupted}.
                     * <p>Acquires the lock if it is available and returns immediately.
                     * <p>If the lock is not available then the current thread becomes
                     * disabled for thread scheduling purposes and lies dormant until
                     * one of two things happens:
                     * <ul>
                     * <li>The lock is acquired by the current thread; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts} the
                     * current thread, and interruption of lock acquisition is supported.
                     * </ul>
                     * <p>If the current thread:
                     * <ul>
                     * <li>has its interrupted status set on entry to this method; or
                     * <li>is {@linkplain Thread#interrupt interrupted} while acquiring the
                     * lock, and interruption of lock acquisition is supported,
                     * </ul>
                     * then {@link InterruptedException} is thrown and the current thread's
                     * interrupted status is cleared.
                     * <p><b>Implementation Considerations</b>
                     * <p>The ability to interrupt a lock acquisition in some
                     * implementations may not be possible, and if possible may be an
                     * expensive operation.  The programmer should be aware that this
                     * may be the case. An implementation should document when this is
                     * the case.
                     * <p>An implementation can favor responding to an interrupt over
                     * normal method return.
                     * <p>A {@code Lock} implementation may be able to detect
                     * erroneous use of the lock, such as an invocation that would
                     * cause deadlock, and may throw an (unchecked) exception in such
                     * circumstances.  The circumstances and the exception type must
                     * be documented by that {@code Lock} implementation.
                     */
                    // @ts-ignore
                     lockInterruptibly(): void;
                    /**
                     * Acquires the lock only if it is free at the time of invocation.
                     * <p>Acquires the lock if it is available and returns immediately
                     * with the value {@code true}.
                     * If the lock is not available then this method will return
                     * immediately with the value {@code false}.
                     * <p>A typical usage idiom for this method would be:
                     * <pre> {@code
                     * Lock lock = ...;
                     * if (lock.tryLock()) {
                     * try {
                     * // manipulate protected state
                     * } finally {
                     * lock.unlock();
                     * }
                     * } else {
                     * // perform alternative actions
                     * }}</pre>
                     * This usage ensures that the lock is unlocked if it was acquired, and
                     * doesn't try to unlock if the lock was not acquired.
                     */
                    // @ts-ignore
                     tryLock(): boolean;
                    /**
                     * Acquires the lock if it is free within the given waiting time and the
                     * current thread has not been {@linkplain Thread#interrupt interrupted}.
                     * <p>If the lock is available this method returns immediately
                     * with the value {@code true}.
                     * If the lock is not available then
                     * the current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until one of three things happens:
                     * <ul>
                     * <li>The lock is acquired by the current thread; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts} the
                     * current thread, and interruption of lock acquisition is supported; or
                     * <li>The specified waiting time elapses
                     * </ul>
                     * <p>If the lock is acquired then the value {@code true} is returned.
                     * <p>If the current thread:
                     * <ul>
                     * <li>has its interrupted status set on entry to this method; or
                     * <li>is {@linkplain Thread#interrupt interrupted} while acquiring
                     * the lock, and interruption of lock acquisition is supported,
                     * </ul>
                     * then {@link InterruptedException} is thrown and the current thread's
                     * interrupted status is cleared.
                     * <p>If the specified waiting time elapses then the value {@code false}
                     * is returned.
                     * If the time is
                     * less than or equal to zero, the method will not wait at all.
                     * <p><b>Implementation Considerations</b>
                     * <p>The ability to interrupt a lock acquisition in some implementations
                     * may not be possible, and if possible may
                     * be an expensive operation.
                     * The programmer should be aware that this may be the case. An
                     * implementation should document when this is the case.
                     * <p>An implementation can favor responding to an interrupt over normal
                     * method return, or reporting a timeout.
                     * <p>A {@code Lock} implementation may be able to detect
                     * erroneous use of the lock, such as an invocation that would cause
                     * deadlock, and may throw an (unchecked) exception in such circumstances.
                     * The circumstances and the exception type must be documented by that
                     * {@code Lock} implementation.
                     */
                    // @ts-ignore
                     tryLock(time: number, unit: java.util.concurrent.TimeUnit): boolean;
                    /**
                     * Releases the lock.
                     * <p><b>Implementation Considerations</b>
                     * <p>A {@code Lock} implementation will usually impose
                     * restrictions on which thread can release a lock (typically only the
                     * holder of the lock can release it) and may throw
                     * an (unchecked) exception if the restriction is violated.
                     * Any restrictions and the exception
                     * type must be documented by that {@code Lock} implementation.
                     */
                    // @ts-ignore
                     unlock(): void;
                    /**
                     * Returns a new {@link Condition} instance that is bound to this
                     * {@code Lock} instance.
                     * <p>Before waiting on the condition the lock must be held by the
                     * current thread.
                     * A call to {@link Condition#await()} will atomically release the lock
                     * before waiting and re-acquire the lock before the wait returns.
                     * <p><b>Implementation Considerations</b>
                     * <p>The exact operation of the {@link Condition} instance depends on
                     * the {@code Lock} implementation and must be documented by that
                     * implementation.
                     */
                    // @ts-ignore
                     newCondition(): java.util.concurrent.locks.Condition;
                }
            }
        }
    }
}
