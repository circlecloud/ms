// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface ExecutorService {
                /**
                 * Initiates an orderly shutdown in which previously submitted
                 * tasks are executed, but no new tasks will be accepted.
                 * Invocation has no additional effect if already shut down.
                 * <p>This method does not wait for previously submitted tasks to
                 * complete execution.  Use {@link #awaitTermination awaitTermination}
                 * to do that.
                 */
                // @ts-ignore
                 shutdown(): void;
                /**
                 * Attempts to stop all actively executing tasks, halts the
                 * processing of waiting tasks, and returns a list of the tasks
                 * that were awaiting execution.
                 * <p>This method does not wait for actively executing tasks to
                 * terminate.  Use {@link #awaitTermination awaitTermination} to
                 * do that.
                 * <p>There are no guarantees beyond best-effort attempts to stop
                 * processing actively executing tasks.  For example, typical
                 * implementations will cancel via {@link Thread#interrupt}, so any
                 * task that fails to respond to interrupts may never terminate.
                 */
                // @ts-ignore
                 shutdownNow(): java.util.List;
                /**
                 * Returns {@code true} if this executor has been shut down.
                 */
                // @ts-ignore
                 isShutdown(): boolean;
                /**
                 * Returns {@code true} if all tasks have completed following shut down.
                 * Note that {@code isTerminated} is never {@code true} unless
                 * either {@code shutdown} or {@code shutdownNow} was called first.
                 */
                // @ts-ignore
                 isTerminated(): boolean;
                /**
                 * Blocks until all tasks have completed execution after a shutdown
                 * request, or the timeout occurs, or the current thread is
                 * interrupted, whichever happens first.
                 */
                // @ts-ignore
                 awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Submits a value-returning task for execution and returns a
                 * Future representing the pending results of the task. The
                 * Future's {@code get} method will return the task's result upon
                 * successful completion.
                 * <p>
                 * If you would like to immediately block waiting
                 * for a task, you can use constructions of the form
                 * {@code result = exec.submit(aCallable).get();}
                 * <p>Note: The {@link Executors} class includes a set of methods
                 * that can convert some other common closure-like objects,
                 * for example, {@link java.security.PrivilegedAction} to
                 * {@link Callable} form so they can be submitted.
                 */
                // @ts-ignore
                 submit(task: java.util.concurrent.Callable): java.util.concurrent.Future;
                /**
                 * Submits a Runnable task for execution and returns a Future
                 * representing that task. The Future's {@code get} method will
                 * return the given result upon successful completion.
                 */
                // @ts-ignore
                 submit(task: java.lang.Runnable, result: java.lang.Object): java.util.concurrent.Future;
                /**
                 * Submits a Runnable task for execution and returns a Future
                 * representing that task. The Future's {@code get} method will
                 * return {@code null} upon <em>successful</em> completion.
                 */
                // @ts-ignore
                 submit(task: java.lang.Runnable): java.util.concurrent.Future;
                /**
                 * Executes the given tasks, returning a list of Futures holding
                 * their status and results when all complete.
                 * {@link Future#isDone} is {@code true} for each
                 * element of the returned list.
                 * Note that a <em>completed</em> task could have
                 * terminated either normally or by throwing an exception.
                 * The results of this method are undefined if the given
                 * collection is modified while this operation is in progress.
                 */
                // @ts-ignore
                 invokeAll(tasks: java.util.Collection): java.util.List;
                /**
                 * Executes the given tasks, returning a list of Futures holding
                 * their status and results
                 * when all complete or the timeout expires, whichever happens first.
                 * {@link Future#isDone} is {@code true} for each
                 * element of the returned list.
                 * Upon return, tasks that have not completed are cancelled.
                 * Note that a <em>completed</em> task could have
                 * terminated either normally or by throwing an exception.
                 * The results of this method are undefined if the given
                 * collection is modified while this operation is in progress.
                 */
                // @ts-ignore
                 invokeAll(tasks: java.util.Collection, timeout: number, unit: java.util.concurrent.TimeUnit): java.util.List;
                /**
                 * Executes the given tasks, returning the result
                 * of one that has completed successfully (i.e., without throwing
                 * an exception), if any do. Upon normal or exceptional return,
                 * tasks that have not completed are cancelled.
                 * The results of this method are undefined if the given
                 * collection is modified while this operation is in progress.
                 */
                // @ts-ignore
                 invokeAny(tasks: java.util.Collection): java.lang.Object;
                /**
                 * Executes the given tasks, returning the result
                 * of one that has completed successfully (i.e., without throwing
                 * an exception), if any do before the given timeout elapses.
                 * Upon normal or exceptional return, tasks that have not
                 * completed are cancelled.
                 * The results of this method are undefined if the given
                 * collection is modified while this operation is in progress.
                 */
                // @ts-ignore
                 invokeAny(tasks: java.util.Collection, timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
            }
        }
    }
}
