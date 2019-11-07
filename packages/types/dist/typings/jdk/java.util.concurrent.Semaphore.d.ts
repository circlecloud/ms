// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class Semaphore extends java.lang.Object {
                /**
                 * Creates a {@code Semaphore} with the given number of
                 * permits and nonfair fairness setting.
                 */
                // @ts-ignore
                constructor(permits: number)
                /**
                 * Creates a {@code Semaphore} with the given number of
                 * permits and the given fairness setting.
                 */
                // @ts-ignore
                constructor(permits: number, fair: boolean)
                /**
                 * Acquires a permit from this semaphore, blocking until one is
                 * available, or the thread is {@linkplain Thread#interrupt interrupted}.
                 * <p>Acquires a permit, if one is available and returns immediately,
                 * reducing the number of available permits by one.
                 * <p>If no permit is available then the current thread becomes
                 * disabled for thread scheduling purposes and lies dormant until
                 * one of two things happens:
                 * <ul>
                 * <li>Some other thread invokes the {@link #release} method for this
                 * semaphore and the current thread is next to be assigned a permit; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread.
                 * </ul>
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                 * for a permit,
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 */
                // @ts-ignore
                public acquire(): void;
                /**
                 * Acquires a permit from this semaphore, blocking until one is
                 * available.
                 * <p>Acquires a permit, if one is available and returns immediately,
                 * reducing the number of available permits by one.
                 * <p>If no permit is available then the current thread becomes
                 * disabled for thread scheduling purposes and lies dormant until
                 * some other thread invokes the {@link #release} method for this
                 * semaphore and the current thread is next to be assigned a permit.
                 * <p>If the current thread is {@linkplain Thread#interrupt interrupted}
                 * while waiting for a permit then it will continue to wait, but the
                 * time at which the thread is assigned a permit may change compared to
                 * the time it would have received the permit had no interruption
                 * occurred.  When the thread does return from this method its interrupt
                 * status will be set.
                 */
                // @ts-ignore
                public acquireUninterruptibly(): void;
                /**
                 * Acquires a permit from this semaphore, only if one is available at the
                 * time of invocation.
                 * <p>Acquires a permit, if one is available and returns immediately,
                 * with the value {@code true},
                 * reducing the number of available permits by one.
                 * <p>If no permit is available then this method will return
                 * immediately with the value {@code false}.
                 * <p>Even when this semaphore has been set to use a
                 * fair ordering policy, a call to {@code tryAcquire()} <em>will</em>
                 * immediately acquire a permit if one is available, whether or not
                 * other threads are currently waiting.
                 * This &quot;barging&quot; behavior can be useful in certain
                 * circumstances, even though it breaks fairness. If you want to honor
                 * the fairness setting, then use
                 * {@link #tryAcquire(long, TimeUnit) tryAcquire(0, TimeUnit.SECONDS) }
                 * which is almost equivalent (it also detects interruption).
                 */
                // @ts-ignore
                public tryAcquire(): boolean;
                /**
                 * Acquires a permit from this semaphore, if one becomes available
                 * within the given waiting time and the current thread has not
                 * been {@linkplain Thread#interrupt interrupted}.
                 * <p>Acquires a permit, if one is available and returns immediately,
                 * with the value {@code true},
                 * reducing the number of available permits by one.
                 * <p>If no permit is available then the current thread becomes
                 * disabled for thread scheduling purposes and lies dormant until
                 * one of three things happens:
                 * <ul>
                 * <li>Some other thread invokes the {@link #release} method for this
                 * semaphore and the current thread is next to be assigned a permit; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread; or
                 * <li>The specified waiting time elapses.
                 * </ul>
                 * <p>If a permit is acquired then the value {@code true} is returned.
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                 * to acquire a permit,
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 * <p>If the specified waiting time elapses then the value {@code false}
                 * is returned.  If the time is less than or equal to zero, the method
                 * will not wait at all.
                 */
                // @ts-ignore
                public tryAcquire(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Releases a permit, returning it to the semaphore.
                 * <p>Releases a permit, increasing the number of available permits by
                 * one.  If any threads are trying to acquire a permit, then one is
                 * selected and given the permit that was just released.  That thread
                 * is (re)enabled for thread scheduling purposes.
                 * <p>There is no requirement that a thread that releases a permit must
                 * have acquired that permit by calling {@link #acquire}.
                 * Correct usage of a semaphore is established by programming convention
                 * in the application.
                 */
                // @ts-ignore
                public release(): void;
                /**
                 * Acquires the given number of permits from this semaphore,
                 * blocking until all are available,
                 * or the thread is {@linkplain Thread#interrupt interrupted}.
                 * <p>Acquires the given number of permits, if they are available,
                 * and returns immediately, reducing the number of available permits
                 * by the given amount.
                 * <p>If insufficient permits are available then the current thread becomes
                 * disabled for thread scheduling purposes and lies dormant until
                 * one of two things happens:
                 * <ul>
                 * <li>Some other thread invokes one of the {@link #release() release}
                 * methods for this semaphore, the current thread is next to be assigned
                 * permits and the number of available permits satisfies this request; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread.
                 * </ul>
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                 * for a permit,
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 * Any permits that were to be assigned to this thread are instead
                 * assigned to other threads trying to acquire permits, as if
                 * permits had been made available by a call to {@link #release()}.
                 */
                // @ts-ignore
                public acquire(permits: number): void;
                /**
                 * Acquires the given number of permits from this semaphore,
                 * blocking until all are available.
                 * <p>Acquires the given number of permits, if they are available,
                 * and returns immediately, reducing the number of available permits
                 * by the given amount.
                 * <p>If insufficient permits are available then the current thread becomes
                 * disabled for thread scheduling purposes and lies dormant until
                 * some other thread invokes one of the {@link #release() release}
                 * methods for this semaphore, the current thread is next to be assigned
                 * permits and the number of available permits satisfies this request.
                 * <p>If the current thread is {@linkplain Thread#interrupt interrupted}
                 * while waiting for permits then it will continue to wait and its
                 * position in the queue is not affected.  When the thread does return
                 * from this method its interrupt status will be set.
                 */
                // @ts-ignore
                public acquireUninterruptibly(permits: number): void;
                /**
                 * Acquires the given number of permits from this semaphore, only
                 * if all are available at the time of invocation.
                 * <p>Acquires the given number of permits, if they are available, and
                 * returns immediately, with the value {@code true},
                 * reducing the number of available permits by the given amount.
                 * <p>If insufficient permits are available then this method will return
                 * immediately with the value {@code false} and the number of available
                 * permits is unchanged.
                 * <p>Even when this semaphore has been set to use a fair ordering
                 * policy, a call to {@code tryAcquire} <em>will</em>
                 * immediately acquire a permit if one is available, whether or
                 * not other threads are currently waiting.  This
                 * &quot;barging&quot; behavior can be useful in certain
                 * circumstances, even though it breaks fairness. If you want to
                 * honor the fairness setting, then use {@link #tryAcquire(int,
                 * long, TimeUnit) tryAcquire(permits, 0, TimeUnit.SECONDS) }
                 * which is almost equivalent (it also detects interruption).
                 */
                // @ts-ignore
                public tryAcquire(permits: number): boolean;
                /**
                 * Acquires the given number of permits from this semaphore, if all
                 * become available within the given waiting time and the current
                 * thread has not been {@linkplain Thread#interrupt interrupted}.
                 * <p>Acquires the given number of permits, if they are available and
                 * returns immediately, with the value {@code true},
                 * reducing the number of available permits by the given amount.
                 * <p>If insufficient permits are available then
                 * the current thread becomes disabled for thread scheduling
                 * purposes and lies dormant until one of three things happens:
                 * <ul>
                 * <li>Some other thread invokes one of the {@link #release() release}
                 * methods for this semaphore, the current thread is next to be assigned
                 * permits and the number of available permits satisfies this request; or
                 * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                 * the current thread; or
                 * <li>The specified waiting time elapses.
                 * </ul>
                 * <p>If the permits are acquired then the value {@code true} is returned.
                 * <p>If the current thread:
                 * <ul>
                 * <li>has its interrupted status set on entry to this method; or
                 * <li>is {@linkplain Thread#interrupt interrupted} while waiting
                 * to acquire the permits,
                 * </ul>
                 * then {@link InterruptedException} is thrown and the current thread's
                 * interrupted status is cleared.
                 * Any permits that were to be assigned to this thread, are instead
                 * assigned to other threads trying to acquire permits, as if
                 * the permits had been made available by a call to {@link #release()}.
                 * <p>If the specified waiting time elapses then the value {@code false}
                 * is returned.  If the time is less than or equal to zero, the method
                 * will not wait at all.  Any permits that were to be assigned to this
                 * thread, are instead assigned to other threads trying to acquire
                 * permits, as if the permits had been made available by a call to
                 * {@link #release()}.
                 */
                // @ts-ignore
                public tryAcquire(permits: number, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Releases the given number of permits, returning them to the semaphore.
                 * <p>Releases the given number of permits, increasing the number of
                 * available permits by that amount.
                 * If any threads are trying to acquire permits, then one
                 * is selected and given the permits that were just released.
                 * If the number of available permits satisfies that thread's request
                 * then that thread is (re)enabled for thread scheduling purposes;
                 * otherwise the thread will wait until sufficient permits are available.
                 * If there are still permits available
                 * after this thread's request has been satisfied, then those permits
                 * are assigned in turn to other threads trying to acquire permits.
                 * <p>There is no requirement that a thread that releases a permit must
                 * have acquired that permit by calling {@link Semaphore#acquire acquire}.
                 * Correct usage of a semaphore is established by programming convention
                 * in the application.
                 */
                // @ts-ignore
                public release(permits: number): void;
                /**
                 * Returns the current number of permits available in this semaphore.
                 * <p>This method is typically used for debugging and testing purposes.
                 */
                // @ts-ignore
                public availablePermits(): number;
                /**
                 * Acquires and returns all permits that are immediately available.
                 */
                // @ts-ignore
                public drainPermits(): number;
                /**
                 * Shrinks the number of available permits by the indicated
                 * reduction. This method can be useful in subclasses that use
                 * semaphores to track resources that become unavailable. This
                 * method differs from {@code acquire} in that it does not block
                 * waiting for permits to become available.
                 */
                // @ts-ignore
                protected reducePermits(reduction: number): void;
                /**
                 * Returns {@code true} if this semaphore has fairness set true.
                 */
                // @ts-ignore
                public isFair(): boolean;
                /**
                 * Queries whether any threads are waiting to acquire. Note that
                 * because cancellations may occur at any time, a {@code true}
                 * return does not guarantee that any other thread will ever
                 * acquire.  This method is designed primarily for use in
                 * monitoring of the system state.
                 */
                // @ts-ignore
                public hasQueuedThreads(): boolean;
                /**
                 * Returns an estimate of the number of threads waiting to acquire.
                 * The value is only an estimate because the number of threads may
                 * change dynamically while this method traverses internal data
                 * structures.  This method is designed for use in monitoring of the
                 * system state, not for synchronization control.
                 */
                // @ts-ignore
                public getQueueLength(): number;
                /**
                 * Returns a collection containing threads that may be waiting to acquire.
                 * Because the actual set of threads may change dynamically while
                 * constructing this result, the returned collection is only a best-effort
                 * estimate.  The elements of the returned collection are in no particular
                 * order.  This method is designed to facilitate construction of
                 * subclasses that provide more extensive monitoring facilities.
                 */
                // @ts-ignore
                protected getQueuedThreads(): java.util.Collection;
                /**
                 * Returns a string identifying this semaphore, as well as its state.
                 * The state, in brackets, includes the String {@code "Permits ="}
                 * followed by the number of permits.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
