// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface Future {
                /**
                 * Attempts to cancel execution of this task.  This attempt will
                 * fail if the task has already completed, has already been cancelled,
                 * or could not be cancelled for some other reason. If successful,
                 * and this task has not started when {@code cancel} is called,
                 * this task should never run.  If the task has already started,
                 * then the {@code mayInterruptIfRunning} parameter determines
                 * whether the thread executing this task should be interrupted in
                 * an attempt to stop the task.
                 * <p>After this method returns, subsequent calls to {@link #isDone} will
                 * always return {@code true}.  Subsequent calls to {@link #isCancelled}
                 * will always return {@code true} if this method returned {@code true}.
                 */
                // @ts-ignore
                 cancel(mayInterruptIfRunning: boolean): boolean;
                /**
                 * Returns {@code true} if this task was cancelled before it completed
                 * normally.
                 */
                // @ts-ignore
                 isCancelled(): boolean;
                /**
                 * Returns {@code true} if this task completed.
                 * Completion may be due to normal termination, an exception, or
                 * cancellation -- in all of these cases, this method will return
                 * {@code true}.
                 */
                // @ts-ignore
                 isDone(): boolean;
                /**
                 * Waits if necessary for the computation to complete, and then
                 * retrieves its result.
                 */
                // @ts-ignore
                 get(): java.lang.Object;
                /**
                 * Waits if necessary for at most the given time for the computation
                 * to complete, and then retrieves its result, if available.
                 */
                // @ts-ignore
                 get(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
            }
        }
    }
}
