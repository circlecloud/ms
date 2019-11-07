declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ForkJoinWorkerThread extends java.lang.Thread {
                /**
                 * Creates a ForkJoinWorkerThread operating in the given pool.
                 */
                // @ts-ignore
                constructor(pool: java.util.concurrent.ForkJoinPool)
                /**
                 * Returns the pool hosting this thread.
                 */
                // @ts-ignore
                public getPool(): java.util.concurrent.ForkJoinPool;
                /**
                 * Returns the unique index number of this thread in its pool.
                 * The returned value ranges from zero to the maximum number of
                 * threads (minus one) that may exist in the pool, and does not
                 * change during the lifetime of the thread.  This method may be
                 * useful for applications that track status or collect results
                 * per-worker-thread rather than per-task.
                 */
                // @ts-ignore
                public getPoolIndex(): number;
                /**
                 * Initializes internal state after construction but before
                 * processing any tasks. If you override this method, you must
                 * invoke {@code super.onStart()} at the beginning of the method.
                 * Initialization requires care: Most fields must have legal
                 * default values, to ensure that attempted accesses from other
                 * threads work correctly even before this thread starts
                 * processing tasks.
                 */
                // @ts-ignore
                protected onStart(): void;
                /**
                 * Performs cleanup associated with termination of this worker
                 * thread.  If you override this method, you must invoke
                 * {@code super.onTermination} at the end of the overridden method.
                 */
                // @ts-ignore
                protected onTermination(exception: java.lang.Throwable): void;
                /**
                 * This method is required to be public, but should never be
                 * called explicitly. It performs the main run loop to execute
                 * {@link ForkJoinTask}s.
                 */
                // @ts-ignore
                public run(): void;
            }
        }
    }
}
