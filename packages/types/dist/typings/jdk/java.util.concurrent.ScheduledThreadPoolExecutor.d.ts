declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ScheduledThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor {
                /**
                 * Creates a new {@code ScheduledThreadPoolExecutor} with the
                 * given core pool size.
                 */
                // @ts-ignore
                constructor(corePoolSize: number)
                /**
                 * Creates a new {@code ScheduledThreadPoolExecutor} with the
                 * given initial parameters.
                 */
                // @ts-ignore
                constructor(corePoolSize: number, threadFactory: java.util.concurrent.ThreadFactory)
                /**
                 * Creates a new ScheduledThreadPoolExecutor with the given
                 * initial parameters.
                 */
                // @ts-ignore
                constructor(corePoolSize: number, handler: java.util.concurrent.RejectedExecutionHandler)
                /**
                 * Creates a new ScheduledThreadPoolExecutor with the given
                 * initial parameters.
                 */
                // @ts-ignore
                constructor(corePoolSize: number, threadFactory: java.util.concurrent.ThreadFactory, handler: java.util.concurrent.RejectedExecutionHandler)
                /**
                 * Modifies or replaces the task used to execute a runnable.
                 * This method can be used to override the concrete
                 * class used for managing internal tasks.
                 * The default implementation simply returns the given task.
                 */
                // @ts-ignore
                protected decorateTask(runnable: java.lang.Runnable, task: java.util.concurrent.RunnableScheduledFuture): java.util.concurrent.RunnableScheduledFuture;
                /**
                 * Modifies or replaces the task used to execute a callable.
                 * This method can be used to override the concrete
                 * class used for managing internal tasks.
                 * The default implementation simply returns the given task.
                 */
                // @ts-ignore
                protected decorateTask(callable: java.util.concurrent.Callable, task: java.util.concurrent.RunnableScheduledFuture): java.util.concurrent.RunnableScheduledFuture;
                // @ts-ignore
                public schedule(command: java.lang.Runnable, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
                // @ts-ignore
                public schedule(callable: java.util.concurrent.Callable, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
                // @ts-ignore
                public scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number, period: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
                // @ts-ignore
                public scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
                /**
                 * Executes {@code command} with zero required delay.
                 * This has effect equivalent to
                 * {@link #schedule(Runnable,long,TimeUnit) schedule(command, 0, anyUnit)}.
                 * Note that inspections of the queue and of the list returned by
                 * {@code shutdownNow} will access the zero-delayed
                 * {@link ScheduledFuture}, not the {@code command} itself.
                 * <p>A consequence of the use of {@code ScheduledFuture} objects is
                 * that {@link ThreadPoolExecutor#afterExecute afterExecute} is always
                 * called with a null second {@code Throwable} argument, even if the
                 * {@code command} terminated abruptly.  Instead, the {@code Throwable}
                 * thrown by such a task can be obtained via {@link Future#get}.
                 */
                // @ts-ignore
                public execute(command: java.lang.Runnable): void;
                // @ts-ignore
                public submit(task: java.lang.Runnable): java.util.concurrent.Future;
                // @ts-ignore
                public submit(task: java.lang.Runnable, result: java.lang.Object): java.util.concurrent.Future;
                // @ts-ignore
                public submit(task: java.util.concurrent.Callable): java.util.concurrent.Future;
                /**
                 * Sets the policy on whether to continue executing existing
                 * periodic tasks even when this executor has been {@code shutdown}.
                 * In this case, these tasks will only terminate upon
                 * {@code shutdownNow} or after setting the policy to
                 * {@code false} when already shutdown.
                 * This value is by default {@code false}.
                 */
                // @ts-ignore
                public setContinueExistingPeriodicTasksAfterShutdownPolicy(value: boolean): void;
                /**
                 * Gets the policy on whether to continue executing existing
                 * periodic tasks even when this executor has been {@code shutdown}.
                 * In this case, these tasks will only terminate upon
                 * {@code shutdownNow} or after setting the policy to
                 * {@code false} when already shutdown.
                 * This value is by default {@code false}.
                 */
                // @ts-ignore
                public getContinueExistingPeriodicTasksAfterShutdownPolicy(): boolean;
                /**
                 * Sets the policy on whether to execute existing delayed
                 * tasks even when this executor has been {@code shutdown}.
                 * In this case, these tasks will only terminate upon
                 * {@code shutdownNow}, or after setting the policy to
                 * {@code false} when already shutdown.
                 * This value is by default {@code true}.
                 */
                // @ts-ignore
                public setExecuteExistingDelayedTasksAfterShutdownPolicy(value: boolean): void;
                /**
                 * Gets the policy on whether to execute existing delayed
                 * tasks even when this executor has been {@code shutdown}.
                 * In this case, these tasks will only terminate upon
                 * {@code shutdownNow}, or after setting the policy to
                 * {@code false} when already shutdown.
                 * This value is by default {@code true}.
                 */
                // @ts-ignore
                public getExecuteExistingDelayedTasksAfterShutdownPolicy(): boolean;
                /**
                 * Sets the policy on whether cancelled tasks should be immediately
                 * removed from the work queue at time of cancellation.  This value is
                 * by default {@code false}.
                 */
                // @ts-ignore
                public setRemoveOnCancelPolicy(value: boolean): void;
                /**
                 * Gets the policy on whether cancelled tasks should be immediately
                 * removed from the work queue at time of cancellation.  This value is
                 * by default {@code false}.
                 */
                // @ts-ignore
                public getRemoveOnCancelPolicy(): boolean;
                /**
                 * Initiates an orderly shutdown in which previously submitted
                 * tasks are executed, but no new tasks will be accepted.
                 * Invocation has no additional effect if already shut down.
                 * <p>This method does not wait for previously submitted tasks to
                 * complete execution.  Use {@link #awaitTermination awaitTermination}
                 * to do that.
                 * <p>If the {@code ExecuteExistingDelayedTasksAfterShutdownPolicy}
                 * has been set {@code false}, existing delayed tasks whose delays
                 * have not yet elapsed are cancelled.  And unless the {@code
                 * ContinueExistingPeriodicTasksAfterShutdownPolicy} has been set
                 * {@code true}, future executions of existing periodic tasks will
                 * be cancelled.
                 */
                // @ts-ignore
                public shutdown(): void;
                /**
                 * Attempts to stop all actively executing tasks, halts the
                 * processing of waiting tasks, and returns a list of the tasks
                 * that were awaiting execution.
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
                /**
                 * Returns the task queue used by this executor.  Each element of
                 * this queue is a {@link ScheduledFuture}, including those
                 * tasks submitted using {@code execute} which are for scheduling
                 * purposes used as the basis of a zero-delay
                 * {@code ScheduledFuture}.  Iteration over this queue is
                 * <em>not</em> guaranteed to traverse tasks in the order in
                 * which they will execute.
                 */
                // @ts-ignore
                public getQueue(): java.util.concurrent.BlockingQueue;
            }
        }
    }
}
