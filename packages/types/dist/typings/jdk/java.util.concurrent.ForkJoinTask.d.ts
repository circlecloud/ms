// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            abstract class ForkJoinTask extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Arranges to asynchronously execute this task in the pool the
                 * current task is running in, if applicable, or using the {@link
                 * ForkJoinPool#commonPool()} if not {@link #inForkJoinPool}.  While
                 * it is not necessarily enforced, it is a usage error to fork a
                 * task more than once unless it has completed and been
                 * reinitialized.  Subsequent modifications to the state of this
                 * task or any data it operates on are not necessarily
                 * consistently observable by any thread other than the one
                 * executing it unless preceded by a call to {@link #join} or
                 * related methods, or a call to {@link #isDone} returning {@code
                 * true}.
                 */
                // @ts-ignore
                public fork(): java.util.concurrent.ForkJoinTask;
                /**
                 * Returns the result of the computation when it {@link #isDone is
                 * done}.  This method differs from {@link #get()} in that
                 * abnormal completion results in {@code RuntimeException} or
                 * {@code Error}, not {@code ExecutionException}, and that
                 * interrupts of the calling thread do <em>not</em> cause the
                 * method to abruptly return by throwing {@code
                 * InterruptedException}.
                 */
                // @ts-ignore
                public join(): java.lang.Object;
                /**
                 * Commences performing this task, awaits its completion if
                 * necessary, and returns its result, or throws an (unchecked)
                 * {@code RuntimeException} or {@code Error} if the underlying
                 * computation did so.
                 */
                // @ts-ignore
                public invoke(): java.lang.Object;
                /**
                 * Forks the given tasks, returning when {@code isDone} holds for
                 * each task or an (unchecked) exception is encountered, in which
                 * case the exception is rethrown. If more than one task
                 * encounters an exception, then this method throws any one of
                 * these exceptions. If any task encounters an exception, the
                 * other may be cancelled. However, the execution status of
                 * individual tasks is not guaranteed upon exceptional return. The
                 * status of each task may be obtained using {@link
                 * #getException()} and related methods to check if they have been
                 * cancelled, completed normally or exceptionally, or left
                 * unprocessed.
                 */
                // @ts-ignore
                public static invokeAll(t1: java.util.concurrent.ForkJoinTask, t2: java.util.concurrent.ForkJoinTask): void;
                /**
                 * Forks the given tasks, returning when {@code isDone} holds for
                 * each task or an (unchecked) exception is encountered, in which
                 * case the exception is rethrown. If more than one task
                 * encounters an exception, then this method throws any one of
                 * these exceptions. If any task encounters an exception, others
                 * may be cancelled. However, the execution status of individual
                 * tasks is not guaranteed upon exceptional return. The status of
                 * each task may be obtained using {@link #getException()} and
                 * related methods to check if they have been cancelled, completed
                 * normally or exceptionally, or left unprocessed.
                 */
                // @ts-ignore
                public static invokeAll(tasks: java.util.concurrent.ForkJoinTask): void;
                /**
                 * Forks all tasks in the specified collection, returning when
                 * {@code isDone} holds for each task or an (unchecked) exception
                 * is encountered, in which case the exception is rethrown. If
                 * more than one task encounters an exception, then this method
                 * throws any one of these exceptions. If any task encounters an
                 * exception, others may be cancelled. However, the execution
                 * status of individual tasks is not guaranteed upon exceptional
                 * return. The status of each task may be obtained using {@link
                 * #getException()} and related methods to check if they have been
                 * cancelled, completed normally or exceptionally, or left
                 * unprocessed.
                 */
                // @ts-ignore
                public static invokeAll(tasks: java.util.Collection): java.util.Collection;
                /**
                 * Attempts to cancel execution of this task. This attempt will
                 * fail if the task has already completed or could not be
                 * cancelled for some other reason. If successful, and this task
                 * has not started when {@code cancel} is called, execution of
                 * this task is suppressed. After this method returns
                 * successfully, unless there is an intervening call to {@link
                 * #reinitialize}, subsequent calls to {@link #isCancelled},
                 * {@link #isDone}, and {@code cancel} will return {@code true}
                 * and calls to {@link #join} and related methods will result in
                 * {@code CancellationException}.
                 * <p>This method may be overridden in subclasses, but if so, must
                 * still ensure that these properties hold. In particular, the
                 * {@code cancel} method itself must not throw exceptions.
                 * <p>This method is designed to be invoked by <em>other</em>
                 * tasks. To terminate the current task, you can just return or
                 * throw an unchecked exception from its computation method, or
                 * invoke {@link #completeExceptionally(Throwable)}.
                 */
                // @ts-ignore
                public cancel(mayInterruptIfRunning: boolean): boolean;
                // @ts-ignore
                public isDone(): boolean;
                // @ts-ignore
                public isCancelled(): boolean;
                /**
                 * Returns {@code true} if this task threw an exception or was cancelled.
                 */
                // @ts-ignore
                public isCompletedAbnormally(): boolean;
                /**
                 * Returns {@code true} if this task completed without throwing an
                 * exception and was not cancelled.
                 */
                // @ts-ignore
                public isCompletedNormally(): boolean;
                /**
                 * Returns the exception thrown by the base computation, or a
                 * {@code CancellationException} if cancelled, or {@code null} if
                 * none or if the method has not yet completed.
                 */
                // @ts-ignore
                public getException(): java.lang.Throwable;
                /**
                 * Completes this task abnormally, and if not already aborted or
                 * cancelled, causes it to throw the given exception upon
                 * {@code join} and related operations. This method may be used
                 * to induce exceptions in asynchronous tasks, or to force
                 * completion of tasks that would not otherwise complete.  Its use
                 * in other situations is discouraged.  This method is
                 * overridable, but overridden versions must invoke {@code super}
                 * implementation to maintain guarantees.
                 */
                // @ts-ignore
                public completeExceptionally(ex: java.lang.Throwable): void;
                /**
                 * Completes this task, and if not already aborted or cancelled,
                 * returning the given value as the result of subsequent
                 * invocations of {@code join} and related operations. This method
                 * may be used to provide results for asynchronous tasks, or to
                 * provide alternative handling for tasks that would not otherwise
                 * complete normally. Its use in other situations is
                 * discouraged. This method is overridable, but overridden
                 * versions must invoke {@code super} implementation to maintain
                 * guarantees.
                 */
                // @ts-ignore
                public complete(value: java.lang.Object): void;
                /**
                 * Completes this task normally without setting a value. The most
                 * recent value established by {@link #setRawResult} (or {@code
                 * null} by default) will be returned as the result of subsequent
                 * invocations of {@code join} and related operations.
                 */
                // @ts-ignore
                public quietlyComplete(): void;
                /**
                 * Waits if necessary for the computation to complete, and then
                 * retrieves its result.
                 */
                // @ts-ignore
                public get(): java.lang.Object;
                /**
                 * Waits if necessary for at most the given time for the computation
                 * to complete, and then retrieves its result, if available.
                 */
                // @ts-ignore
                public get(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Joins this task, without returning its result or throwing its
                 * exception. This method may be useful when processing
                 * collections of tasks when some have been cancelled or otherwise
                 * known to have aborted.
                 */
                // @ts-ignore
                public quietlyJoin(): void;
                /**
                 * Commences performing this task and awaits its completion if
                 * necessary, without returning its result or throwing its
                 * exception.
                 */
                // @ts-ignore
                public quietlyInvoke(): void;
                /**
                 * Possibly executes tasks until the pool hosting the current task
                 * {@link ForkJoinPool#isQuiescent is quiescent}. This method may
                 * be of use in designs in which many tasks are forked, but none
                 * are explicitly joined, instead executing them until all are
                 * processed.
                 */
                // @ts-ignore
                public static helpQuiesce(): void;
                /**
                 * Resets the internal bookkeeping state of this task, allowing a
                 * subsequent {@code fork}. This method allows repeated reuse of
                 * this task, but only if reuse occurs when this task has either
                 * never been forked, or has been forked, then completed and all
                 * outstanding joins of this task have also completed. Effects
                 * under any other usage conditions are not guaranteed.
                 * This method may be useful when executing
                 * pre-constructed trees of subtasks in loops.
                 * <p>Upon completion of this method, {@code isDone()} reports
                 * {@code false}, and {@code getException()} reports {@code
                 * null}. However, the value returned by {@code getRawResult} is
                 * unaffected. To clear this value, you can invoke {@code
                 * setRawResult(null)}.
                 */
                // @ts-ignore
                public reinitialize(): void;
                /**
                 * Returns the pool hosting the current task execution, or null
                 * if this task is executing outside of any ForkJoinPool.
                 */
                // @ts-ignore
                public static getPool(): java.util.concurrent.ForkJoinPool;
                /**
                 * Returns {@code true} if the current thread is a {@link
                 * ForkJoinWorkerThread} executing as a ForkJoinPool computation.
                 */
                // @ts-ignore
                public static inForkJoinPool(): boolean;
                /**
                 * Tries to unschedule this task for execution. This method will
                 * typically (but is not guaranteed to) succeed if this task is
                 * the most recently forked task by the current thread, and has
                 * not commenced executing in another thread.  This method may be
                 * useful when arranging alternative local processing of tasks
                 * that could have been, but were not, stolen.
                 */
                // @ts-ignore
                public tryUnfork(): boolean;
                /**
                 * Returns an estimate of the number of tasks that have been
                 * forked by the current worker thread but not yet executed. This
                 * value may be useful for heuristic decisions about whether to
                 * fork other tasks.
                 */
                // @ts-ignore
                public static getQueuedTaskCount(): number;
                /**
                 * Returns an estimate of how many more locally queued tasks are
                 * held by the current worker thread than there are other worker
                 * threads that might steal them, or zero if this thread is not
                 * operating in a ForkJoinPool. This value may be useful for
                 * heuristic decisions about whether to fork other tasks. In many
                 * usages of ForkJoinTasks, at steady state, each worker should
                 * aim to maintain a small constant surplus (for example, 3) of
                 * tasks, and to process computations locally if this threshold is
                 * exceeded.
                 */
                // @ts-ignore
                public static getSurplusQueuedTaskCount(): number;
                /**
                 * Returns the result that would be returned by {@link #join}, even
                 * if this task completed abnormally, or {@code null} if this task
                 * is not known to have been completed.  This method is designed
                 * to aid debugging, as well as to support extensions. Its use in
                 * any other context is discouraged.
                 */
                // @ts-ignore
                public abstract getRawResult(): java.lang.Object;
                /**
                 * Forces the given value to be returned as a result.  This method
                 * is designed to support extensions, and should not in general be
                 * called otherwise.
                 */
                // @ts-ignore
                protected abstract setRawResult(value: java.lang.Object): void;
                /**
                 * Immediately performs the base action of this task and returns
                 * true if, upon return from this method, this task is guaranteed
                 * to have completed normally. This method may return false
                 * otherwise, to indicate that this task is not necessarily
                 * complete (or is not known to be complete), for example in
                 * asynchronous actions that require explicit invocations of
                 * completion methods. This method may also throw an (unchecked)
                 * exception to indicate abnormal exit. This method is designed to
                 * support extensions, and should not in general be called
                 * otherwise.
                 */
                // @ts-ignore
                protected abstract exec(): boolean;
                /**
                 * Returns, but does not unschedule or execute, a task queued by
                 * the current thread but not yet executed, if one is immediately
                 * available. There is no guarantee that this task will actually
                 * be polled or executed next. Conversely, this method may return
                 * null even if a task exists but cannot be accessed without
                 * contention with other threads.  This method is designed
                 * primarily to support extensions, and is unlikely to be useful
                 * otherwise.
                 */
                // @ts-ignore
                protected static peekNextLocalTask(): java.util.concurrent.ForkJoinTask;
                /**
                 * Unschedules and returns, without executing, the next task
                 * queued by the current thread but not yet executed, if the
                 * current thread is operating in a ForkJoinPool.  This method is
                 * designed primarily to support extensions, and is unlikely to be
                 * useful otherwise.
                 */
                // @ts-ignore
                protected static pollNextLocalTask(): java.util.concurrent.ForkJoinTask;
                /**
                 * If the current thread is operating in a ForkJoinPool,
                 * unschedules and returns, without executing, the next task
                 * queued by the current thread but not yet executed, if one is
                 * available, or if not available, a task that was forked by some
                 * other thread, if available. Availability may be transient, so a
                 * {@code null} result does not necessarily imply quiescence of
                 * the pool this task is operating in.  This method is designed
                 * primarily to support extensions, and is unlikely to be useful
                 * otherwise.
                 */
                // @ts-ignore
                protected static pollTask(): java.util.concurrent.ForkJoinTask;
                /**
                 * Returns the tag for this task.
                 */
                // @ts-ignore
                public getForkJoinTaskTag(): number;
                /**
                 * Atomically sets the tag value for this task.
                 */
                // @ts-ignore
                public setForkJoinTaskTag(tag: number): number;
                /**
                 * Atomically conditionally sets the tag value for this task.
                 * Among other applications, tags can be used as visit markers
                 * in tasks operating on graphs, as in methods that check: {@code
                 * if (task.compareAndSetForkJoinTaskTag((short)0, (short)1))}
                 * before processing, otherwise exiting because the node has
                 * already been visited.
                 */
                // @ts-ignore
                public compareAndSetForkJoinTaskTag(e: number, tag: number): boolean;
                /**
                 * Returns a new {@code ForkJoinTask} that performs the {@code run}
                 * method of the given {@code Runnable} as its action, and returns
                 * a null result upon {@link #join}.
                 */
                // @ts-ignore
                public static adapt(runnable: java.lang.Runnable): java.util.concurrent.ForkJoinTask;
                /**
                 * Returns a new {@code ForkJoinTask} that performs the {@code run}
                 * method of the given {@code Runnable} as its action, and returns
                 * the given result upon {@link #join}.
                 */
                // @ts-ignore
                public static adapt(runnable: java.lang.Runnable, result: java.lang.Object): java.util.concurrent.ForkJoinTask;
                /**
                 * Returns a new {@code ForkJoinTask} that performs the {@code call}
                 * method of the given {@code Callable} as its action, and returns
                 * its result upon {@link #join}, translating any checked exceptions
                 * encountered into {@code RuntimeException}.
                 */
                // @ts-ignore
                public static adapt(callable: java.util.concurrent.Callable): java.util.concurrent.ForkJoinTask;
            }
        }
    }
}
