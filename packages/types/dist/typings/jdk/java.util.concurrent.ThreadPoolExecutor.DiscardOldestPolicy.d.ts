declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ThreadPoolExecutor {
                // @ts-ignore
                 class DiscardOldestPolicy extends java.lang.Object {
                    /**
                     * Creates a {@code DiscardOldestPolicy} for the given executor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Obtains and ignores the next task that the executor
                     * would otherwise execute, if one is immediately available,
                     * and then retries execution of task r, unless the executor
                     * is shut down, in which case task r is instead discarded.
                     */
                    // @ts-ignore
                    public rejectedExecution(r: java.lang.Runnable, e: java.util.concurrent.ThreadPoolExecutor): void;
                }
            }
        }
    }
}
