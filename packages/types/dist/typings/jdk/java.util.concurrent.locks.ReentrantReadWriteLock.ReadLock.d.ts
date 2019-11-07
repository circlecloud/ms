declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                namespace ReentrantReadWriteLock {
                    // @ts-ignore
                     class ReadLock extends java.lang.Object {
                        /**
                         * Constructor for use by subclasses
                         */
                        // @ts-ignore
                        constructor(lock: java.util.concurrent.locks.ReentrantReadWriteLock)
                        /**
                         * Acquires the read lock.
                         * <p>Acquires the read lock if the write lock is not held by
                         * another thread and returns immediately.
                         * <p>If the write lock is held by another thread then
                         * the current thread becomes disabled for thread scheduling
                         * purposes and lies dormant until the read lock has been acquired.
                         */
                        // @ts-ignore
                        public lock(): void;
                        /**
                         * Acquires the read lock unless the current thread is
                         * {@linkplain Thread#interrupt interrupted}.
                         * <p>Acquires the read lock if the write lock is not held
                         * by another thread and returns immediately.
                         * <p>If the write lock is held by another thread then the
                         * current thread becomes disabled for thread scheduling
                         * purposes and lies dormant until one of two things happens:
                         * <ul>
                         * <li>The read lock is acquired by the current thread; or
                         * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                         * the current thread.
                         * </ul>
                         * <p>If the current thread:
                         * <ul>
                         * <li>has its interrupted status set on entry to this method; or
                         * <li>is {@linkplain Thread#interrupt interrupted} while
                         * acquiring the read lock,
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
                         * Acquires the read lock only if the write lock is not held by
                         * another thread at the time of invocation.
                         * <p>Acquires the read lock if the write lock is not held by
                         * another thread and returns immediately with the value
                         * {@code true}. Even when this lock has been set to use a
                         * fair ordering policy, a call to {@code tryLock()}
                         * <em>will</em> immediately acquire the read lock if it is
                         * available, whether or not other threads are currently
                         * waiting for the read lock.  This &quot;barging&quot; behavior
                         * can be useful in certain circumstances, even though it
                         * breaks fairness. If you want to honor the fairness setting
                         * for this lock, then use {@link #tryLock(long, TimeUnit)
                         * tryLock(0, TimeUnit.SECONDS) } which is almost equivalent
                         * (it also detects interruption).
                         * <p>If the write lock is held by another thread then
                         * this method will return immediately with the value
                         * {@code false}.
                         */
                        // @ts-ignore
                        public tryLock(): boolean;
                        /**
                         * Acquires the read lock if the write lock is not held by
                         * another thread within the given waiting time and the
                         * current thread has not been {@linkplain Thread#interrupt
                         * interrupted}.
                         * <p>Acquires the read lock if the write lock is not held by
                         * another thread and returns immediately with the value
                         * {@code true}. If this lock has been set to use a fair
                         * ordering policy then an available lock <em>will not</em> be
                         * acquired if any other threads are waiting for the
                         * lock. This is in contrast to the {@link #tryLock()}
                         * method. If you want a timed {@code tryLock} that does
                         * permit barging on a fair lock then combine the timed and
                         * un-timed forms together:
                         * <pre> {@code
                         * if (lock.tryLock() ||
                         * lock.tryLock(timeout, unit)) {
                         * ...
                         * }}</pre>
                         * <p>If the write lock is held by another thread then the
                         * current thread becomes disabled for thread scheduling
                         * purposes and lies dormant until one of three things happens:
                         * <ul>
                         * <li>The read lock is acquired by the current thread; or
                         * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                         * the current thread; or
                         * <li>The specified waiting time elapses.
                         * </ul>
                         * <p>If the read lock is acquired then the value {@code true} is
                         * returned.
                         * <p>If the current thread:
                         * <ul>
                         * <li>has its interrupted status set on entry to this method; or
                         * <li>is {@linkplain Thread#interrupt interrupted} while
                         * acquiring the read lock,
                         * </ul> then {@link InterruptedException} is thrown and the
                         * current thread's interrupted status is cleared.
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
                         * <p>If the number of readers is now zero then the lock
                         * is made available for write lock attempts.
                         */
                        // @ts-ignore
                        public unlock(): void;
                        /**
                         * Throws {@code UnsupportedOperationException} because
                         * {@code ReadLocks} do not support conditions.
                         */
                        // @ts-ignore
                        public newCondition(): java.util.concurrent.locks.Condition;
                        /**
                         * Returns a string identifying this lock, as well as its lock state.
                         * The state, in brackets, includes the String {@code "Read locks ="}
                         * followed by the number of held read locks.
                         */
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
