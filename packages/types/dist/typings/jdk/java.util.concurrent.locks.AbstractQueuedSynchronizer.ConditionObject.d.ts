declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                namespace AbstractQueuedSynchronizer {
                    // @ts-ignore
                     class ConditionObject extends java.lang.Object {
                        /**
                         * Creates a new {@code ConditionObject} instance.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Moves the longest-waiting thread, if one exists, from the
                         * wait queue for this condition to the wait queue for the
                         * owning lock.
                         */
                        // @ts-ignore
                        public signal(): void;
                        /**
                         * Moves all threads from the wait queue for this condition to
                         * the wait queue for the owning lock.
                         */
                        // @ts-ignore
                        public signalAll(): void;
                        /**
                         * Implements uninterruptible condition wait.
                         * <ol>
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * </ol>
                         */
                        // @ts-ignore
                        public awaitUninterruptibly(): void;
                        /**
                         * Implements interruptible condition wait.
                         * <ol>
                         * <li> If current thread is interrupted, throw InterruptedException.
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled or interrupted.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * <li> If interrupted while blocked in step 4, throw InterruptedException.
                         * </ol>
                         */
                        // @ts-ignore
                        public await(): void;
                        /**
                         * Implements timed condition wait.
                         * <ol>
                         * <li> If current thread is interrupted, throw InterruptedException.
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled, interrupted, or timed out.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * <li> If interrupted while blocked in step 4, throw InterruptedException.
                         * </ol>
                         */
                        // @ts-ignore
                        public awaitNanos(nanosTimeout: number): number;
                        /**
                         * Implements absolute timed condition wait.
                         * <ol>
                         * <li> If current thread is interrupted, throw InterruptedException.
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled, interrupted, or timed out.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * <li> If interrupted while blocked in step 4, throw InterruptedException.
                         * <li> If timed out while blocked in step 4, return false, else true.
                         * </ol>
                         */
                        // @ts-ignore
                        public awaitUntil(deadline: java.util.Date): boolean;
                        /**
                         * Implements timed condition wait.
                         * <ol>
                         * <li> If current thread is interrupted, throw InterruptedException.
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled, interrupted, or timed out.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * <li> If interrupted while blocked in step 4, throw InterruptedException.
                         * <li> If timed out while blocked in step 4, return false, else true.
                         * </ol>
                         */
                        // @ts-ignore
                        public await(time: number, unit: java.util.concurrent.TimeUnit): boolean;
                        /**
                         * Queries whether any threads are waiting on this condition.
                         * Implements {@link AbstractQueuedSynchronizer#hasWaiters(ConditionObject)}.
                         */
                        // @ts-ignore
                        protected hasWaiters(): boolean;
                        /**
                         * Returns an estimate of the number of threads waiting on
                         * this condition.
                         * Implements {@link AbstractQueuedSynchronizer#getWaitQueueLength(ConditionObject)}.
                         */
                        // @ts-ignore
                        protected getWaitQueueLength(): number;
                        /**
                         * Returns a collection containing those threads that may be
                         * waiting on this Condition.
                         * Implements {@link AbstractQueuedSynchronizer#getWaitingThreads(ConditionObject)}.
                         */
                        // @ts-ignore
                        protected getWaitingThreads(): java.util.Collection;
                    }
                }
            }
        }
    }
}
