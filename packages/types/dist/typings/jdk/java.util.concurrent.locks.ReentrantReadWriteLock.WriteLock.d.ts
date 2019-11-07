declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                namespace ReentrantReadWriteLock {
                    // @ts-ignore
                     class WriteLock extends java.lang.Object {
                        /**
                         * Constructor for use by subclasses
                         */
                        // @ts-ignore
                        constructor(lock: java.util.concurrent.locks.ReentrantReadWriteLock)
                        /**
                         * Acquires the write lock.
                         * <p>Acquires the write lock if neither the read nor write lock
                         * are held by another thread
                         * and returns immediately, setting the write lock hold count to
                         * one.
                         * <p>If the current thread already holds the write lock then the
                         * hold count is incremented by one and the method returns
                         * immediately.
                         * <p>If the lock is held by another thread then the current
                         * thread becomes disabled for thread scheduling purposes and
                         * lies dormant until the write lock has been acquired, at which
                         * time the write lock hold count is set to one.
                         */
                        // @ts-ignore
                        public lock(): void;
                        /**
                         * Acquires the write lock unless the current thread is
                         * {@linkplain Thread#interrupt interrupted}.
                         * <p>Acquires the write lock if neither the read nor write lock
                         * are held by another thread
                         * and returns immediately, setting the write lock hold count to
                         * one.
                         * <p>If the current thread already holds this lock then the
                         * hold count is incremented by one and the method returns
                         * immediately.
                         * <p>If the lock is held by another thread then the current
                         * thread becomes disabled for thread scheduling purposes and
                         * lies dormant until one of two things happens:
                         * <ul>
                         * <li>The write lock is acquired by the current thread; or
                         * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                         * the current thread.
                         * </ul>
                         * <p>If the write lock is acquired by the current thread then the
                         * lock hold count is set to one.
                         * <p>If the current thread:
                         * <ul>
                         * <li>has its interrupted status set on entry to this method;
                         * or
                         * <li>is {@linkplain Thread#interrupt interrupted} while
                         * acquiring the write lock,
                         * </ul>
                         * then {@link InterruptedException} is thrown and the current
                         * thread's interrupted status is cleared.
                         * <p>In this implementation, as this method is an explicit
                         * interruption point, preference is given to responding to
                         * the interrupt over normal or reentrant acquisition of the
                         * lock.
                         */
                        // @ts-ignore
                        public lockInterruptibly(): void;
                        /**
                         * Acquires the write lock only if it is not held by another thread
                         * at the time of invocation.
                         * <p>Acquires the write lock if neither the read nor write lock
                         * are held by another thread
                         * and returns immediately with the value {@code true},
                         * setting the write lock hold count to one. Even when this lock has
                         * been set to use a fair ordering policy, a call to
                         * {@code tryLock()} <em>will</em> immediately acquire the
                         * lock if it is available, whether or not other threads are
                         * currently waiting for the write lock.  This &quot;barging&quot;
                         * behavior can be useful in certain circumstances, even
                         * though it breaks fairness. If you want to honor the
                         * fairness setting for this lock, then use {@link
                         * #tryLock(long, TimeUnit) tryLock(0, TimeUnit.SECONDS) }
                         * which is almost equivalent (it also detects interruption).
                         * <p>If the current thread already holds this lock then the
                         * hold count is incremented by one and the method returns
                         * {@code true}.
                         * <p>If the lock is held by another thread then this method
                         * will return immediately with the value {@code false}.
                         */
                        // @ts-ignore
                        public tryLock(): boolean;
                        /**
                         * Acquires the write lock if it is not held by another thread
                         * within the given waiting time and the current thread has
                         * not been {@linkplain Thread#interrupt interrupted}.
                         * <p>Acquires the write lock if neither the read nor write lock
                         * are held by another thread
                         * and returns immediately with the value {@code true},
                         * setting the write lock hold count to one. If this lock has been
                         * set to use a fair ordering policy then an available lock
                         * <em>will not</em> be acquired if any other threads are
                         * waiting for the write lock. This is in contrast to the {@link
                         * #tryLock()} method. If you want a timed {@code tryLock}
                         * that does permit barging on a fair lock then combine the
                         * timed and un-timed forms together:
                         * <pre> {@code
                         * if (lock.tryLock() ||
                         * lock.tryLock(timeout, unit)) {
                         * ...
                         * }}</pre>
                         * <p>If the current thread already holds this lock then the
                         * hold count is incremented by one and the method returns
                         * {@code true}.
                         * <p>If the lock is held by another thread then the current
                         * thread becomes disabled for thread scheduling purposes and
                         * lies dormant until one of three things happens:
                         * <ul>
                         * <li>The write lock is acquired by the current thread; or
                         * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                         * the current thread; or
                         * <li>The specified waiting time elapses
                         * </ul>
                         * <p>If the write lock is acquired then the value {@code true} is
                         * returned and the write lock hold count is set to one.
                         * <p>If the current thread:
                         * <ul>
                         * <li>has its interrupted status set on entry to this method;
                         * or
                         * <li>is {@linkplain Thread#interrupt interrupted} while
                         * acquiring the write lock,
                         * </ul>
                         * then {@link InterruptedException} is thrown and the current
                         * thread's interrupted status is cleared.
                         * <p>If the specified waiting time elapses then the value
                         * {@code false} is returned.  If the time is less than or
                         * equal to zero, the method will not wait at all.
                         * <p>In this implementation, as this method is an explicit
                         * interruption point, preference is given to responding to
                         * the interrupt over normal or reentrant acquisition of the
                         * lock, and over reporting the elapse of the waiting time.
                         */
                        // @ts-ignore
                        public tryLock(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                        /**
                         * Attempts to release this lock.
                         * <p>If the current thread is the holder of this lock then
                         * the hold count is decremented. If the hold count is now
                         * zero then the lock is released.  If the current thread is
                         * not the holder of this lock then {@link
                         * IllegalMonitorStateException} is thrown.
                         */
                        // @ts-ignore
                        public unlock(): void;
                        /**
                         * Returns a {@link Condition} instance for use with this
                         * {@link Lock} instance.
                         * <p>The returned {@link Condition} instance supports the same
                         * usages as do the {@link Object} monitor methods ({@link
                         * Object#wait() wait}, {@link Object#notify notify}, and {@link
                         * Object#notifyAll notifyAll}) when used with the built-in
                         * monitor lock.
                         * <ul>
                         * <li>If this write lock is not held when any {@link
                         * Condition} method is called then an {@link
                         * IllegalMonitorStateException} is thrown.  (Read locks are
                         * held independently of write locks, so are not checked or
                         * affected. However it is essentially always an error to
                         * invoke a condition waiting method when the current thread
                         * has also acquired read locks, since other threads that
                         * could unblock it will not be able to acquire the write
                         * lock.)
                         * <li>When the condition {@linkplain Condition#await() waiting}
                         * methods are called the write lock is released and, before
                         * they return, the write lock is reacquired and the lock hold
                         * count restored to what it was when the method was called.
                         * <li>If a thread is {@linkplain Thread#interrupt interrupted} while
                         * waiting then the wait will terminate, an {@link
                         * InterruptedException} will be thrown, and the thread's
                         * interrupted status will be cleared.
                         * <li> Waiting threads are signalled in FIFO order.
                         * <li>The ordering of lock reacquisition for threads returning
                         * from waiting methods is the same as for threads initially
                         * acquiring the lock, which is in the default case not specified,
                         * but for <em>fair</em> locks favors those threads that have been
                         * waiting the longest.
                         * </ul>
                         */
                        // @ts-ignore
                        public newCondition(): java.util.concurrent.locks.Condition;
                        /**
                         * Returns a string identifying this lock, as well as its lock
                         * state.  The state, in brackets includes either the String
                         * {@code "Unlocked"} or the String {@code "Locked by"}
                         * followed by the {@linkplain Thread#getName name} of the owning thread.
                         */
                        // @ts-ignore
                        public toString(): string;
                        /**
                         * Queries if this write lock is held by the current thread.
                         * Identical in effect to {@link
                         * ReentrantReadWriteLock#isWriteLockedByCurrentThread}.
                         */
                        // @ts-ignore
                        public isHeldByCurrentThread(): boolean;
                        /**
                         * Queries the number of holds on this write lock by the current
                         * thread.  A thread has a hold on a lock for each lock action
                         * that is not matched by an unlock action.  Identical in effect
                         * to {@link ReentrantReadWriteLock#getWriteHoldCount}.
                         */
                        // @ts-ignore
                        public getHoldCount(): number;
                    }
                }
            }
        }
    }
}
