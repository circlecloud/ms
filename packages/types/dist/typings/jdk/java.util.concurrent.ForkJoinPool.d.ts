declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ForkJoinPool extends java.util.concurrent.AbstractExecutorService {
                /**
                 * Creates a {@code ForkJoinPool} with parallelism equal to {@link
                 * java.lang.Runtime#availableProcessors}, using the {@linkplain
                 * #defaultForkJoinWorkerThreadFactory default thread factory},
                 * no UncaughtExceptionHandler, and non-async LIFO processing mode.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code ForkJoinPool} with the indicated parallelism
                 * level, the {@linkplain
                 * #defaultForkJoinWorkerThreadFactory default thread factory},
                 * no UncaughtExceptionHandler, and non-async LIFO processing mode.
                 */
                // @ts-ignore
                constructor(parallelism: number)
                /**
                 * Creates a {@code ForkJoinPool} with the given parameters.
                 */
                // @ts-ignore
                constructor(parallelism: number, factory: java.util.concurrent.ForkJoinPool.ForkJoinWorkerThreadFactory, handler: java.lang.Thread.UncaughtExceptionHandler, asyncMode: boolean)
                // @ts-ignore
                public static defaultForkJoinWorkerThreadFactory: java.util.concurrent.ForkJoinPool.ForkJoinWorkerThreadFactory;
                /**
                 * Returns the common pool instance. This pool is statically
                 * constructed; its run state is unaffected by attempts to {@link
                 * #shutdown} or {@link #shutdownNow}. However this pool and any
                 * ongoing processing are automatically terminated upon program
                 * {@link System#exit}.  Any program that relies on asynchronous
                 * task processing to complete before program termination should
                 * invoke {@code commonPool().}{@link #awaitQuiescence awaitQuiescence},
                 * before exit.
                 */
                // @ts-ignore
                public static commonPool(): java.util.concurrent.ForkJoinPool;
                /**
                 * Performs the given task, returning its result upon completion.
                 * If the computation encounters an unchecked Exception or Error,
                 * it is rethrown as the outcome of this invocation.  Rethrown
                 * exceptions behave in the same way as regular exceptions, but,
                 * when possible, contain stack traces (as displayed for example
                 * using {@code ex.printStackTrace()}) of both the current thread
                 * as well as the thread actually encountering the exception;
                 * minimally only the latter.
                 */
                // @ts-ignore
                public invoke(task: java.util.concurrent.ForkJoinTask): java.lang.Object;
                /**
                 * Arranges for (asynchronous) execution of the given task.
                 */
                // @ts-ignore
                public execute(task: java.util.concurrent.ForkJoinTask): void;
                // @ts-ignore
                public execute(task: java.lang.Runnable): void;
                /**
                 * Submits a ForkJoinTask for execution.
                 */
                // @ts-ignore
                public submit(task: java.util.concurrent.ForkJoinTask): java.util.concurrent.ForkJoinTask;
                // @ts-ignore
                public submit(task: java.util.concurrent.Callable): java.util.concurrent.ForkJoinTask;
                // @ts-ignore
                public submit(task: java.lang.Runnable, result: java.lang.Object): java.util.concurrent.ForkJoinTask;
                // @ts-ignore
                public submit(task: java.lang.Runnable): java.util.concurrent.ForkJoinTask;
                // @ts-ignore
                public invokeAll(tasks: java.util.Collection): java.util.List;
                /**
                 * Returns the factory used for constructing new workers.
                 */
                // @ts-ignore
                public getFactory(): java.util.concurrent.ForkJoinPool.ForkJoinWorkerThreadFactory;
                /**
                 * Returns the handler for internal worker threads that terminate
                 * due to unrecoverable errors encountered while executing tasks.
                 */
                // @ts-ignore
                public getUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
                /**
                 * Returns the targeted parallelism level of this pool.
                 */
                // @ts-ignore
                public getParallelism(): number;
                /**
                 * Returns the targeted parallelism level of the common pool.
                 */
                // @ts-ignore
                public static getCommonPoolParallelism(): number;
                /**
                 * Returns the number of worker threads that have started but not
                 * yet terminated.  The result returned by this method may differ
                 * from {@link #getParallelism} when threads are created to
                 * maintain parallelism when others are cooperatively blocked.
                 */
                // @ts-ignore
                public getPoolSize(): number;
                /**
                 * Returns {@code true} if this pool uses local first-in-first-out
                 * scheduling mode for forked tasks that are never joined.
                 */
                // @ts-ignore
                public getAsyncMode(): boolean;
                /**
                 * Returns an estimate of the number of worker threads that are
                 * not blocked waiting to join tasks or for other managed
                 * synchronization. This method may overestimate the
                 * number of running threads.
                 */
                // @ts-ignore
                public getRunningThreadCount(): number;
                /**
                 * Returns an estimate of the number of threads that are currently
                 * stealing or executing tasks. This method may overestimate the
                 * number of active threads.
                 */
                // @ts-ignore
                public getActiveThreadCount(): number;
                /**
                 * Returns {@code true} if all worker threads are currently idle.
                 * An idle worker is one that cannot obtain a task to execute
                 * because none are available to steal from other threads, and
                 * there are no pending submissions to the pool. This method is
                 * conservative; it might not return {@code true} immediately upon
                 * idleness of all threads, but will eventually become true if
                 * threads remain inactive.
                 */
                // @ts-ignore
                public isQuiescent(): boolean;
                /**
                 * Returns an estimate of the total number of tasks stolen from
                 * one thread's work queue by another. The reported value
                 * underestimates the actual total number of steals when the pool
                 * is not quiescent. This value may be useful for monitoring and
                 * tuning fork/join programs: in general, steal counts should be
                 * high enough to keep threads busy, but low enough to avoid
                 * overhead and contention across threads.
                 */
                // @ts-ignore
                public getStealCount(): number;
                /**
                 * Returns an estimate of the total number of tasks currently held
                 * in queues by worker threads (but not including tasks submitted
                 * to the pool that have not begun executing). This value is only
                 * an approximation, obtained by iterating across all threads in
                 * the pool. This method may be useful for tuning task
                 * granularities.
                 */
                // @ts-ignore
                public getQueuedTaskCount(): number;
                /**
                 * Returns an estimate of the number of tasks submitted to this
                 * pool that have not yet begun executing.  This method may take
                 * time proportional to the number of submissions.
                 */
                // @ts-ignore
                public getQueuedSubmissionCount(): number;
                /**
                 * Returns {@code true} if there are any tasks submitted to this
                 * pool that have not yet begun executing.
                 */
                // @ts-ignore
                public hasQueuedSubmissions(): boolean;
                /**
                 * Removes and returns the next unexecuted submission if one is
                 * available.  This method may be useful in extensions to this
                 * class that re-assign work in systems with multiple pools.
                 */
                // @ts-ignore
                protected pollSubmission(): java.util.concurrent.ForkJoinTask;
                /**
                 * Removes all available unexecuted submitted and forked tasks
                 * from scheduling queues and adds them to the given collection,
                 * without altering their execution status. These may include
                 * artificially generated or wrapped tasks. This method is
                 * designed to be invoked only when the pool is known to be
                 * quiescent. Invocations at other times may not remove all
                 * tasks. A failure encountered while attempting to add elements
                 * to collection {@code c} may result in elements being in
                 * neither, either or both collections when the associated
                 * exception is thrown.  The behavior of this operation is
                 * undefined if the specified collection is modified while the
                 * operation is in progress.
                 */
                // @ts-ignore
                protected drainTasksTo(c: java.util.Collection): number;
                /**
                 * Returns a string identifying this pool, as well as its state,
                 * including indications of run state, parallelism level, and
                 * worker and task counts.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Possibly initiates an orderly shutdown in which previously
                 * submitted tasks are executed, but no new tasks will be
                 * accepted. Invocation has no effect on execution state if this
                 * is the {@link #commonPool()}, and no additional effect if
                 * already shut down.  Tasks that are in the process of being
                 * submitted concurrently during the course of this method may or
                 * may not be rejected.
                 */
                // @ts-ignore
                public shutdown(): void;
                /**
                 * Possibly attempts to cancel and/or stop all tasks, and reject
                 * all subsequently submitted tasks.  Invocation has no effect on
                 * execution state if this is the {@link #commonPool()}, and no
                 * additional effect if already shut down. Otherwise, tasks that
                 * are in the process of being submitted or executed concurrently
                 * during the course of this method may or may not be
                 * rejected. This method cancels both existing and unexecuted
                 * tasks, in order to permit termination in the presence of task
                 * dependencies. So the method always returns an empty list
                 * (unlike the case for some other Executors).
                 */
                // @ts-ignore
                public shutdownNow(): java.util.List;
                /**
                 * Returns {@code true} if all tasks have completed following shut down.
                 */
                // @ts-ignore
                public isTerminated(): boolean;
                /**
                 * Returns {@code true} if the process of termination has
                 * commenced but not yet completed.  This method may be useful for
                 * debugging. A return of {@code true} reported a sufficient
                 * period after shutdown may indicate that submitted tasks have
                 * ignored or suppressed interruption, or are waiting for I/O,
                 * causing this executor not to properly terminate. (See the
                 * advisory notes for class {@link ForkJoinTask} stating that
                 * tasks should not normally entail blocking operations.  But if
                 * they do, they must abort them on interrupt.)
                 */
                // @ts-ignore
                public isTerminating(): boolean;
                /**
                 * Returns {@code true} if this pool has been shut down.
                 */
                // @ts-ignore
                public isShutdown(): boolean;
                /**
                 * Blocks until all tasks have completed execution after a
                 * shutdown request, or the timeout occurs, or the current thread
                 * is interrupted, whichever happens first. Because the {@link
                 * #commonPool()} never terminates until program shutdown, when
                 * applied to the common pool, this method is equivalent to {@link
                 * #awaitQuiescence(long, TimeUnit)} but always returns {@code false}.
                 */
                // @ts-ignore
                public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * If called by a ForkJoinTask operating in this pool, equivalent
                 * in effect to {@link ForkJoinTask#helpQuiesce}. Otherwise,
                 * waits and/or attempts to assist performing tasks until this
                 * pool {@link #isQuiescent} or the indicated timeout elapses.
                 */
                // @ts-ignore
                public awaitQuiescence(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Runs the given possibly blocking task.  When {@linkplain
                 * ForkJoinTask#inForkJoinPool() running in a ForkJoinPool}, this
                 * method possibly arranges for a spare thread to be activated if
                 * necessary to ensure sufficient parallelism while the current
                 * thread is blocked in {@link ManagedBlocker#block blocker.block()}.
                 * <p>This method repeatedly calls {@code blocker.isReleasable()} and
                 * {@code blocker.block()} until either method returns {@code true}.
                 * Every call to {@code blocker.block()} is preceded by a call to
                 * {@code blocker.isReleasable()} that returned {@code false}.
                 * <p>If not running in a ForkJoinPool, this method is
                 * behaviorally equivalent to
                 * <pre> {@code
                 * while (!blocker.isReleasable())
                 * if (blocker.block())
                 * break;}</pre>
                 * If running in a ForkJoinPool, the pool may first be expanded to
                 * ensure sufficient parallelism available during the call to
                 * {@code blocker.block()}.
                 */
                // @ts-ignore
                public static managedBlock(blocker: java.util.concurrent.ForkJoinPool.ManagedBlocker): void;
                // @ts-ignore
                protected newTaskFor(runnable: java.lang.Runnable, value: java.lang.Object): java.util.concurrent.RunnableFuture;
                // @ts-ignore
                protected newTaskFor(callable: java.util.concurrent.Callable): java.util.concurrent.RunnableFuture;
            }
        }
    }
}
