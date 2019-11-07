declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ThreadPoolExecutor {
                // @ts-ignore
                 class CallerRunsPolicy extends java.lang.Object {
                    /**
                     * Creates a {@code CallerRunsPolicy}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Executes task r in the caller's thread, unless the executor
                     * has been shut down, in which case the task is discarded.
                     */
                    // @ts-ignore
                    public rejectedExecution(r: java.lang.Runnable, e: java.util.concurrent.ThreadPoolExecutor): void;
                }
            }
        }
    }
}
