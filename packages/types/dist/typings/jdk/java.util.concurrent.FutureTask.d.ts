declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class FutureTask extends java.lang.Object {
                /**
                 * Creates a {@code FutureTask} that will, upon running, execute the
                 * given {@code Callable}.
                 */
                // @ts-ignore
                constructor(callable: java.util.concurrent.Callable)
                /**
                 * Creates a {@code FutureTask} that will, upon running, execute the
                 * given {@code Runnable}, and arrange that {@code get} will return the
                 * given result on successful completion.
                 */
                // @ts-ignore
                constructor(runnable: java.lang.Runnable, result: java.lang.Object)
                // @ts-ignore
                public isCancelled(): boolean;
                // @ts-ignore
                public isDone(): boolean;
                // @ts-ignore
                public cancel(mayInterruptIfRunning: boolean): boolean;
                // @ts-ignore
                public get(): java.lang.Object;
                // @ts-ignore
                public get(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Protected method invoked when this task transitions to state
                 * {@code isDone} (whether normally or via cancellation). The
                 * default implementation does nothing.  Subclasses may override
                 * this method to invoke completion callbacks or perform
                 * bookkeeping. Note that you can query status inside the
                 * implementation of this method to determine whether this task
                 * has been cancelled.
                 */
                // @ts-ignore
                protected done(): void;
                /**
                 * Sets the result of this future to the given value unless
                 * this future has already been set or has been cancelled.
                 * <p>This method is invoked internally by the {@link #run} method
                 * upon successful completion of the computation.
                 */
                // @ts-ignore
                protected set(v: java.lang.Object): void;
                /**
                 * Causes this future to report an {@link ExecutionException}
                 * with the given throwable as its cause, unless this future has
                 * already been set or has been cancelled.
                 * <p>This method is invoked internally by the {@link #run} method
                 * upon failure of the computation.
                 */
                // @ts-ignore
                protected setException(t: java.lang.Throwable): void;
                // @ts-ignore
                public run(): void;
                /**
                 * Executes the computation without setting its result, and then
                 * resets this future to initial state, failing to do so if the
                 * computation encounters an exception or is cancelled.  This is
                 * designed for use with tasks that intrinsically execute more
                 * than once.
                 */
                // @ts-ignore
                protected runAndReset(): boolean;
            }
        }
    }
}
