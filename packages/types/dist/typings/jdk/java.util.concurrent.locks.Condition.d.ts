declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                // @ts-ignore
                interface Condition {
                    /**
                     * Causes the current thread to wait until it is signalled or
                     * {@linkplain Thread#interrupt interrupted}.
                     * <p>The lock associated with this {@code Condition} is atomically
                     * released and the current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until <em>one</em> of four things happens:
                     * <ul>
                     * <li>Some other thread invokes the {@link #signal} method for this
                     * {@code Condition} and the current thread happens to be chosen as the
                     * thread to be awakened; or
                     * <li>Some other thread invokes the {@link #signalAll} method for this
                     * {@code Condition}; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts} the
                     * current thread, and interruption of thread suspension is supported; or
                     * <li>A &quot;<em>spurious wakeup</em>&quot; occurs.
                     * </ul>
                     * <p>In all cases, before this method can return the current thread must
                     * re-acquire the lock associated with this condition. When the
                     * thread returns it is <em>guaranteed</em> to hold this lock.
                     * <p>If the current thread:
                     * <ul>
                     * <li>has its interrupted status set on entry to this method; or
                     * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                     * and interruption of thread suspension is supported,
                     * </ul>
                     * then {@link InterruptedException} is thrown and the current thread's
                     * interrupted status is cleared. It is not specified, in the first
                     * case, whether or not the test for interruption occurs before the lock
                     * is released.
                     * <p><b>Implementation Considerations</b>
                     * <p>The current thread is assumed to hold the lock associated with this
                     * {@code Condition} when this method is called.
                     * It is up to the implementation to determine if this is
                     * the case and if not, how to respond. Typically, an exception will be
                     * thrown (such as {@link IllegalMonitorStateException}) and the
                     * implementation must document that fact.
                     * <p>An implementation can favor responding to an interrupt over normal
                     * method return in response to a signal. In that case the implementation
                     * must ensure that the signal is redirected to another waiting thread, if
                     * there is one.
                     */
                    // @ts-ignore
                     await(): void;
                    /**
                     * Causes the current thread to wait until it is signalled.
                     * <p>The lock associated with this condition is atomically
                     * released and the current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until <em>one</em> of three things happens:
                     * <ul>
                     * <li>Some other thread invokes the {@link #signal} method for this
                     * {@code Condition} and the current thread happens to be chosen as the
                     * thread to be awakened; or
                     * <li>Some other thread invokes the {@link #signalAll} method for this
                     * {@code Condition}; or
                     * <li>A &quot;<em>spurious wakeup</em>&quot; occurs.
                     * </ul>
                     * <p>In all cases, before this method can return the current thread must
                     * re-acquire the lock associated with this condition. When the
                     * thread returns it is <em>guaranteed</em> to hold this lock.
                     * <p>If the current thread's interrupted status is set when it enters
                     * this method, or it is {@linkplain Thread#interrupt interrupted}
                     * while waiting, it will continue to wait until signalled. When it finally
                     * returns from this method its interrupted status will still
                     * be set.
                     * <p><b>Implementation Considerations</b>
                     * <p>The current thread is assumed to hold the lock associated with this
                     * {@code Condition} when this method is called.
                     * It is up to the implementation to determine if this is
                     * the case and if not, how to respond. Typically, an exception will be
                     * thrown (such as {@link IllegalMonitorStateException}) and the
                     * implementation must document that fact.
                     */
                    // @ts-ignore
                     awaitUninterruptibly(): void;
                    /**
                     * Causes the current thread to wait until it is signalled or interrupted,
                     * or the specified waiting time elapses.
                     * <p>The lock associated with this condition is atomically
                     * released and the current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until <em>one</em> of five things happens:
                     * <ul>
                     * <li>Some other thread invokes the {@link #signal} method for this
                     * {@code Condition} and the current thread happens to be chosen as the
                     * thread to be awakened; or
                     * <li>Some other thread invokes the {@link #signalAll} method for this
                     * {@code Condition}; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts} the
                     * current thread, and interruption of thread suspension is supported; or
                     * <li>The specified waiting time elapses; or
                     * <li>A &quot;<em>spurious wakeup</em>&quot; occurs.
                     * </ul>
                     * <p>In all cases, before this method can return the current thread must
                     * re-acquire the lock associated with this condition. When the
                     * thread returns it is <em>guaranteed</em> to hold this lock.
                     * <p>If the current thread:
                     * <ul>
                     * <li>has its interrupted status set on entry to this method; or
                     * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                     * and interruption of thread suspension is supported,
                     * </ul>
                     * then {@link InterruptedException} is thrown and the current thread's
                     * interrupted status is cleared. It is not specified, in the first
                     * case, whether or not the test for interruption occurs before the lock
                     * is released.
                     * <p>The method returns an estimate of the number of nanoseconds
                     * remaining to wait given the supplied {@code nanosTimeout}
                     * value upon return, or a value less than or equal to zero if it
                     * timed out. This value can be used to determine whether and how
                     * long to re-wait in cases where the wait returns but an awaited
                     * condition still does not hold. Typical uses of this method take
                     * the following form:
                     * <pre> {@code
                     * boolean aMethod(long timeout, TimeUnit unit) {
                     * long nanos = unit.toNanos(timeout);
                     * lock.lock();
                     * try {
                     * while (!conditionBeingWaitedFor()) {
                     * if (nanos <= 0L)
                     * return false;
                     * nanos = theCondition.awaitNanos(nanos);
                     * }
                     * // ...
                     * } finally {
                     * lock.unlock();
                     * }
                     * }}</pre>
                     * <p>Design note: This method requires a nanosecond argument so
                     * as to avoid truncation errors in reporting remaining times.
                     * Such precision loss would make it difficult for programmers to
                     * ensure that total waiting times are not systematically shorter
                     * than specified when re-waits occur.
                     * <p><b>Implementation Considerations</b>
                     * <p>The current thread is assumed to hold the lock associated with this
                     * {@code Condition} when this method is called.
                     * It is up to the implementation to determine if this is
                     * the case and if not, how to respond. Typically, an exception will be
                     * thrown (such as {@link IllegalMonitorStateException}) and the
                     * implementation must document that fact.
                     * <p>An implementation can favor responding to an interrupt over normal
                     * method return in response to a signal, or over indicating the elapse
                     * of the specified waiting time. In either case the implementation
                     * must ensure that the signal is redirected to another waiting thread, if
                     * there is one.
                     */
                    // @ts-ignore
                     awaitNanos(nanosTimeout: number): number;
                    /**
                     * Causes the current thread to wait until it is signalled or interrupted,
                     * or the specified waiting time elapses. This method is behaviorally
                     * equivalent to:
                     * <pre> {@code awaitNanos(unit.toNanos(time)) > 0}</pre>
                     */
                    // @ts-ignore
                     await(time: number, unit: java.util.concurrent.TimeUnit): boolean;
                    /**
                     * Causes the current thread to wait until it is signalled or interrupted,
                     * or the specified deadline elapses.
                     * <p>The lock associated with this condition is atomically
                     * released and the current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until <em>one</em> of five things happens:
                     * <ul>
                     * <li>Some other thread invokes the {@link #signal} method for this
                     * {@code Condition} and the current thread happens to be chosen as the
                     * thread to be awakened; or
                     * <li>Some other thread invokes the {@link #signalAll} method for this
                     * {@code Condition}; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts} the
                     * current thread, and interruption of thread suspension is supported; or
                     * <li>The specified deadline elapses; or
                     * <li>A &quot;<em>spurious wakeup</em>&quot; occurs.
                     * </ul>
                     * <p>In all cases, before this method can return the current thread must
                     * re-acquire the lock associated with this condition. When the
                     * thread returns it is <em>guaranteed</em> to hold this lock.
                     * <p>If the current thread:
                     * <ul>
                     * <li>has its interrupted status set on entry to this method; or
                     * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                     * and interruption of thread suspension is supported,
                     * </ul>
                     * then {@link InterruptedException} is thrown and the current thread's
                     * interrupted status is cleared. It is not specified, in the first
                     * case, whether or not the test for interruption occurs before the lock
                     * is released.
                     * <p>The return value indicates whether the deadline has elapsed,
                     * which can be used as follows:
                     * <pre> {@code
                     * boolean aMethod(Date deadline) {
                     * boolean stillWaiting = true;
                     * lock.lock();
                     * try {
                     * while (!conditionBeingWaitedFor()) {
                     * if (!stillWaiting)
                     * return false;
                     * stillWaiting = theCondition.awaitUntil(deadline);
                     * }
                     * // ...
                     * } finally {
                     * lock.unlock();
                     * }
                     * }}</pre>
                     * <p><b>Implementation Considerations</b>
                     * <p>The current thread is assumed to hold the lock associated with this
                     * {@code Condition} when this method is called.
                     * It is up to the implementation to determine if this is
                     * the case and if not, how to respond. Typically, an exception will be
                     * thrown (such as {@link IllegalMonitorStateException}) and the
                     * implementation must document that fact.
                     * <p>An implementation can favor responding to an interrupt over normal
                     * method return in response to a signal, or over indicating the passing
                     * of the specified deadline. In either case the implementation
                     * must ensure that the signal is redirected to another waiting thread, if
                     * there is one.
                     */
                    // @ts-ignore
                     awaitUntil(deadline: java.util.Date): boolean;
                    /**
                     * Wakes up one waiting thread.
                     * <p>If any threads are waiting on this condition then one
                     * is selected for waking up. That thread must then re-acquire the
                     * lock before returning from {@code await}.
                     * <p><b>Implementation Considerations</b>
                     * <p>An implementation may (and typically does) require that the
                     * current thread hold the lock associated with this {@code
                     * Condition} when this method is called. Implementations must
                     * document this precondition and any actions taken if the lock is
                     * not held. Typically, an exception such as {@link
                     * IllegalMonitorStateException} will be thrown.
                     */
                    // @ts-ignore
                     signal(): void;
                    /**
                     * Wakes up all waiting threads.
                     * <p>If any threads are waiting on this condition then they are
                     * all woken up. Each thread must re-acquire the lock before it can
                     * return from {@code await}.
                     * <p><b>Implementation Considerations</b>
                     * <p>An implementation may (and typically does) require that the
                     * current thread hold the lock associated with this {@code
                     * Condition} when this method is called. Implementations must
                     * document this precondition and any actions taken if the lock is
                     * not held. Typically, an exception such as {@link
                     * IllegalMonitorStateException} will be thrown.
                     */
                    // @ts-ignore
                     signalAll(): void;
                }
            }
        }
    }
}
