// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ForkJoinPool {
                // @ts-ignore
                interface ForkJoinWorkerThreadFactory {
                    /**
                     * Returns a new worker thread operating in the given pool.
                     */
                    // @ts-ignore
                     newThread(pool: java.util.concurrent.ForkJoinPool): java.util.concurrent.ForkJoinWorkerThread;
                }
            }
        }
    }
}
