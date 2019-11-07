// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface RejectedExecutionHandler {
                /**
                 * Method that may be invoked by a {@link ThreadPoolExecutor} when
                 * {@link ThreadPoolExecutor#execute execute} cannot accept a
                 * task.  This may occur when no more threads or queue slots are
                 * available because their bounds would be exceeded, or upon
                 * shutdown of the Executor.
                 * <p>In the absence of other alternatives, the method may throw
                 * an unchecked {@link RejectedExecutionException}, which will be
                 * propagated to the caller of {@code execute}.
                 */
                // @ts-ignore
                 rejectedExecution(r: java.lang.Runnable, executor: java.util.concurrent.ThreadPoolExecutor): void;
            }
        }
    }
}
