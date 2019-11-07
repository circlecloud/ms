declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ThreadPoolExecutor extends java.util.concurrent.AbstractExecutorService {
                /**
                 * Creates a new {@code ThreadPoolExecutor} with the given initial
                 * parameters and default thread factory and rejected execution handler.
                 * It may be more convenient to use one of the {@link Executors} factory
                 * methods instead of this general purpose constructor.
                 */
                // @ts-ignore
                constructor(corePoolSize: number, maximumPoolSize: number, keepAliveTime: number, unit: java.util.concurrent.TimeUnit, workQueue: java.util.concurrent.BlockingQueue)
                /**
                 * Creates a new {@code ThreadPoolExecutor} with the given initial
                 * parameters and default rejected execution handler.
                 */
                // @ts-ignore
                constructor(corePoolSize: number, maximumPoolSize: number, keepAliveTime: number, unit: java.util.concurrent.TimeUnit, workQueue: java.util.concurrent.BlockingQueue, threadFactory: java.util.concurrent.ThreadFactory)
                /**
                 * Creates a new {@code ThreadPoolExecutor} with the given initial
                 * parameters and default thread factory.
                 */
                // @ts-ignore
                constructor(corePoolSize: number, maximumPoolSize: number, keepAliveTime: number, unit: java.util.concurrent.TimeUnit, workQueue: java.util.concurrent.BlockingQueue, handler: java.util.concurrent.RejectedExecutionHandler)
                /**
                 * Creates a new {@code ThreadPoolExecutor} with the given initial
                 * parameters.
                 */
                // @ts-ignore
                constructor(corePoolSize: number, maximumPoolSize: number, keepAliveTime: number, unit: java.util.concurrent.TimeUnit, workQueue: java.util.concurrent.BlockingQueue, threadFactory: java.util.concurrent.ThreadFactory, handler: java.util.concurrent.RejectedExecutionHandler)
                /**
                 * Executes the given task sometime in the future.  The task
                 * may execute in a new thread or in an existing pooled thread.
                 * If the task cannot be submitted for execution, either because this
                 * executor has been shutdown or because its capacity has been reached,
                 * the task is handled by the current {@code RejectedExecutionHandler}.
                 */
                // @ts-ignore
                public execute(command: java.lang.Runnable): void;
                /**
                 * Initiates an orderly shutdown in which previously submitted
                 * tasks are executed, but no new tasks will be accepted.
                 * Invocation has no additional effect if already shut down.
                 * <p>This method does not wait for previously submitted tasks to
                 * complete execution.  Use {@link #awaitTermination awaitTermination}
                 * to do that.
                 */
                // @ts-ignore
                public shutdown(): void;
                /**
                 * Attempts to stop all actively executing tasks, halts the
                 * processing of waiting tasks, and returns a list of the tasks
                 * that were awaiting execution. These tasks are drained (removed)
                 * from the task queue upon return from this method.
                 * <p>This method does not wait for actively executing tasks to
                 * terminate.  Use {@link #awaitTermination awaitTermination} to
                 * do that.
                 * <p>There are no guarantees beyond best-effort attempts to stop
                 * processing actively executing tasks.  This implementation
                 * cancels tasks via {@link Thread#interrupt}, so any task that
                 * fails to respond to interrupts may never terminate.
                 */
                // @ts-ignore
                public shutdownNow(): java.util.List;
                // @ts-ignore
                public isShutdown(): boolean;
                /**
                 * Returns true if this executor is in the process of terminating
                 * after {@link #shutdown} or {@link #shutdownNow} but has not
                 * completely terminated.  This method may be useful for
                 * debugging. A return of {@code true} reported a sufficient
                 * period after shutdown may indicate that submitted tasks have
                 * ignored or suppressed interruption, causing this executor not
                 * to properly terminate.
                 */
                // @ts-ignore
                public isTerminating(): boolean;
                // @ts-ignore
                public isTerminated(): boolean;
                // @ts-ignore
                public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Invokes {@code shutdown} when this executor is no longer
                 * referenced and it has no threads.
                 */
                // @ts-ignore
                protected finalize(): void;
                /**
                 * Sets the thread factory used to create new threads.
                 */
                // @ts-ignore
                public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void;
                /**
                 * Returns the thread factory used to create new threads.
                 */
                // @ts-ignore
                public getThreadFactory(): java.util.concurrent.ThreadFactory;
                /**
                 * Sets a new handler for unexecutable tasks.
                 */
                // @ts-ignore
                public setRejectedExecutionHandler(handler: java.util.concurrent.RejectedExecutionHandler): void;
                /**
                 * Returns the current handler for unexecutable tasks.
                 */
                // @ts-ignore
                public getRejectedExecutionHandler(): java.util.concurrent.RejectedExecutionHandler;
                /**
                 * Sets the core number of threads.  This overrides any value set
                 * in the constructor.  If the new value is smaller than the
                 * current value, excess existing threads will be terminated when
                 * they next become idle.  If larger, new threads will, if needed,
                 * be started to execute any queued tasks.
                 */
                // @ts-ignore
                public setCorePoolSize(corePoolSize: number): void;
                /**
                 * Returns the core number of threads.
                 */
                // @ts-ignore
                public getCorePoolSize(): number;
                /**
                 * Starts a core thread, causing it to idly wait for work. This
                 * overrides the default policy of starting core threads only when
                 * new tasks are executed. This method will return {@code false}
                 * if all core threads have already been started.
                 */
                // @ts-ignore
                public prestartCoreThread(): boolean;
                /**
                 * Starts all core threads, causing them to idly wait for work. This
                 * overrides the default policy of starting core threads only when
                 * new tasks are executed.
                 */
                // @ts-ignore
                public prestartAllCoreThreads(): number;
                /**
                 * Returns true if this pool allows core threads to time out and
                 * terminate if no tasks arrive within the keepAlive time, being
                 * replaced if needed when new tasks arrive. When true, the same
                 * keep-alive policy applying to non-core threads applies also to
                 * core threads. When false (the default), core threads are never
                 * terminated due to lack of incoming tasks.
                 */
                // @ts-ignore
                public allowsCoreThreadTimeOut(): boolean;
                /**
                 * Sets the policy governing whether core threads may time out and
                 * terminate if no tasks arrive within the keep-alive time, being
                 * replaced if needed when new tasks arrive. When false, core
                 * threads are never terminated due to lack of incoming
                 * tasks. When true, the same keep-alive policy applying to
                 * non-core threads applies also to core threads. To avoid
                 * continual thread replacement, the keep-alive time must be
                 * greater than zero when setting {@code true}. This method
                 * should in general be called before the pool is actively used.
                 */
                // @ts-ignore
                public allowCoreThreadTimeOut(value: boolean): void;
                /**
                 * Sets the maximum allowed number of threads. This overrides any
                 * value set in the constructor. If the new value is smaller than
                 * the current value, excess existing threads will be
                 * terminated when they next become idle.
                 */
                // @ts-ignore
                public setMaximumPoolSize(maximumPoolSize: number): void;
                /**
                 * Returns the maximum allowed number of threads.
                 */
                // @ts-ignore
                public getMaximumPoolSize(): number;
                /**
                 * Sets the time limit for which threads may remain idle before
                 * being terminated.  If there are more than the core number of
                 * threads currently in the pool, after waiting this amount of
                 * time without processing a task, excess threads will be
                 * terminated.  This overrides any value set in the constructor.
                 */
                // @ts-ignore
                public setKeepAliveTime(time: number, unit: java.util.concurrent.TimeUnit): void;
                /**
                 * Returns the thread keep-alive time, which is the amount of time
                 * that threads in excess of the core pool size may remain
                 * idle before being terminated.
                 */
                // @ts-ignore
                public getKeepAliveTime(unit: java.util.concurrent.TimeUnit): number;
                /**
                 * Returns the task queue used by this executor. Access to the
                 * task queue is intended primarily for debugging and monitoring.
                 * This queue may be in active use.  Retrieving the task queue
                 * does not prevent queued tasks from executing.
                 */
                // @ts-ignore
                public getQueue(): java.util.concurrent.BlockingQueue;
                /**
                 * Removes this task from the executor's internal queue if it is
                 * present, thus causing it not to be run if it has not already
                 * started.
                 * <p>This method may be useful as one part of a cancellation
                 * scheme.  It may fail to remove tasks that have been converted
                 * into other forms before being placed on the internal queue. For
                 * example, a task entered using {@code submit} might be
                 * converted into a form that maintains {@code Future} status.
                 * However, in such cases, method {@link #purge} may be used to
                 * remove those Futures that have been cancelled.
                 */
                // @ts-ignore
                public remove(task: java.lang.Runnable): boolean;
                /**
                 * Tries to remove from the work queue all {@link Future}
                 * tasks that have been cancelled. This method can be useful as a
                 * storage reclamation operation, that has no other impact on
                 * functionality. Cancelled tasks are never executed, but may
                 * accumulate in work queues until worker threads can actively
                 * remove them. Invoking this method instead tries to remove them now.
                 * However, this method may fail to remove tasks in
                 * the presence of interference by other threads.
                 */
                // @ts-ignore
                public purge(): void;
                /**
                 * Returns the current number of threads in the pool.
                 */
                // @ts-ignore
                public getPoolSize(): number;
                /**
                 * Returns the approximate number of threads that are actively
                 * executing tasks.
                 */
                // @ts-ignore
                public getActiveCount(): number;
                /**
                 * Returns the largest number of threads that have ever
                 * simultaneously been in the pool.
                 */
                // @ts-ignore
                public getLargestPoolSize(): number;
                /**
                 * Returns the approximate total number of tasks that have ever been
                 * scheduled for execution. Because the states of tasks and
                 * threads may change dynamically during computation, the returned
                 * value is only an approximation.
                 */
                // @ts-ignore
                public getTaskCount(): number;
                /**
                 * Returns the approximate total number of tasks that have
                 * completed execution. Because the states of tasks and threads
                 * may change dynamically during computation, the returned value
                 * is only an approximation, but one that does not ever decrease
                 * across successive calls.
                 */
                // @ts-ignore
                public getCompletedTaskCount(): number;
                /**
                 * Returns a string identifying this pool, as well as its state,
                 * including indications of run state and estimated worker and
                 * task counts.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Method invoked prior to executing the given Runnable in the
                 * given thread.  This method is invoked by thread {@code t} that
                 * will execute task {@code r}, and may be used to re-initialize
                 * ThreadLocals, or to perform logging.
                 * <p>This implementation does nothing, but may be customized in
                 * subclasses. Note: To properly nest multiple overridings, subclasses
                 * should generally invoke {@code super.beforeExecute} at the end of
                 * this method.
                 */
                // @ts-ignore
                protected beforeExecute(t: java.lang.Thread, r: java.lang.Runnable): void;
                /**
                 * Method invoked upon completion of execution of the given Runnable.
                 * This method is invoked by the thread that executed the task. If
                 * non-null, the Throwable is the uncaught {@code RuntimeException}
                 * or {@code Error} that caused execution to terminate abruptly.
                 * <p>This implementation does nothing, but may be customized in
                 * subclasses. Note: To properly nest multiple overridings, subclasses
                 * should generally invoke {@code super.afterExecute} at the
                 * beginning of this method.
                 * <p><b>Note:</b> When actions are enclosed in tasks (such as
                 * {@link FutureTask}) either explicitly or via methods such as
                 * {@code submit}, these task objects catch and maintain
                 * computational exceptions, and so they do not cause abrupt
                 * termination, and the internal exceptions are <em>not</em>
                 * passed to this method. If you would like to trap both kinds of
                 * failures in this method, you can further probe for such cases,
                 * as in this sample subclass that prints either the direct cause
                 * or the underlying exception if a task has been aborted:
                 * <pre> {@code
                 * class ExtendedExecutor extends ThreadPoolExecutor {
                 * // ...
                 * protected void afterExecute(Runnable r, Throwable t) {
                 * super.afterExecute(r, t);
                 * if (t == null && r instanceof Future<?>) {
                 * try {
                 * Object result = ((Future<?>) r).get();
                 * } catch (CancellationException ce) {
                 * t = ce;
                 * } catch (ExecutionException ee) {
                 * t = ee.getCause();
                 * } catch (InterruptedException ie) {
                 * Thread.currentThread().interrupt(); // ignore/reset
                 * }
                 * }
                 * if (t != null)
                 * System.out.println(t);
                 * }
                 * }}</pre>
                 */
                // @ts-ignore
                protected afterExecute(r: java.lang.Runnable, t: java.lang.Throwable): void;
                /**
                 * Method invoked when the Executor has terminated.  Default
                 * implementation does nothing. Note: To properly nest multiple
                 * overridings, subclasses should generally invoke
                 * {@code super.terminated} within this method.
                 */
                // @ts-ignore
                protected terminated(): void;
            }
        }
    }
}
